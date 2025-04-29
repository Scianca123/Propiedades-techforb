import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerSeccionComponent } from './explorer-seccion.component';

describe('ExplorerSeccionComponent', () => {
  let component: ExplorerSeccionComponent;
  let fixture: ComponentFixture<ExplorerSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorerSeccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorerSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
