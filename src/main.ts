import { bootstrapApplication } from "@angular/platform-browser";
import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { LoginComponent } from "./app/components/login/login.component";
import { RegisterComponent } from "./app/components/register/register.component";
import { HomeComponent } from "./app/components/home/home.component";
import { AuthGuard } from "./app/guards/auth.guard";
import { UserComponent } from "./app/components/user/user.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "user", component: UserComponent, canActivate: [AuthGuard] },
];

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`,
})
export class App {}

bootstrapApplication(App, {
  providers: [provideRouter(routes), provideHttpClient()],
});
