import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTotalDataComponent } from './card-total-data.component';

describe('CardTotalDataComponent', () => {
  let component: CardTotalDataComponent;
  let fixture: ComponentFixture<CardTotalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTotalDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTotalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
