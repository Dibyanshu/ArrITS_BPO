import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCxoComponent } from './home-cxo.component';

describe('HomeCxoComponent', () => {
  let component: HomeCxoComponent;
  let fixture: ComponentFixture<HomeCxoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCxoComponent]
    });
    fixture = TestBed.createComponent(HomeCxoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
