import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
//import { PageHeaderModule } from './../../shared';
import { CarouselComponent } from '../carousel/carousel.component';

@NgModule({
    imports: [
        CommonModule,
        DashBoardRoutingModule,
//        PageHeaderModule
    ],
    declarations: [
      DashboardComponent,
      CarouselComponent
    ]
})
export class DashboardModule { }
