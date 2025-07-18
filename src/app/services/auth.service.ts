import { Injectable } from '@angular/core';
import { Auth,signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'})
export class AuthService {

  constructor(private auth: Auth) { }

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  register(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }
  logout() {
    return from(this.auth.signOut());
  }
  currentUser() {
    return this.auth.currentUser;
  }
}
