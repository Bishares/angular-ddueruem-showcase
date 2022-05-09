import { TestBed } from '@angular/core/testing';

import { FeatureModelService } from './feature-model.service';

describe('FeatureModelService', () => {
  let service: FeatureModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
