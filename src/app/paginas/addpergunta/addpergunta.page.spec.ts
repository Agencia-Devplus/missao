import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddperguntaPage } from './addpergunta.page';

describe('AddperguntaPage', () => {
  let component: AddperguntaPage;
  let fixture: ComponentFixture<AddperguntaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddperguntaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddperguntaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
