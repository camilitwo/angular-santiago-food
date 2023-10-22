import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
    constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['/login']); // Reemplaza 'login' con la ruta real de tu página de inicio de sesión
  }
}
