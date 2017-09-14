import { Component, OnInit } from '@angular/core';
// Import the Image interface
import {Image} from './image.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public images = IMAGES;
  constructor() { }

  ngOnInit() {
  }
}

//IMAGES array implementing Image interface
var IMAGES: Image[] = [
  { "title": "We are covered", "url": "assets/images/1.jpg" },
  { "title": "Generation Gap", "url": "assets/images/2.jpg" },
  { "title": "Potter Me", "url": "assets/images/3.jpg" },
  { "title": "We are covered", "url": "assets/images/1.jpg" },
  { "title": "Generation Gap", "url": "assets/images/2.jpg" },
];
