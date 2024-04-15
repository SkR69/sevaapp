import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSevaDetailsComponent } from './view-seva-details.component';

describe('ViewSevaDetailsComponent', () => {
  let component: ViewSevaDetailsComponent;
  let fixture: ComponentFixture<ViewSevaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSevaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSevaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
