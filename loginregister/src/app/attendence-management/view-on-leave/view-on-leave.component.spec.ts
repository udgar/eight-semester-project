import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOnLeaveComponent } from './view-on-leave.component';

describe('ViewOnLeaveComponent', () => {
  let component: ViewOnLeaveComponent;
  let fixture: ComponentFixture<ViewOnLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOnLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOnLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
