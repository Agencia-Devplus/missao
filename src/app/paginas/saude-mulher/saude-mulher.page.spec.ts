import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaudeMulherPage } from './saude-mulher.page';

describe('SaudeMulherPage', () => {
  let component: SaudeMulherPage;
  let fixture: ComponentFixture<SaudeMulherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeMulherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaudeMulherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
