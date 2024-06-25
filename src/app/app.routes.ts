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
import { EditarUsuariosComponent } from './pages/editar-usuarios/editar-usuarios.component';
import { ListaMenuComponent } from './pages/lista-menu/lista-menu.component';
import { DetalleProductosComponent } from './pages/detalle-productos/detalle-productos.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "productos", component: ProductsComponent },
    { path: "usuarios", component: UsuariosComponent},
    { path: "lista-menu", component: ListaMenuComponent },
    { path: "login", component: LoginComponent},
    { path: "registro", component: RegistroComponent},
    { path: "agregar-orden", component: CarritoComponent},
    { path: "agregar-producto", component: AgregarProductosComponent},
    { path: "editar-producto/:idProducto", component: EditarProductosComponent},
    { path: "editar-usuario/:idUsuario", component: EditarUsuariosComponent },
    { path: "registro-ad", component: RegistroComponent },
    { path: "detalle-productos/:idProducto", component: DetalleProductosComponent },
    { path: "agregar-productos", component: AgregarProductosComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Error404Component },
];
