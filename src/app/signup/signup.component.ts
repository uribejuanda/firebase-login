import { Component, HostBinding, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    @HostBinding('@routerTransition') routeAnimation = true;
    hide = true;
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required, Validators.minLength(4)]);

    constructor() {
    }

    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }

    ngOnInit() {
    }

}
