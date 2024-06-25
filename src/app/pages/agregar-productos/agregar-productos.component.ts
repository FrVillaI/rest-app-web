import { Component, inject } from '@angular/core';
import { ProductosService } from '../../service/productos.service'; 
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-productos',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent {
  servicio = inject(ProductosService);
  ruta = inject(Router);
  productoID: any;
  nombre: any;
  codigo: any;
  descripcion: any;
  categoria: any;
  url: any;
  precio: any;

  agregar(form: any) {
    const producto = {
      productoID: this.productoID,
      nombre: this.nombre,
      codigo: this.codigo,
      descripcion: this.descripcion,
      categoria: this.categoria,
      url: this.url,
      precio: this.precio
    };

    this.servicio.postProductos(producto).subscribe(() => {
      this.ruta.navigateByUrl("lista-productos");
    });
  }
}
