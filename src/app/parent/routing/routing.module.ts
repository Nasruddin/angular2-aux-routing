import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AModule } from './a/a.module';
import { BModule } from './b/b.module';
 
import { RoutingComponent } from './routing.component';
import { routes } from './routing';
    
@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes), AModule, BModule],
    declarations: [RoutingComponent],
    exports: [RoutingComponent]
})

export class RoutingModule{}