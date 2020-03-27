import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjetoPage } from './projeto.page';

describe('ProjetoPage', () => {
  let component: ProjetoPage;
  let fixture: ComponentFixture<ProjetoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
