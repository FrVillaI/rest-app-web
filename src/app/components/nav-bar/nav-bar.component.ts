import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  service = inject(CarritoService)
  ocultar = localStorage.getItem('token')
  ocultar2 = localStorage.getItem('role')
  carrito: any[] = [];

  constructor(private carritoService: CarritoService) {}

  cerrar() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('productos');
    window.location.href = 'login';
  }
}
