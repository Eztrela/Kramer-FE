import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedHeaderComponent } from './logged-header.component';

describe('LoggedHeaderComponent', () => {
  let component: LoggedHeaderComponent;
  let fixture: ComponentFixture<LoggedHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggedHeaderComponent]
    });
    fixture = TestBed.createComponent(LoggedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
