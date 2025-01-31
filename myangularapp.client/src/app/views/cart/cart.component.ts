import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = {} as Cart;
  message: string = '';
  messageType: 'success' | 'error' = 'success';
  constructor(private authService: AuthService,private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }
  loadCart(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.cartService.getCartByUserId(userId).subscribe((data: Cart) => {
        this.cart = data;
      });
    } else {
      console.error('User ID is null');
      this.message = 'User ID is null';
      this.messageType = 'error';
    }
  }
  removeFromCart(bookId: string) {
    const userId = this.authService.getUserId();
    if (userId) {
      this.cartService.removeFromCart(userId, bookId).subscribe({
        next: () => {
          console.log('Book removed from cart');
          this.loadCart(); // Refresh the cart
        },
        error: (error) => {
          console.error('Failed to remove book from cart', error);
        }
      });
    } else {
      console.error('User ID is null');
      this.message = 'User ID is null';
      this.messageType = 'error';
    }
  }

  reduceQuantity(bookId: string) {
    const userId = this.authService.getUserId();
    if (userId) {
      const cartItem = this.cart.items.find(item => item.bookId === bookId);
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
        this.cartService.addToCart(userId, cartItem).subscribe({
          next: () => {
            this.loadCart(); // Refresh the cart
          },
          error: (error) => {
            console.error('Failed to reduce book quantity', error);
          }
        });
      } else {
        this.removeFromCart(bookId);
      }
    } else {
      console.error('User ID is null');
      this.message = 'User ID is null';
      this.messageType = 'error';
    }
  }

  checkout() {
    const userId = this.authService.getUserId();
    if (userId) {
      this.cartService.checkout(userId).subscribe({
        next: () => {
          console.log('Checkout successful');
          // Redirect to order list or show a success message
        },
        error: (error) => {
          console.error('Checkout failed', error);
        }
      });
    } else {
      console.error('User ID is null');
      this.message = 'User ID is null';
      this.messageType = 'error';
    }
  }
}