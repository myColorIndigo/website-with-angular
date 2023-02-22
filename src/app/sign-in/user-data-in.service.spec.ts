import { TestBed } from '@angular/core/testing';

import { UserDataInService } from './user-data-in.service';

describe('UserDataInService', () => {
  let service: UserDataInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
