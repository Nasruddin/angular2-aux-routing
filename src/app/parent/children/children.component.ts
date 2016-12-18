import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-children',
    template: `
        <h4>Children Works!!!</h4>
        <child-routing></child-routing>
    ` 
})
export class ChildrenComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}