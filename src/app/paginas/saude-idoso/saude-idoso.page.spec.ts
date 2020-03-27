import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaudeIdosoPage } from './saude-idoso.page';

describe('SaudeIdosoPage', () => {
  let component: SaudeIdosoPage;
  let fixture: ComponentFixture<SaudeIdosoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeIdosoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaudeIdosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
