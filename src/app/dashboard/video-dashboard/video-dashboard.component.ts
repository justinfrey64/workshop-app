import { Component, OnInit } from '@angular/core';
import { Video, videoData } from '../../types/types';
import { HttpClient } from '@angular/common/http';
import { VideoLoaderService } from 'src/app/services/video-loader-service.service';
import { Observable } from 'rxjs';

const apiUrl = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  videoList: Observable<Video[]>;

  selectedVideo: Video | undefined;

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.selectedVideo = video;
  }

  constructor(svc: VideoLoaderService) {
    this.videoList = svc.loadVideos();
  }

}


