import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = {} as Cart;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    const userId = 'user-id'; // Replace with actual user ID
    this.cartService.getCartByUserId(userId).subscribe((data: Cart) => {
      this.cart = data;
    });
  }

  removeFromCart(bookId: string) {
    const userId = 'user-id'; // Replace with actual user ID
    this.cartService.removeFromCart(userId, bookId).subscribe({
      next: () => {
        console.log('Book removed from cart');
        this.ngOnInit(); // Refresh the cart
      },
      error: (error) => {
        console.error('Failed to remove book from cart', error);
      }
    });
  }

  checkout() {
    const userId = 'user-id'; // Replace with actual user ID
    this.cartService.checkout(userId).subscribe({
      next: () => {
        console.log('Checkout successful');
        // Redirect to order list or show a success message
      },
      error: (error) => {
        console.error('Checkout failed', error);
      }
    });
  }
}