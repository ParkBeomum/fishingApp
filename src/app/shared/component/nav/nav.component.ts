import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    $('.nav').nav();
  }

}
