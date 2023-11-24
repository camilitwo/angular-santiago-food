import { Component } from '@angular/core';
import {CarritoCompartidoService} from "../services/carrito-compartido.service";

@Component({
  selector: 'app-shop-homepage',
  templateUrl: './shop-homepage.component.html',
  styleUrls: ['./shop-homepage.component.css']
})
export class ShopHomepageComponent {

  constructor(private carritoService: CarritoCompartidoService) {}

  agregarAlCarrito(nombre: string, precio: number) {
    const nuevoProducto = { nombre, precio };
    this.carritoService.agregarAlCarrito(nuevoProducto);
  }

}
