import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMainPageComponent } from './plan-main-page.component';

describe('PlanMainPageComponent', () => {
  let component: PlanMainPageComponent;
  let fixture: ComponentFixture<PlanMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanMainPageComponent]
    });
    fixture = TestBed.createComponent(PlanMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
