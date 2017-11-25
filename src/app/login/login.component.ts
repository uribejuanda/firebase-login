import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(public afAuth: AngularFireAuth) {
    }

    loginWithGoogle() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    loginWithFacebook() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    loginWithEmail() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.PhoneAuthProvider());
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    ngOnInit() {
    }

}
