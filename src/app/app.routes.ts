import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { Error404Component } from './pages/error404/error404.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { AgregarProductosComponent } from './pages/agregar-productos/agregar-productos.component';
import { EditarProductosComponent } from './pages/editar-productos/editar-productos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { privadoGuard } from './guards/privado.guard';

export const routes: Routes = [
    { path:"home", component:HomeComponent},
    { path:"productos",component:ProductsComponent},
    { path: "carrito", component: CarritoComponent},
    { path: "agregar-producto", component: AgregarProductosComponent},
    { path: "editar-producto/:idProducto", component: EditarProductosComponent},
    { path: "editar-producto/:idProducto", component: EditarProductosComponent},
    { path: "usuarios", component: UsuariosComponent},
    { path:"login",component:LoginComponent , canActivate: [privadoGuard]},
    { path:"registro",component:RegistroComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Error404Component },
];
