import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnloggedHeaderComponent } from './unlogged-header.component';

describe('UnloggedHeaderComponent', () => {
  let component: UnloggedHeaderComponent;
  let fixture: ComponentFixture<UnloggedHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnloggedHeaderComponent]
    });
    fixture = TestBed.createComponent(UnloggedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
