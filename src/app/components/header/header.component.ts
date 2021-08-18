import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onLogout = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.onLogout.emit();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
