import { TestBed } from '@angular/core/testing';

import { AddnewroomService } from './addnewroom.service';

describe('AddnewroomService', () => {
  let service: AddnewroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddnewroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
