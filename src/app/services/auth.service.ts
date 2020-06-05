import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	authState: any = null;

	constructor(
    public afAuth: AngularFireAuth,
    public router: Router
  ) {
		this.afAuth.authState.subscribe(data => this.authState = data);
	}

	get authenticated(): boolean {
    return this.authState !== null;
	}

	get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null;
	}

	async login() {
    await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	}

	async logout() {
		await this.afAuth.signOut();
		localStorage.removeItem('user');
	}

}
