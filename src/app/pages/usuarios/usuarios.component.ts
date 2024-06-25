import { Component } from '@angular/core';
import { UsuariosService } from '../../service/usuarios.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {


  constructor(private usuarioService: UsuariosService) { }
  usuarios: any;

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(u => {
      this.usuarios = u;
    });
  }

  eliminar(id: any) {
    this.usuarioService.deleteUsuario(id).subscribe()
    window.location.reload()
  }

}
