import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { InvalidurlComponent } from './views/invalidurl/invalidurl.component';
import { LoginComponent } from './views/login/login.component';
import {BookListComponent} from './views/book-list/book-list.component';
import {CartComponent} from './views/cart/cart.component';
import {OrderListComponent} from './views/order-list/order-list.component';

const routes: Routes = [
{ path: 'register', component: RegisterComponent },
{ path:'login', component:LoginComponent},
 { path : 'home' , component:HomeComponent },
 { path: 'books', component: BookListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrderListComponent },
 { path : 'invalidpathreached' , component:InvalidurlComponent },
 { path: '*', redirectTo: '/home', pathMatch: 'full' },
 { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
