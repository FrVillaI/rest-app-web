import { Component, inject } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule, NgForm } from '@angular/forms';
import { Nosotros2Service } from '../../service/nosotros2.service'; 

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  id: any
  nombre:any
  apellido:any
  email: any
   password: any
   role:any
  

    servicio = inject(Nosotros2Service)
  
    guardar(datos: NgForm) {
      if (this.email != "") {
        console.log(datos.value);
        this.servicio.postNosotros(datos.value).subscribe()
        window.location.reload()
      }
  
    }
  }
