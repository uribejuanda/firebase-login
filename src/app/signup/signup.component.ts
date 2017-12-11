import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { routerTransition } from '../router.animations';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    @HostBinding('@routerTransition') routeAnimation = true;
    hide = true;
    rForm: FormGroup;
    error: any;

    constructor(private fb: FormBuilder, public afAuth: AngularFireAuth, private router: Router) {
        this.rForm = fb.group({
            'email' : [null, Validators.compose([Validators.required, Validators.email])],
            'password' : [null, Validators.compose([Validators.required, Validators.minLength(4)])]
        });
    }

    ngOnInit() {
    }

    onSubmit(formData) {
        console.log(formData);
        this.afAuth.auth.createUserWithEmailAndPassword(
            formData.email,
            formData.password
        ).then(
            (success) => {
                console.log(success);
                this.router.navigate(['/login']);
            }).catch(
            (err) => {
                console.log(err);
                this.error = err;
            });
    }

}
