import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) { }
  user = {
    usuario: '',
    password: ''
  };

  showValidationMessages = false;

  onSubmit() {
    if (this.user.usuario !== '' && this.user.password !== '') {
      const userData = {

        usuario: this.user.usuario,
        password: this.user.password
      };

      // Realizar la solicitud HTTP POST al endpoint
      this.http.post('http://localhost:8080/user/login', userData)
        .subscribe(
          (response: any) => {
            if (response.success) {
              // La solicitud se completó con éxito, el inicio de sesión fue exitoso
              console.log('Inicio de sesión exitoso');
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Bienvenido',
                showConfirmButton: false,
                timer: 1000
              })
              this.router.navigate(['']);
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Verifica tus credenciales',
                text: 'Los datos ingresados no son correctos',
              });
            }
          },
          (error) => {
            // Manejar errores en la solicitud
            Swal.fire({
              icon: 'error',
              title: 'Inicio de sesión fallido',
              text: 'Reintenta mas tarde',
            });
            console.error('Error al iniciar sesión:', error);
          }
        );
    }
  }
}
