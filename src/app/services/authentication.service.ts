import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Branches} from "../models/branch.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private secret?: string;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    this.secret = btoa(username + ":" + password);
    return this.http.get<Branches>(`${environment.apiUrl}/login`);
  }

  logout(): void {
    this.secret = undefined;
  }

  isAuthenticated(): boolean {
    return !!this.secret;
  }

  getSecret(): string | undefined {
    return this.secret;
  }

}
