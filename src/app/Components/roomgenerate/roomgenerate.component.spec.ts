import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomgenerateComponent } from './roomgenerate.component';

describe('RoomgenerateComponent', () => {
  let component: RoomgenerateComponent;
  let fixture: ComponentFixture<RoomgenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomgenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomgenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
