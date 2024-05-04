import { TestBed } from '@angular/core/testing';

import { CommunicationToIlustrationService } from './communication-to-ilustration.service';

describe('CommunicationToIlustrationService', () => {
  let service: CommunicationToIlustrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationToIlustrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
