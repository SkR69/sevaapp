import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevaComponent } from './seva.component';

describe('SevaComponent', () => {
  let component: SevaComponent;
  let fixture: ComponentFixture<SevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SevaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
