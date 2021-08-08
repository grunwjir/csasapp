import { Component } from '@angular/core';
import {AuthenticationService} from "./authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Csas Branches';

  constructor(private authenticationService: AuthenticationService) {
  }

  updateSecret(secret: string) {
    this.authenticationService.setCredentials(secret);
  }

}
