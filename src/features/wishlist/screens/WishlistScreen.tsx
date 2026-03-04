"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useAppSelector } from "@/store/store";
import WishlistItemCard from "../components/WishlistItemCard";

export default function WishlistScreen() {
    const { products, count } = useAppSelector((state) => state.wishlist);

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="container mx-auto px-4">

                <div className="mb-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Link href="/" className="hover:text-primary-600 transition">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">Wishlist</span>
                    </nav>

                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                                <span className="bg-red-50 text-red-500 w-12 h-12 rounded-xl flex items-center justify-center">
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                                My Wishlist
                            </h1>
                            <p className="text-gray-500 mt-2">
                                You have <span className="font-semibold text-red-500">{count}</span> items in your wishlist
                            </p>
                        </div>
                    </div>
                </div>

                {count === 0 ? (
                    <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h2>
                        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your wishlist yet.</p>
                        <Link href="/" className="bg-primary-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-primary-700 transition">
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">

                        <div className="hidden md:flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50 text-sm text-gray-500 font-medium">
                            <div className="flex-1">Product</div>
                            <div className="w-32 text-center">Price</div>
                            <div className="w-32 text-center">Status</div>
                            <div className="w-48 text-right pr-4">Actions</div>
                        </div>

                        <div className="divide-y divide-gray-100">
                            {products.map((product: any) => (
                                <WishlistItemCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                )}
                <div className="mt-8">
                    <Link href="/" className="text-gray-500 hover:text-primary-600 text-sm font-medium transition-colors">
                        &larr; Continue Shopping
                    </Link>
                </div>
            </div>

        </div>
    );
}