import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComentariosForumPage } from './comentarios-forum.page';

describe('ComentariosForumPage', () => {
  let component: ComentariosForumPage;
  let fixture: ComponentFixture<ComentariosForumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariosForumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComentariosForumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
