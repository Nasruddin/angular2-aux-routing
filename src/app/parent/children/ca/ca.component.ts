import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'child-ca',
    template: `
        <h5>Child A Works!!!</h5>
    `
})
export class CAComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}