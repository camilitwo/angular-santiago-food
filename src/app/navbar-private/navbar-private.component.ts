import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CarritoCompartidoService} from "../services/carrito-compartido.service";

@Component({
  selector: 'app-navbar-private',
  templateUrl: './navbar-private.component.html',
  styleUrls: ['./navbar-private.component.css']
})
export class NavbarPrivateComponent implements OnInit{
  isDetailRoute: boolean = false;
  cantidadTotal: number = 0;
  saldo: number = 0;
  carrito: any[] = [];
  total: number = 0;
  constructor(private carritoService: CarritoCompartidoService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.carritoService.cantidadTotal$.subscribe((cantidad) => {

      this.cantidadTotal = cantidad;
    });

    this.route.url.subscribe(urlSegments => {
      // Check if the current route is '/detail'
      this.isDetailRoute = urlSegments.length > 0 && urlSegments[0].path === 'detail';
    });

    this.carritoService.carrito$.subscribe((carrito) => {
      this.carrito = carrito;
      this.calcularTotal();
    });
  }

  calcularTotal(): number {
    this.total = this.carrito.reduce((acc, producto) => acc + producto.precio, 0);
    this.saldo = 19890;
    if(this.total > 0){
      this.saldo = this.total + 19870;
    }

    return this.total;
  }

}
