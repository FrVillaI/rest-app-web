import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-editar-usuarios',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './editar-usuarios.component.html',
  styleUrl: './editar-usuarios.component.css'
})
export class EditarUsuariosComponent {
  servicio = inject(UsuariosService)
  ruta = inject(Router)
  router = inject(ActivatedRoute)

  id: any
  email: any
  password: any
  edad: any
  genero: any
  role: any
  nombre: any
  apellido: any

  ngOnInit() {
    this.router.params.subscribe(r => {
      this.servicio.getUsuario(r['idUsuario']).subscribe(p => {
        this.id = p.id
        this.email = p.email
        this.password = p.password
        this.edad = p.edad
        this.genero = p.genero
        this.role = p.role
        this.nombre = p.nombre
        this.apellido = p.apellido
      })
    })
  }

  editar(datos: any) {
    this.servicio.putNosotros(datos.value).subscribe()
    this.ruta.navigateByUrl("usuarios")
  }
}
