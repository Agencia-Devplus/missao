import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuncoesComponent } from './funcoes.component';

describe('FuncoesComponent', () => {
  let component: FuncoesComponent;
  let fixture: ComponentFixture<FuncoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncoesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuncoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
