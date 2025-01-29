import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://localhost:44328/api/cart'; // Base URL for your API

  constructor(private http: HttpClient) {}

  getCartByUserId(userId: string): Observable<Cart> {
    return this.http.get<Cart>(`${this.apiUrl}/${userId}`);
  }

  addToCart(userId: string, cartItem: CartItem): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${userId}/add`, cartItem);
  }

  removeFromCart(userId: string, bookId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}/remove/${bookId}`);
  }

  checkout(userId: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${userId}/checkout`, null);
  }
}