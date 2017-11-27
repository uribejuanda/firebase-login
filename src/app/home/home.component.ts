import { Component, HostBinding, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [routerTransition()]
})
export class HomeComponent implements OnInit {
    @HostBinding('@routerTransition') routeAnimation = true;
    constructor() {
    }

    ngOnInit() {
    }

}
