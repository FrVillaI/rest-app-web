import { TestBed } from '@angular/core/testing';

import { Nosotros2Service } from './nosotros2.service';

describe('Nosotros2Service', () => {
  let service: Nosotros2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Nosotros2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
