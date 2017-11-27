import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    @HostBinding('@routerTransition') routeAnimation = true;

    constructor(public afAuth: AngularFireAuth, private router: Router) {
        this.afAuth.authState.subscribe(auth => {
            if (auth) {
                //this.router.navigateByUrl('/home');
            }
        });
    }

    loginWithGoogle() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    loginWithFacebook() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    ngOnInit() {
    }

}
