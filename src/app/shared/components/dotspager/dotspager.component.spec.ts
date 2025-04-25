import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotspagerComponent } from './dotspager.component';

describe('DotspagerComponent', () => {
  let component: DotspagerComponent;
  let fixture: ComponentFixture<DotspagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotspagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotspagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
