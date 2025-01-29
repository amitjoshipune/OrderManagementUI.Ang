import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CartService } from '../../services/cart.service';
import { Book } from '../../models/book.model';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService ,private cartService: CartService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  addToCart(book: Book) {
    const userId = 'user-id'; // Replace with actual user ID
    const cartItem: CartItem = { bookId: book.id, quantity: 1 };
    this.cartService.addToCart(userId, cartItem).subscribe({
      next: () => {
        console.log('Book added to cart');
      },
      error: (error) => {
        console.error('Failed to add book to cart', error);
      }
    });
  }
}