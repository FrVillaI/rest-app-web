import { Component } from '@angular/core';
import { ProductosService } from '../../service/productos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-menu.component.html',
  styleUrl: './lista-menu.component.css'
})
export class ListaMenuComponent {
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
