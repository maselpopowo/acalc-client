import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamCalcComponent } from './stream-calc.component';

describe('StreamCalcComponent', () => {
  let component: StreamCalcComponent;
  let fixture: ComponentFixture<StreamCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
