import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from "../services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    if (this.authenticationService.isAuthenticated()) {
      return true
    } else {
      this.router.navigate(['/login']).then(() => {
      });
      return false;
    }
  }

}
