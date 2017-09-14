import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
//import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        BoardRoutingModule,
//        PageHeaderModule
    ],
    declarations: [BoardComponent]
})
export class BoardModule { }
