import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BranchesComponent} from "./components/branches/branches.component";
import {CredentialsComponent} from "./components/credentials/credentials.component";
import {AuthenticationGuard} from "./guards/authentication.guard";

const routes: Routes = [
  {path: '', component: BranchesComponent, canActivate: [AuthenticationGuard]},
  {path: 'login', component: CredentialsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
