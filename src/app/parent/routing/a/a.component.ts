import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-a',
    template: `
        <h2>A Component Works!!</h2>
    `
})
export class AComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}