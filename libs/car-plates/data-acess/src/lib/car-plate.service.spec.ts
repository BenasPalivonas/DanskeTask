import { TestBed } from '@angular/core/testing';

import { CarPlateService } from './car-plate.service';

describe('CarPlateService', () => {
  let service: CarPlateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarPlateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
