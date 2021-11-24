import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCalcComponent } from './basic-calc.component';

describe('BasicCalcComponent', () => {
  let component: BasicCalcComponent;
  let fixture: ComponentFixture<BasicCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicCalcComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
