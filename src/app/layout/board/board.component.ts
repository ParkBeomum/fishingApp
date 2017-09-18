import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
//import our Carousel Component
import {CarouselComponent} from '../carousel/carousel.component';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  boards: any = [];
  constructor(private boardService:BoardService) { }

  ngOnInit() {
    //Retrive board from the API
    this.boardService.getAllPosts().subscribe(boards => {
      this.boards = boards;
    });
  }

}
