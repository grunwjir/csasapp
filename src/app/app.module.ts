import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BranchSearchComponent} from './components/branch-search/branch-search.component';
import {AuthenticationInterceptor} from "./interceptors/authentication.interceptor";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BranchesComponent} from './components/branches/branches.component';
import {BranchItemComponent} from './components/branch-item/branch-item.component';
import {HeaderComponent} from './components/header/header.component';
import {PhonePipe} from "./helpers/phone.pipe";
import {BranchPagingComponent} from './components/branch-paging/branch-paging.component';
import {CredentialsComponent} from './components/credentials/credentials.component';
import {NgProgressModule} from "ngx-progressbar";
import {NgProgressHttpModule} from "ngx-progressbar/http";


@NgModule({
  declarations: [
    AppComponent,
    BranchSearchComponent,
    PhonePipe,
    BranchesComponent,
    BranchItemComponent,
    HeaderComponent,
    BranchPagingComponent,
    CredentialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgProgressModule.withConfig({
      spinnerPosition: "right",
      color: "#0d6efd"
    }),
    NgProgressHttpModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
