import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaudeCriancaPage } from './saude-crianca.page';

describe('SaudeCriancaPage', () => {
  let component: SaudeCriancaPage;
  let fixture: ComponentFixture<SaudeCriancaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeCriancaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaudeCriancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
