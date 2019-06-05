import { Component, OnInit } from '@angular/core';
import { Video, videoData } from '../../types/types';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  videoList: Video[] = [];

  selectedVideo: Video | undefined;

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.selectedVideo = video;
  }

  constructor(http: HttpClient) {
    http
      .get<Video[]>(apiUrl + '/videos')
      .subscribe(videos => this.videoList = videos);
  }

}


