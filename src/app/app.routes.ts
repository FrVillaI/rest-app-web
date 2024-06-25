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
import { EditarUsuariosComponent } from './pages/editar-usuarios/editar-usuarios.component';
import { ListaMenuComponent } from './pages/lista-menu/lista-menu.component';
import { DetalleProductosComponent } from './pages/detalle-productos/detalle-productos.component';
import { ListaOrdenesComponent } from './pages/lista-ordenes/lista-ordenes.component';
import { rolGuarMe, rolGuardAd } from './guard/rol.guard';
import { loginGuard, registroGuard } from './guard/login.guard';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "productos", component: ProductsComponent,canActivate:[rolGuarMe] },
    { path: "usuarios", component: UsuariosComponent,canActivate:[rolGuardAd]},
    { path: "lista-menu", component: ListaMenuComponent, canActivate: [rolGuardAd]},
    { path: "login", component: LoginComponent,canActivate:[loginGuard]},
    { path: "registro", component: RegistroComponent,canActivate:[registroGuard]},
    { path: "agregar-orden", component: CarritoComponent, canActivate: [rolGuarMe]},
    { path: "agregar-productos", component: AgregarProductosComponent, canActivate:[rolGuardAd]},
    { path: "editar-producto/:idProducto", component: EditarProductosComponent,canActivate:[rolGuardAd]},
    { path: "editar-usuario/:idUsuario", component: EditarUsuariosComponent,canActivate:[rolGuardAd] },
    { path: "detalle-productos/:idProducto", component: DetalleProductosComponent,canActivate:[rolGuarMe] },
    { path: "lista-ordenes", component: ListaOrdenesComponent,canActivate:[rolGuarMe] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Error404Component },
];
