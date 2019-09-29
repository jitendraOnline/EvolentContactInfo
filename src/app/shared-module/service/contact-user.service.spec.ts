import { TestBed } from '@angular/core/testing';

import { ContactUserService } from './contact-user.service';

describe('ContactUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactUserService = TestBed.get(ContactUserService);
    expect(service).toBeTruthy();
  });
});
