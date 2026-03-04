"use server";
import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";

export async function getLoggedUserWishlist() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || null;

    if (!token) {
        throw new Error("Authentication required");
    }

    try {
        const options: AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/wishlist`,
            method: "GET",
            headers: {
                token
            }
        };
        const response = await axios(options);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function addProductToWishlist(productId: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || null;

    if (!token) {
        throw new Error("Authentication required");
    }

    try {
        const options: AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/wishlist`,
            method: "POST",
            headers: {
                token
            },
            data: {
                productId
            }
        };
        const response = await axios(options);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function removeProductFromWishlist(productId: string) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || null;

    if (!token) {
        throw new Error("Authentication required");
    }

    try {
        const options: AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
            method: "DELETE",
            headers: {
                token
            }
        };
        const response = await axios(options);
        return response.data;
    } catch (error) {
        throw error;
    }
}