import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSelectionComponent } from './plan-selection.component';

describe('PlanSelectionComponent', () => {
  let component: PlanSelectionComponent;
  let fixture: ComponentFixture<PlanSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanSelectionComponent]
    });
    fixture = TestBed.createComponent(PlanSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
