import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { InvalidurlComponent } from './views/invalidurl/invalidurl.component';
import { BookService } from './services/book.service';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';
import { BookListComponent } from './views/book-list/book-list.component';
import { OrderListComponent } from './views/order-list/order-list.component';
import { CartComponent } from './views/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    InvalidurlComponent,
    BookListComponent,
    OrderListComponent,
    CartComponent
    
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService ,BookService,CartService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
