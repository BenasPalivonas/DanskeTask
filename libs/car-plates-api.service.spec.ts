import { TestBed } from '@angular/core/testing';

import { CarPlatesApiService } from './car-plates-api.service';

describe('CarPlatesApiService', () => {
  let service: CarPlatesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarPlatesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
