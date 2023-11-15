import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {NavbarComponent} from "./navbar/navbar.component";
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import {AboutComponent} from "./about/about.component";
import { SignUpComponent } from './sign-up/sign-up.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LandingStoresComponent } from './landing-stores/landing-stores.component';
import { NavbarStoresComponent } from './navbar-stores/navbar-stores.component';
import { ChartMapComponent } from './chart-map/chart-map.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    LandingPageComponent,
    NavbarComponent,
    RegisterComponent,
    ResetComponent,
    AboutComponent,
    SignUpComponent,
    ServicesComponent,
    ContactComponent,
    LandingStoresComponent,
    NavbarStoresComponent,
    ChartMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
ToastrModule.forRoot({
  timeOut: 2000, // Duración de la notificación en milisegundos
  positionClass: 'toast-top-right', // Posición de la notificación (arriba a la derecha)
  closeButton: true, // Mostrar un botón para cerrar la notificación
})
