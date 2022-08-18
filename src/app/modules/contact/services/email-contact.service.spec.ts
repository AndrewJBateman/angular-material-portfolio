import { TestBed } from '@angular/core/testing';

import { EmailContactService } from './email-contact.service';

describe('EmailContactService', () => {
  let service: EmailContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
