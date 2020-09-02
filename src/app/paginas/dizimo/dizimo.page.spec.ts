import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DizimoPage } from './dizimo.page';

describe('DizimoPage', () => {
  let component: DizimoPage;
  let fixture: ComponentFixture<DizimoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DizimoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DizimoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
