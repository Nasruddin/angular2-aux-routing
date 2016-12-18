import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing/routing.module';
import { ChildrenComponent } from './children.component';
 
@NgModule({
    imports: [CommonModule, RoutingModule],
    declarations: [ChildrenComponent],
    exports: [ChildrenComponent]
})

export class ChildrenModule{}