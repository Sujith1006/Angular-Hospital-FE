import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpatientstoroomComponent } from './addpatientstoroom.component';

describe('AddpatientstoroomComponent', () => {
  let component: AddpatientstoroomComponent;
  let fixture: ComponentFixture<AddpatientstoroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpatientstoroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpatientstoroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
