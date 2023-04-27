import { TestBed } from '@angular/core/testing';

import { AddServerService } from './add-server.service';

describe('AddServerService', () => {
  let service: AddServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
