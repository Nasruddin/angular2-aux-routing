import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-b',
    template: `
        <h2>B Compoent works!!!</h2>
    `
})
export class BComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}