import { TestBed } from '@angular/core/testing';

import { MBDataService } from './mb-data.service';

describe('MBDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MBDataService = TestBed.get(MBDataService);
    expect(service).toBeTruthy();
  });
});
