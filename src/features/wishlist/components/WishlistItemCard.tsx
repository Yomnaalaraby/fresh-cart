"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { removeProductFromWishlist } from "../server/wishlist.actions";
import { removeProductFromWishlistState } from "../store/wishlist.slice";
import { addProductToCart } from "@/features/cart/server/cart.actions";
import { setCartInfo } from "@/features/cart/store/cart.slice";
import { toast } from "react-toastify";
import Link from "next/link";
import Swal from "sweetalert2";
import { useAppDispatch } from "@/store/store";

export default function WishlistItemCard({ product }: { product: any }) {
    const dispatch = useAppDispatch();

    const handleRemove = () => {
        Swal.fire({
            title: "Remove from Wishlist?",
            text: "Are you sure you want to remove this item from your wishlist?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#9ca3af",
            confirmButtonText: "Yes, remove it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await removeProductFromWishlist(product.id);
                    dispatch(removeProductFromWishlistState({ id: product.id }));
                    toast.success("Item removed from wishlist successfully");
                } catch (error) {
                    toast.error("Failed to remove item");
                }
            }
        });
    };

    const handleAddToCart = async () => {
        try {
            const cartResponse = await addProductToCart(product.id);
            dispatch(setCartInfo(cartResponse));

            await removeProductFromWishlist(product.id);
            dispatch(removeProductFromWishlistState({ id: product.id }));

            toast.success("Item moved to cart successfully");
        } catch (error) {
            toast.error("Failed to move item to cart");
        }
    };

    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between p-6 gap-6 hover:bg-gray-50/50 transition-colors">
            <div className="flex-1 flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-50 rounded-xl relative overflow-hidden shrink-0 border border-gray-100">
                    <Image
                        src={product.imageCover}
                        alt={product.title}
                        fill
                        className="object-contain p-2 mix-blend-multiply"
                    />
                </div>
                <div>
                    <Link href={`/product/${product.id}`}>
                        <h3 className="text-lg font-bold text-gray-900 hover:text-primary-600 transition-colors">
                            {product.title}
                        </h3>
                    </Link>
                    <p className="text-sm text-gray-500">{product.category?.name || "Women's Fashion"}</p>
                </div>
            </div>

            <div className="md:w-32 text-left md:text-center">
                <span className="text-lg font-bold text-gray-900">
                    {product.price} EGP
                </span>
            </div>

            <div className="md:w-32 flex items-center justify-start md:justify-center">
                <span className="flex items-center gap-2 text-sm font-medium text-green-600">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    In Stock
                </span>
            </div>

            <div className="md:w-48 flex items-center justify-start md:justify-end gap-3">
                <button
                    onClick={handleAddToCart}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl font-medium transition-colors"
                >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    Add to Cart
                </button>
                <button
                    onClick={handleRemove}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl border border-gray-200 hover:border-red-100 transition-colors"
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
}