import { TestBed } from '@angular/core/testing';

import { VideoLoaderService } from './video-loader-service.service';

describe('VideoLoaderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoLoaderService = TestBed.get(VideoLoaderService);
    expect(service).toBeTruthy();
  });
});
