import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForumPopoverPage } from './forum-popover.page';

describe('ForumPopoverPage', () => {
  let component: ForumPopoverPage;
  let fixture: ComponentFixture<ForumPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumPopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForumPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
