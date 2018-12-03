import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import {WorkingTableComponent} from "./admin/working-table/working-table.component";
import { Observable } from "rxjs";
class UserToken {
  token = null;
  constructor() {
    this.token = localStorage.getItem("X-TOKEN");
  }
}

class Permissions {
  canActivate(user: UserToken, id: string): boolean {
    console.log("check Permissions")
    if (user.token === null)
      return false;
    return true;
  }
}

@Injectable()
class CanActivateTeam implements CanActivate {
  constructor(private permissions: Permissions, private currentUser: UserToken) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.permissions.canActivate(this.currentUser, route.params.id);
  }
}

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [CanActivateTeam],
    children: [
      {
        path: "dashboard",
        component:DashboardComponent
      },
      {
        path:"working",
        component:WorkingTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [CanActivateTeam, UserToken, Permissions],
  exports: [RouterModule]
})
export class AppRoutingModule { }
