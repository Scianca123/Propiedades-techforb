import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarFooterComponent } from './dashboar-footer.component';

describe('DashboarFooterComponent', () => {
  let component: DashboarFooterComponent;
  let fixture: ComponentFixture<DashboarFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboarFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
