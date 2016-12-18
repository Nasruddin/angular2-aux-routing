import { Component }  from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <h2>Parent Works!!!</h2>
        <app-parent-router></app-parent-router>
        <app-children></app-children>
    `
})

export class ParentComponent {}