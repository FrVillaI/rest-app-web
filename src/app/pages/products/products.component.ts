import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private servicios: ProductosService) { }
  productos: any

  ngOnInit() {
    this.servicios.getProductos().subscribe(p => {
      this.productos = p
    })
  }

  eliminar(id: any) {
    this.servicios.deleteProductosID(id).subscribe()
    window.location.reload()
  }

}
