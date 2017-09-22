import {Component, Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Component({
    selector: 'hello-angular',
    template: `<h1>Hello {{name}}</h1>`
})

@Injectable()
export class AppComponent {
    name = 'Angular!';

    constructor(private http: Http) {
        this.http
            .get('/api/title')
            .subscribe((data) => {
                this.name = data.json().title
            })
    }
}
