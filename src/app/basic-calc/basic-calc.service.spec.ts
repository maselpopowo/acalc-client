import { TestBed } from '@angular/core/testing';

import { BasicCalcService } from './basic-calc.service';

describe('BasicCalcService', () => {
  let service: BasicCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
