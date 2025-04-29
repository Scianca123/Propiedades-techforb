import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossClosureComponent } from './cross-closure.component';

describe('CrossClosureComponent', () => {
  let component: CrossClosureComponent;
  let fixture: ComponentFixture<CrossClosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossClosureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrossClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
