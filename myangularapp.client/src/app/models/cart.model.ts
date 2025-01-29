import { CartItem } from "./cart-item.model";


export interface Cart {
    userId: string;
    items: CartItem[];
}
