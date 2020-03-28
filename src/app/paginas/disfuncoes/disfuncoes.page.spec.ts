import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisfuncoesPage } from './disfuncoes.page';

describe('DisfuncoesPage', () => {
  let component: DisfuncoesPage;
  let fixture: ComponentFixture<DisfuncoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisfuncoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisfuncoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
