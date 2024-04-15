import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSevaComponent } from './search-seva.component';

describe('SearchSevaComponent', () => {
  let component: SearchSevaComponent;
  let fixture: ComponentFixture<SearchSevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSevaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchSevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
