import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSevaDashboardComponent } from './view-seva-dashboard.component';

describe('ViewSevaDashboardComponent', () => {
  let component: ViewSevaDashboardComponent;
  let fixture: ComponentFixture<ViewSevaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSevaDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSevaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
