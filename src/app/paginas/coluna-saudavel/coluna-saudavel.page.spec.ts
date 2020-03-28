import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColunaSaudavelPage } from './coluna-saudavel.page';

describe('ColunaSaudavelPage', () => {
  let component: ColunaSaudavelPage;
  let fixture: ComponentFixture<ColunaSaudavelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColunaSaudavelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColunaSaudavelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
