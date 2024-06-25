import { Component } from '@angular/core';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  productos: any;
  totalPagar: number = 0;
  totalIva: number = 0;
  totalPagarIva: number = 0;

  constructor(private servicios: CarritoService) { }

  ngOnInit() {
    this.productos = this.servicios.getProductos();
    console.log(this.productos);
    this.calTotal()
  }

  calTotal() {
    this.totalPagar = 0;
    for (let producto of this.productos) {
      if (producto.precio) {
        this.totalPagar += producto.precio;
      }
    }
    this.totalIva = this.totalPagar * 0.12;
    this.totalPagarIva = parseFloat((this.totalIva + this.totalPagar).toFixed(2));
  }

  deleteID(id: number) {
    console.log("Eliminar producto con ID:", id);
    this.servicios.deleteProductoByID(id);
    this.productos = this.servicios.getProductos();
    this.calTotal();
  }

  finalizar(){
    this.servicios.clearCarrito()
    window.location.reload()
  }
  
}
