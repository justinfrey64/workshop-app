import { Component, OnInit } from '@angular/core';
import { Video, videoData } from '../../types/types';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  constructor() { }

  videoList: Video[] = videoData;

  selectedVideo: Video | undefined;

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.selectedVideo = video;
  }
}


