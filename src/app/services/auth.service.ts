import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  authState: any = null;

  constructor(public auth: AngularFireAuth, public router: Router) {
    this.auth.authState.subscribe((data) => (this.authState = data));
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null;
  }

  async login(): Promise<void> {
    await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  async logout(): Promise<void> {
    await this.auth.signOut();
    localStorage.removeItem("user");
  }
}
