import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
*/
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent, HeaderComponent } from '../shared';

@NgModule({
    imports: [
      /* 다른모듈에서 export된 클래스 활용 의존 */
        CommonModule,

//        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
//        TranslateModule
    ],
    /* 이모듈에 속한 view class */
    declarations: [
        LayoutComponent,
        NavComponent,
        HeaderComponent,
    ]
})
export class LayoutModule { }
