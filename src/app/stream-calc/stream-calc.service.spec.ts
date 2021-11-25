import { TestBed } from '@angular/core/testing';

import { StreamCalcService } from './stream-calc.service';

describe('StreamCalcService', () => {
  let service: StreamCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
