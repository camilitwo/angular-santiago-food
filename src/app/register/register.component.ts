import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import Swal from "sweetalert2";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }
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


      this.http.post('http://localhost:8080/user/register', userData)
        .subscribe(
          (response: any) => {
            console.log(response);
            if (response.success) {
              this.toastr.success('Registro exitoso');
              this.router.navigate(['']).then(r => console.log('Registro exitoso'));
              console.log('Registro exitoso:', response);
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error al registrar',
                text: response.data,
              });
            }

          },
          (error) => {
            this.toastr.error('Error al registrar');
            console.error('Error al registrar:', error);
          }
        );

    }
  }
}
