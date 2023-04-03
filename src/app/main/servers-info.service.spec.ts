import { TestBed } from '@angular/core/testing';

import { ServersInfoService } from './servers-info.service';

describe('ServersInfoService', () => {
  let service: ServersInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServersInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
