import { TestBed } from '@angular/core/testing';

import { AppElementsServiceService } from './app-elements-service.service';

describe('AppElementsServiceService', () => {
  let service: AppElementsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppElementsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
