import { Component } from '@angular/core';
import {CarritoCompartidoService} from "../services/carrito-compartido.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrls: ['./detail-car.component.css']
})
export class DetailCarComponent {
  carrito: any[] = [];
  total: number = 0;
  showLoader :boolean = false;

  constructor(private carritoService: CarritoCompartidoService, private router: Router) {}

  ngOnInit() {
    this.carritoService.carrito$.subscribe((carrito) => {
      this.carrito = carrito;
      this.calcularTotal();
    });
  }

  calcularTotal(): number {
    this.total = this.carrito.reduce((acc, producto) => acc + producto.precio, 0);
    return this.total;
  }

  totalGreaterThanZero(): boolean {
    return this.calcularTotal() > 0;
  }


  pagarTotal() {
    this.showLoader = true;

    setTimeout(() => {
      console.log('Total a pagar:', this.total);
      Swal.fire({
        icon: 'success',
        title: 'Pago exitoso',
        text: 'Tu pago se ha realizado con éxito',
      }).then(() => {
        this.showLoader = false;
        this.carritoService.limpiarCarrito();
        this.router.navigate(['/shop']);
      });

    }, 1000); // 2000 milliseconds (2 seconds)

  }
}
