import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  cerrar() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('productos');
    window.location.href = 'login';
  }
}
