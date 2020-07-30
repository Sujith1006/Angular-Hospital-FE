import { TestBed } from '@angular/core/testing';

import { GetroomdataService } from './getroomdata.service';

describe('GetroomdataService', () => {
  let service: GetroomdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetroomdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
