import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedEmployeeComponent } from './searched-employee.component';

describe('SearchedEmployeeComponent', () => {
  let component: SearchedEmployeeComponent;
  let fixture: ComponentFixture<SearchedEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
