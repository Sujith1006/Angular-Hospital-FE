import { TestBed } from '@angular/core/testing';

import { GivemedicationService } from './givemedication.service';

describe('GivemedicationService', () => {
  let service: GivemedicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GivemedicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
