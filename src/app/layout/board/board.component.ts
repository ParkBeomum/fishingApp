import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import {Http} from "@angular/http";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public data: any[];
  //constructor(private boardService:BoardService) { }
  constructor(private http:Http) { }
  ngOnInit() {
    //Retrive board from the API
    /*
    this.boardService.getAllPosts().subscribe(boards => {
      this.boards = boards;
    });
    */
    this.http.get("./layout/board/data.json")
    .subscribe((data)=> {
        setTimeout(()=> {
            this.data = data.json();
        }, 2000);
    });
  }

}
