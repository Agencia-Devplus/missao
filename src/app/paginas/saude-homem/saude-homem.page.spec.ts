import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaudeHomemPage } from './saude-homem.page';

describe('SaudeHomemPage', () => {
  let component: SaudeHomemPage;
  let fixture: ComponentFixture<SaudeHomemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeHomemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaudeHomemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
