import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private secret: string | undefined;

  setCredentials(secret: string) {
    this.secret = secret;
  }

  getSecret() {
    return this.secret;
  }

}
