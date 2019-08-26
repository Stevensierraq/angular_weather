import { TestBed } from '@angular/core/testing';

import { ForcastServiceService } from './forcast-service.service';

describe('ForcastServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForcastServiceService = TestBed.get(ForcastServiceService);
    expect(service).toBeTruthy();
  });
});
