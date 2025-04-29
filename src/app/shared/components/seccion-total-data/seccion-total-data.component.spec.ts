import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionTotalDataComponent } from './seccion-total-data.component';

describe('SeccionTotalDataComponent', () => {
  let component: SeccionTotalDataComponent;
  let fixture: ComponentFixture<SeccionTotalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionTotalDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionTotalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
