import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFiltersPanelComponent } from './search-filters-panel.component';

describe('SearchFiltersPanelComponent', () => {
  let component: SearchFiltersPanelComponent;
  let fixture: ComponentFixture<SearchFiltersPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFiltersPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFiltersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
