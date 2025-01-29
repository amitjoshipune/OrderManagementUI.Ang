import { CartItem } from "./cart-item.model";
export interface Order {
    id: string;
    userId: string;
    items: CartItem[];
    orderDate: Date;
    totalAmount: number;
}