'use client';
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowsRotate, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Product } from "../types/Products.types";
import Rating from "@/components/ui/Rating";
import { addProductToCart, getLoggedUserCart } from "@/features/cart/server/cart.actions";
import { toast } from "react-toastify";
import { setCartInfo } from "@/features/cart/store/cart.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
    addProductToWishlist,
    removeProductFromWishlist
} from "@/features/wishlist/server/wishlist.actions";
import {
    addProductToWishlistState,
    removeProductFromWishlistState
} from "@/features/wishlist/store/wishlist.slice";

export default function ProductCard({ info }: { info: Product }) {
    const { id, category, title, imageCover, ratingsAverage, ratingsQuantity, price, priceAfterDiscount } = info;

    const dispatch = useAppDispatch();
    const { products: wishlistProducts } = useAppSelector((state) => state.wishlist);
    const isInWishlist = wishlistProducts.some((item: any) => item.id === info.id);

    const onSale = priceAfterDiscount ? priceAfterDiscount < price : false;
    const discountPercentage = priceAfterDiscount ? Math.round((price - priceAfterDiscount) / price * 100) : 0;

    const handleAddToCart = async () => {
        try {
            const response = await addProductToCart(info.id);
            console.log(response);
            if (response.status === "success") {
                toast.success(response.message);
                const cartInfo = await getLoggedUserCart()
                dispatch(setCartInfo(cartInfo));
            }
        } catch (error) {
            toast.error("failed to add product to cart");
        }
    };

    const handleWishlistToggle = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            if (isInWishlist) {
                await removeProductFromWishlist(info.id);
                dispatch(removeProductFromWishlistState({ id: info.id }));
                toast.success("Removed from wishlist");
            } else {
                await addProductToWishlist(info.id);
                dispatch(addProductToWishlistState(info));
                toast.success("Added to wishlist");
            }
        } catch (error) {
            toast.error("Failed to update wishlist");
        }
    };

    return (
        <>
            <div
                id="product-card"
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
            >
                <div className="relative">
                    <img
                        className="w-full h-60 object-contain bg-white"
                        src={imageCover}
                        alt={title}
                    />
                    <div className="absolute top-3 left-3">
                        {onSale && (
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                                -{discountPercentage}%
                            </span>
                        )}
                    </div>
                    <div className="absolute top-3 right-3 flex flex-col space-y-2">
                        <button
                            onClick={handleWishlistToggle}
                            className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm border border-gray-100">
                            <FontAwesomeIcon
                                icon={isInWishlist ? solidHeart : regularHeart}
                                className={`text-lg transition-colors ${isInWishlist ? "text-red-500" : "text-gray-400"
                                    }`}
                            />
                        </button>
                        <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm border border-gray-100">
                            <FontAwesomeIcon icon={faArrowsRotate} />
                        </button>
                        <Link
                            href={""}
                            className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm border border-gray-100"
                        >
                            <FontAwesomeIcon icon={faEye} />
                        </Link>
                    </div>
                </div>
                <div className="p-4">
                    <div className="text-xs text-gray-500 mb-1">{category.name}</div>
                    <h3 className="font-medium mb-1 cursor-pointer ">
                        <Link className="line-clamp-2" href={""}>
                            {title}
                        </Link>
                    </h3>
                    <div className="flex items-center mb-2">
                        <div className="flex text-amber-400 mr-2">
                            <Rating rating={ratingsAverage} />
                        </div>
                        <span className="text-xs text-gray-500">
                            {ratingsAverage} ({ratingsQuantity} reviews)
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-lg font-bold text-primary-600">
                                {priceAfterDiscount || price} EGP
                            </span>
                            {onSale && <span className="text-sm text-gray-500 line-through ml-2">
                                {price} EGP
                            </span>}
                        </div>
                        <button className="bg-primary-600 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary-700 transition"
                            onClick={handleAddToCart}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};