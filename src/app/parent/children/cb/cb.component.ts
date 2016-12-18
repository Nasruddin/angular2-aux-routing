import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'child-cb',
    template: `
        <h5>Child B Works!!!</h5>
    `
})
export class CBComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}