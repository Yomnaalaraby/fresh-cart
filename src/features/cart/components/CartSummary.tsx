import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShoppingBag,
    faTruck,
    faTag,
    faLock,
    faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface CartSummaryProps {
    numOfCartItems: number;
    totalCartPrice: number;
}

export default function CartSummary({
    numOfCartItems,
    totalCartPrice,
}: CartSummaryProps) {


    const subtotal = totalCartPrice;
    const shipping = subtotal > 500 ? 0 : 100;
    const total = Math.round(shipping + subtotal);


    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24">
            <div className="bg-linear-to-r from-primary-600 to-primary-700 px-6 py-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <FontAwesomeIcon icon={faShoppingBag} />
                    Order Summary
                </h2>
                <p className="text-primary-100 text-sm mt-1">
                    You have {numOfCartItems} {numOfCartItems === 1 ? "item" : "items"} in
                    your cart
                </p>
            </div>

            <div className="p-6 space-y-5">
                {shipping > 0 && (
                    <div className="bg-linear-to-r from-orange-50 to-amber-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <FontAwesomeIcon icon={faTruck} className="text-orange-500" />
                            <span className="text-sm font-medium text-gray-700">
                                Add {500 - subtotal} EGP for free shipping
                            </span>
                        </div>
                        <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-linear-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-500"
                                style={{ width: `${(totalCartPrice / 500) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                )}

                <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span className="font-medium">{totalCartPrice} EGP</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span className="font-medium">
                            {shipping === 0 ? "Free" : `${shipping} EGP`}
                        </span>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-baseline">
                        <span className="text-gray-900 font-semibold">Total</span>
                        <div className="text-right">
                            <span className="text-2xl font-bold text-gray-900">
                                {totalCartPrice + shipping}
                            </span>
                            <span className="text-sm text-gray-500 ml-1">EGP</span>
                        </div>
                    </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl text-gray-500 hover:text-primary-600 hover:bg-primary-50 transition-colors">
                    <FontAwesomeIcon icon={faTag} />
                    <span className="text-sm font-medium">Apply Promo Code</span>
                </button>

                <Link
                    href="/checkout"
                    className="w-full bg-linear-to-r from-primary-600 to-primary-700 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-2 font-medium hover:shadow-lg transition-shadow"
                >
                    <FontAwesomeIcon icon={faLock} />
                    <span>Secure Checkout</span>
                </Link>

                <div className="flex items-center justify-center gap-4 py-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FontAwesomeIcon icon={faShieldAlt} className="text-green-500" />
                        <span>Secure Payment</span>
                    </div>
                    <div className="w-px h-4 bg-gray-200"></div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FontAwesomeIcon icon={faTruck} className="text-blue-500" />
                        <span>Fast Delivery</span>
                    </div>
                </div>

                <Link
                    href="/"
                    className="block text-center text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                    &larr; Continue Shopping
                </Link>
            </div>
        </div>
    );
}