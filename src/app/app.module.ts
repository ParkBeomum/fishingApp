import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { BoardService } from './services/board.service';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Angular2FontawesomeModule,
    AlertModule.forRoot(),

  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
