import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApoiadoresPage } from './apoiadores.page';

describe('ApoiadoresPage', () => {
  let component: ApoiadoresPage;
  let fixture: ComponentFixture<ApoiadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoiadoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApoiadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
