import { Component, HostBinding, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.scss'],
    animations: [routerTransition()]
})
export class EmailComponent implements OnInit {
    @HostBinding('@routerTransition') routeAnimation = true;

    constructor() {
    }

    ngOnInit() {
    }

}
