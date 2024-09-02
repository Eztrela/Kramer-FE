import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialSectionComponent } from './initial-section.component';

describe('InitialSectionComponent', () => {
  let component: InitialSectionComponent;
  let fixture: ComponentFixture<InitialSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitialSectionComponent]
    });
    fixture = TestBed.createComponent(InitialSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
