import { TestBed } from '@angular/core/testing';

import { AdminSharedDataService } from './admin-shared-data.service';

describe('AdminSharedDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminSharedDataService = TestBed.get(AdminSharedDataService);
    expect(service).toBeTruthy();
  });
});
