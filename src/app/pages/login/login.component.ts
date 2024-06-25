import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  servicio = inject(LoginService);
  email: any;
  password: any;
  passwordFieldType: string = 'password';
  userRole: string = ''; 

  constructor(private router: Router) {}

  ngOnInit() {

    this.userRole = localStorage.getItem('role') || '';
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  login(formulario: any) {
    this.servicio.postUsers(formulario.value).subscribe(response => {
      if (response.accessToken) {
        localStorage.setItem('token', 'true');
        localStorage.setItem('role', response.user.role);
        this.userRole = response.user.role; 
        console.log('Logged in with role:', response.user.role);
        window.location.href = 'home'
        //this.router.navigate(['home']); 
 


      }
    });
  }
}

