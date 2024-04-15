import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanchangaComponent } from './panchanga.component';

describe('PanchangaComponent', () => {
  let component: PanchangaComponent;
  let fixture: ComponentFixture<PanchangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanchangaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanchangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
