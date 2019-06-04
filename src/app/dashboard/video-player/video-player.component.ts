import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/types/types';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() video: Video;
}
