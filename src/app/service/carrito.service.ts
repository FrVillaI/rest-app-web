import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito: any[] = [];

  constructor() {
    this.cargarCarrito();
  }

  // Cargar carrito desde localStorage
  private cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
    }
  }

  // Guardar carrito en localStorage
  private guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  // Obtener todos los productos del carrito - GET
  getProductos() {
    return this.carrito;
  }

  // Agregar un nuevo producto al carrito - POST
  postProducto(producto: any) {
    this.carrito.push(producto);
    this.guardarCarrito();
  }

  // Eliminar un producto del carrito por su ID - DELETE
  deleteProductoByID(id: number) {
    this.carrito = this.carrito.filter(producto => producto.productoID !== id);
    this.guardarCarrito();
  }

  // Eliminar todos los productos del carrito - DELETE
  deleteAllProductos() {
    this.carrito = [];
    this.guardarCarrito();
  }

  // Vaciar el carrito - DELETE
  clearCarrito() {
    this.carrito = [];
    this.guardarCarrito();
  }
}
