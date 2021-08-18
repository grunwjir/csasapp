import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-secret-key',
  templateUrl: './secret-key.component.html',
  styleUrls: ['./secret-key.component.scss']
})
export class SecretKeyComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  updateSecret(secret: string) {
    this.authenticationService.setCredentials(secret);
  }

}
