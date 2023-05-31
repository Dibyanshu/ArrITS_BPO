import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCornerComponent } from './social-corner.component';

describe('SocialCornerComponent', () => {
  let component: SocialCornerComponent;
  let fixture: ComponentFixture<SocialCornerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialCornerComponent]
    });
    fixture = TestBed.createComponent(SocialCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
