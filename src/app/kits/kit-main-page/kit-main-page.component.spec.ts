import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitMainPageComponent } from './kit-main-page.component';

describe('KitMainPageComponent', () => {
  let component: KitMainPageComponent;
  let fixture: ComponentFixture<KitMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitMainPageComponent]
    });
    fixture = TestBed.createComponent(KitMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
