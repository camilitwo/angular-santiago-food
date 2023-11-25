import { Component, OnInit } from '@angular/core';
import {CarritoCompartidoService} from "../services/carrito-compartido.service";
import {AuthService} from "../services/AuthService";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shop-homepage',
  templateUrl: './shop-homepage.component.html',
  styleUrls: ['./shop-homepage.component.css']
})
export class ShopHomepageComponent implements OnInit {

  constructor(private carritoService: CarritoCompartidoService,
              private authService: AuthService, private router: Router) {}

  agregarAlCarrito(nombre: string, precio: number) {
    const nuevoProducto = { nombre, precio };
    this.carritoService.agregarAlCarrito(nuevoProducto);
  }

  ngOnInit() {

    // Example: Check authentication status on component initialization
    this.authService.isAuthenticated().subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        this.router.navigate(['/']);
        let timerInterval: number | undefined;
        Swal.fire({
          title: "No estás autenticado",
          html: "Serás redirigido al inicio de sesión en <b></b> segundos.",
          timer:3000,
          timerProgressBar: false,
          didOpen: () => {
            // @ts-ignore
            Swal.showLoading();
            // @ts-ignore
            const timer = Swal.getPopup().querySelector("b");
            // @ts-ignore

            timerInterval = setInterval(() => {
              // @ts-ignore
              timer.textContent = `${Math.ceil(Swal.getTimerLeft() / 1000)}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
            this.router.navigate(['/login']).then(r => console.log(r));
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
            this.router.navigate(['/login']).then(r => console.log(r));
          }
        });
      }
    });
  }

}
