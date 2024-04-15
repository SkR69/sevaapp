import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevaBookingComponent } from './seva-booking.component';

describe('SevaBookingComponent', () => {
  let component: SevaBookingComponent;
  let fixture: ComponentFixture<SevaBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevaBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SevaBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
