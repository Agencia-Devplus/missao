import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaudeAdolescentePage } from './saude-adolescente.page';

describe('SaudeAdolescentePage', () => {
  let component: SaudeAdolescentePage;
  let fixture: ComponentFixture<SaudeAdolescentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeAdolescentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaudeAdolescentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
