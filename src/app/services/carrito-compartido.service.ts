// carrito-compartido.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarritoCompartidoService {
  private carritoSubject = new BehaviorSubject<any[]>([]);
  carrito$ = this.carritoSubject.asObservable();
  cantidadTotal$ = new BehaviorSubject<number>(0);

  agregarAlCarrito(producto: any) {
    //log the current value
    console.log(this.carritoSubject.value);
    const carritoActual = this.carritoSubject.value;
    carritoActual.push(producto);
    this.carritoSubject.next(carritoActual);

    this.actualizarCantidadTotal();
  }

  obtenerCarrito() {
    return this.carritoSubject.value;
  }

  limpiarCarrito() {
    this.carritoSubject.next([]);
    this.actualizarCantidadTotal();
  }

  private actualizarCantidadTotal() {
    const cantidadTotal = this.carritoSubject.value.length;
    this.cantidadTotal$.next(cantidadTotal);
  }
}
