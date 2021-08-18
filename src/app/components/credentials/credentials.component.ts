import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent implements OnInit {
  username?: string;
  password?: string;
  invalidCredentials: boolean = false

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.username != null && this.password != null) {
      this.authenticationService.login(this.username, this.password)
        .subscribe(() => {
          this.invalidCredentials = false
          this.router.navigate(['/']).then(() => {
          });
        }, () => this.invalidCredentials = true)
    } else {
      this.invalidCredentials = true;
    }
  }

}
