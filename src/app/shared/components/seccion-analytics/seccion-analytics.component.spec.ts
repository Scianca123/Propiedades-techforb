import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionAnalyticsComponent } from './seccion-analytics.component';

describe('SeccionAnalyticsComponent', () => {
  let component: SeccionAnalyticsComponent;
  let fixture: ComponentFixture<SeccionAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
