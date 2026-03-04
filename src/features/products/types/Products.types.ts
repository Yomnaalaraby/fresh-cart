// 1. الأقسام الفرعية
export interface Subcategory {
    _id: string;
    name: string;
    slug: string;
    category: string;
}

// 2. القسم الرئيسي
export interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

// 3. البراند (الماركة)
export interface Brand {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

// 4. النوع الرئيسي للمنتج الواحد (شامل كل الاحتمالات)
export interface Product {
    id: string;
    _id: string;
    title: string;
    slug: string;
    description: string;
    quantity: number;
    price: number;
    priceAfterDiscount?: number; // علامة الاستفهام معناها إن الحقل ده اختياري
    imageCover: string;
    images: string[];
    category: Category;
    subcategory: Subcategory[];
    brand: Brand;
    ratingsAverage: number;
    ratingsQuantity: number;
    sold: number | null;
    availableColors?: any[];
    createdAt: string;
    updatedAt: string;
}

export interface Metadata {
    currentPage: number;
    numberOfPages: number;
    limit: number;
    nextPage?: number;
}

export interface ProductsResponse {
    results: number;
    metadata: Metadata;
    data: Product[];
}

export interface SingleProductRespose {
    data: Product;
}