import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitSelectionComponent } from './kit-selection.component';

describe('KitSelectionComponent', () => {
  let component: KitSelectionComponent;
  let fixture: ComponentFixture<KitSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitSelectionComponent]
    });
    fixture = TestBed.createComponent(KitSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
