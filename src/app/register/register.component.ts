import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http: HttpClient, private router: Router) { }
  user = {
    nombre: '',
    usuario: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  showValidationMessages = false;

  onSubmit() {
    if (this.user.nombre !== '' && this.user.usuario !== '' && this.user.email !== '' && this.user.password !== ''
      && this.user.confirmPassword !== '') {

      if (this.user.password !== this.user.confirmPassword) {
        Swal.fire({
          position: 'bottom-end',
          icon: 'error',
          title: 'Las contraseñas no coinciden',
          showConfirmButton: false,
          timer: 2000
        })
        return;
      }

      const userData = {
        nombre: this.user.nombre,
        usuario: this.user.usuario,
        email: this.user.email,
        password: this.user.password
      };

      // Realizar la solicitud HTTP POST al endpoint
      this.http.post('http://localhost:8080/user/register', userData)
        .subscribe(
          (response: any) => {
            console.log(response);
            if (response.success) {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Registro exitoso!',
                showConfirmButton: false,
                timer: 1000
              })
              this.router.navigate(['']);
              console.log('Registro exitoso:', response);
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error al registrar',
                text: response.data, // Muestra el mensaje de usuario existente recibido en la respuesta
              });
            }

          },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Verifica tus credenciales',
              text: 'Los datos ingresados no son correctos',
            });
            // Manejar errores en la solicitud
            console.error('Error al registrar:', error);
          }
        );

    }
  }
}
