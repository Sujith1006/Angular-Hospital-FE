import { TestBed } from '@angular/core/testing';

import { ViewallpatientsService } from './viewallpatients.service';

describe('ViewallpatientsService', () => {
  let service: ViewallpatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewallpatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
