import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    { path:"home", component:HomeComponent},
    { path:"productos",component:ProductsComponent},

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Error404Component },
];
