import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class UserService implements CanActivate {

    userLoggedIn: boolean = false;
    loggedInUser: string;
    authUser: any;

    constructor( private _router: Router) {
        firebase.initializeApp({
            apiKey: 'AIzaSyAYbYB97bVf3N2yJ93kdUDmUU9GXstv2-c',
            authDomain: 'doccaz-972.firebaseapp.com',
            databaseURL: 'https://doccaz-972.firebaseio.com',
            projectId: 'doccaz-972',
            storageBucket: 'doccaz-972.appspot.com',
            messagingSenderId: '903327218321'
          });
    }
    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.verifyLogin(url);
    }

    verifyLogin(url: string): boolean {
        if ( this.userLoggedIn) { return true; }

        this._router.navigate(['/login']);
        return false;
    }

    register(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch( function(error) {
            alert(`${error.message} Please Try Again!`);
        });
    }

    verifyUser() {
        this.authUser = firebase.auth().currentUser;

        if (this.authUser) {
            alert(`Welcom ${this.authUser.email}`);
            this.loggedInUser = this.authUser.email;
            this.userLoggedIn = true;
            this._router.navigate(['/admin']);
        }
    }

    login(loginEmail: string, loginPassword: string) {
        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
        .catch( function(error) {
            alert(`${error.message} Unable to login. Please try again!`);
        });
    }

    logout() {
        this.userLoggedIn = false;
        firebase.auth().signOut().then( function() {
            alert(`Logged out`);
        }, function(error) {
            alert(`${error.message} Unable to logout`)
        }
        )
    }
}
