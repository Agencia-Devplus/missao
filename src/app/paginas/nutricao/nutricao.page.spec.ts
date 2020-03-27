import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NutricaoPage } from './nutricao.page';

describe('NutricaoPage', () => {
  let component: NutricaoPage;
  let fixture: ComponentFixture<NutricaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutricaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NutricaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
