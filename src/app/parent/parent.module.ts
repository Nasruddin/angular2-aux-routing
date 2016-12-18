import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from './routing/routing.module';
 
import { ParentComponent } from './parent.component';
import { ChildrenModule } from './children/children.module'

@NgModule({
    imports: [
        CommonModule,
        RoutingModule,
        ChildrenModule
    ],
    declarations: [
        ParentComponent
    ],
    exports: [
        ParentComponent
    ]
})

export class ParentModule {}