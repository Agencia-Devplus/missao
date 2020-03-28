import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControlarHipertensaoPage } from './controlar-hipertensao.page';

describe('ControlarHipertensaoPage', () => {
  let component: ControlarHipertensaoPage;
  let fixture: ComponentFixture<ControlarHipertensaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlarHipertensaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlarHipertensaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
