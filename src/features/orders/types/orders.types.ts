export interface Subcategory {
    _id: string;
    name: string;
    slug: string;
    category: string;
}

export interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

export interface Brand {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

export interface Product {
    _id: string;
    title: string;
    imageCover: string;
    category: Category;
    brand: Brand;
    ratingsAverage: number;
    ratingsQuantity: number;
    subcategory: Subcategory[];
    id: string;
}

export interface CartItem {
    _id: string;
    count: number;
    price: number;
    product: Product;
}

export interface User {
    _id: string;
    name: string;
    email: string;
    phone: string;
}

export interface ShippingAddress {
    details: string;
    phone: string;
    city: string;
    postalCode?: string;
}

export interface Order {
    _id: string;
    id: number;
    user: User;
    cartItems: CartItem[];
    taxPrice: number;
    shippingPrice: number;
    totalOrderPrice: number;
    paymentMethodType: string;
    isPaid: boolean;
    isDelivered: boolean;
    shippingAddress: ShippingAddress;
    createdAt: string;
    updatedAt: string;
    paidAt?: string;
    __v: number;
}

export type OrdersResponse = Order[];