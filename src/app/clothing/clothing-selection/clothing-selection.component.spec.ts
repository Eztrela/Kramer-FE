import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingSelectionComponent } from './clothing-selection.component';

describe('ClothingSelectionComponent', () => {
  let component: ClothingSelectionComponent;
  let fixture: ComponentFixture<ClothingSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClothingSelectionComponent]
    });
    fixture = TestBed.createComponent(ClothingSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
