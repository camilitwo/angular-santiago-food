import { Component } from '@angular/core';
import {CarritoCompartidoService} from "../services/carrito-compartido.service";

@Component({
  selector: 'app-navbar-private',
  templateUrl: './navbar-private.component.html',
  styleUrls: ['./navbar-private.component.css']
})
export class NavbarPrivateComponent {

  cantidadTotal: number = 0;
  constructor(private carritoService: CarritoCompartidoService) {}

  ngOnInit() {
    this.carritoService.cantidadTotal$.subscribe((cantidad) => {
      this.cantidadTotal = cantidad;
    });
  }

}
