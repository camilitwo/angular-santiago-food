import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {RegisterComponent} from "./register/register.component";
import {ResetComponent} from "./reset/reset.component";
import { LandingStoresComponent } from './landing-stores/landing-stores.component';
import {ShopHomepageComponent} from "./shop-homepage/shop-homepage.component";
import {DetailCarComponent} from "./detail-car/detail-car.component";

const routes: Routes = [
  { path : '', component: LandingPageComponent },
  { path : 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'stores', component: LandingStoresComponent },
  { path: 'shop', component: ShopHomepageComponent },
  {path: 'detail', component: DetailCarComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
