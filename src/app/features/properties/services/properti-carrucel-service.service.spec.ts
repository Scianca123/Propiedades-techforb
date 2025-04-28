import { TestBed } from '@angular/core/testing';

import { PropertiCarrucelServiceService } from './properti-carrucel-service.service';

describe('PropertiCarrucelServiceService', () => {
  let service: PropertiCarrucelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertiCarrucelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
