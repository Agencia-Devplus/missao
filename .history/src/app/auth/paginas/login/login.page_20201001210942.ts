import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { AuthService } from "src/app/core/services/auth.service";
import { AuthProvider } from "src/app/core/services/auth.types";
import { OverlayService } from "src/app/core/services/overlay.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NavController, Platform, LoadingController } from "@ionic/angular";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { AngularFireAuth } from "@angular/fire/auth";

import * as firebase from "firebase/app";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;
  authProviders = AuthProvider;
  configs = {
    isSignIn: true,
    acao: "Entrar",
    mudarAcao: "Criar Conta",
  };
  isForgotPassword: boolean;
  responseMessage: string = "";
  responseMessageType: string = "";
  emailInput: string;

  facebookAuthToken: any;

  private nameControl = new FormControl("", [
    Validators.required,
    Validators.minLength(3),
  ]);

  loading: any;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private overlayService: OverlayService,
    private rotaAtiva: ActivatedRoute,
    private navCtrl: NavController,
    private google: GooglePlus,
    private fb: Facebook,
    private router: Router,
    private platform: Platform,
    public loadingController: LoadingController,
    private fireAuth: AngularFireAuth,
    private overlay: OverlayService
  ) {
    this.isForgotPassword = false;
  }

  ngOnInit(): void {
    this.criarFormulario();
    this.carregar();
  }
  showMessage(type, msg) {
    this.responseMessageType = type;
    this.responseMessage = msg;
    setTimeout(() => {
      this.responseMessage = "";
    }, 2000);
  }

  async carregar() {
    this.loading = await this.loadingController.create({
      message: "Connecting ...",
    });
  }

  private criarFormulario(): void {
    this.formLogin = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  get nome(): FormControl {
    return <FormControl>this.formLogin.get("nome");
  }

  get email(): FormControl {
    return <FormControl>this.formLogin.get("email");
  }

  get password(): FormControl {
    return <FormControl>this.formLogin.get("password");
  }

  mudarAuthAcao(): void {
    this.configs.isSignIn = !this.configs.isSignIn;
    const { isSignIn } = this.configs;
    this.configs.acao = isSignIn ? "Login" : "Criar Conta";
    this.configs.mudarAcao = isSignIn ? "Criar Conta" : "Já tenho uma Conta";
    !isSignIn
      ? this.formLogin.addControl("nome", this.nameControl)
      : this.formLogin.removeControl("nome");
  }
  async forgotPassword() {
    await this.overlay.alert({
      message: "Enviamos um link de redefinição de senha para seu e-mail",
      buttons: [
        {
          text: "Ok",
          handler: () => {
            this.authService.sendPasswordResetEmail(this.emailInput);
            this.isForgotPassword = false;
          },
        },
      ],
    });
  }
  /* forgotPassword() {
    this.authService.sendPasswordResetEmail(this.emailInput)
      .then(res => {
        console.log(res);
        this.isForgotPassword = false;
        this.showMessage("successo", "Por favor verifique sua caixa de e-mail");
      }, err => {
        this.showMessage("danger", err.message);
      });
  } */

  /* login email */
  async aoClicarEntrar(provider: AuthProvider): Promise<void> {
    const loading = await this.overlayService.loading();
    try {
      const credenciais = await this.authService.autenticar({
        isSignIn: this.configs.isSignIn,
        user: this.formLogin.value,
        provider,
      });
      this.navCtrl.navigateForward(
        this.rotaAtiva.snapshot.queryParamMap.get("redirect") ||
          "/inicio/painel/home"
      );
      console.log("OK");
    } catch (e) {
      await this.overlayService.toast({
        message: e.message,
      });
    } finally {
      loading.dismiss();
    }
  }
  /* fim login email */

  /* Login Google */
  async presentLoading(loading) {
    await loading.present();
  }

  async loginGoogle() {
    let params = {};
    if (this.platform.is("android")) {
      params = {
        webClientId:
          "934842231492-nq83lhgf1c7dlgbdn0r83leemtivt6qr.apps.googleusercontent.com",
        offline: true,
      };
    } else {
      params = {};
    }

    this.google
      .login(params)
      .then((response) => {
        console.log("Response Google Login: ", response);
        const { idToken, accessToken } = response;
        this.onLoginSuccessGoogle(idToken, accessToken);
      })
      .catch((error) => {
        console.log(error);
        alert("error:" + JSON.stringify(error));
      });
  }

  onLoginSuccessGoogle(accessToken, accessSecret) {
    const credential = accessSecret
      ? firebase.auth.GoogleAuthProvider.credential(accessToken, accessSecret)
      : firebase.auth.GoogleAuthProvider.credential(accessToken);
    this.fireAuth.auth.signInWithCredential(credential).then((response) => {
      this.router.navigate(["/inicio/painel/home"]);
      this.loading.dismiss();
    });
  }
  onLoginErrorGoogle(err) {
    console.log(err);
  }
  /* fim login google */

  /* login facebook */
  async loginFacebook() {
    this.fb
      .login(["email"])
      .then((response: FacebookLoginResponse) =>
        console.log("Logged In", response)
      );
    /*this.fb
        .login(["email", "public_profile"])
        .then((response: FacebookLoginResponse) => {
          this.onLoginSuccessFacebook(response);
          console.log(response.authResponse.accessToken);
        })
        .catch((error) => {
          console.log(error);
          alert("error:" + error);
        });*/
  }

  onLoginSuccessFacebook(res: FacebookLoginResponse) {
    //const { token } = res;
    const credential = firebase.auth.FacebookAuthProvider.credential(
      res.authResponse.accessToken
    );
    this.fireAuth.auth.signInWithCredential(credential).then((response) => {
      this.router.navigate(["/inicio/painel/home"]);
      this.loading.dismiss();
    });
  }
  onLoginError(err) {
    console.log(err);
  }

  /* fim login facebook */
}
