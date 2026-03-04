import { Product } from "@/features/products/types/Products.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WishlistState {
    products: Product[];
    wishlistId: string | null;
    count: number;
}

const initialState: WishlistState = {
    products: [],
    wishlistId: null,
    count: 0,
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        setWishlistInfo: function (state, action: PayloadAction<any>) {
            state.products = action.payload.data;
            state.count = action.payload.count;
        },
        removeProductFromWishlistState: function (state, action: PayloadAction<{ id: string }>) {
            const productId = action.payload.id;
            state.products = state.products.filter((product) => product.id !== productId);
            state.count = state.products.length;
        },
        addProductToWishlistState: function (state, action: PayloadAction<Product>) {
            state.products.push(action.payload);
            state.count = state.products.length;
        }
    },
});

export const wishlistReducer = wishlistSlice.reducer;
export const { setWishlistInfo, removeProductFromWishlistState, addProductToWishlistState } = wishlistSlice.actions;