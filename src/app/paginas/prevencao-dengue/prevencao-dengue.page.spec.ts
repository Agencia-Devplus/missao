import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrevencaoDenguePage } from './prevencao-dengue.page';

describe('PrevencaoDenguePage', () => {
  let component: PrevencaoDenguePage;
  let fixture: ComponentFixture<PrevencaoDenguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevencaoDenguePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrevencaoDenguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
