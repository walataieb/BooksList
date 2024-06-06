import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInspectionComponent } from './display-inspection.component';

describe('DisplayInspectionComponent', () => {
  let component: DisplayInspectionComponent;
  let fixture: ComponentFixture<DisplayInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayInspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
