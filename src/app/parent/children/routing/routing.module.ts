import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoutingComponent } from './routing.component';

import { routes, importedRoutes } from './routing';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [RoutingComponent, ...importedRoutes],
    exports: [RoutingComponent]
})

export class RoutingModule{}