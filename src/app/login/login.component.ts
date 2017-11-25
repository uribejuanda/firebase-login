import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
