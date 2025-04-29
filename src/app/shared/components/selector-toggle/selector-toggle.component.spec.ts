import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorToggleComponent } from './selector-toggle.component';

describe('SelectorToggleComponent', () => {
  let component: SelectorToggleComponent;
  let fixture: ComponentFixture<SelectorToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
