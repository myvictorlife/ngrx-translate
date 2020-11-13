import { TestBed } from '@angular/core/testing';

import { NgrxTranslateService } from './ngrx-translate.service';

describe('NgrxTranslateService', () => {
  let service: NgrxTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrxTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
