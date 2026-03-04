'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBox,
    faTruck,
    faMapMarkerAlt,
    faCreditCard,
    faChevronDown,
    faPhone,
    faReceipt,
    faCalendarDays,
    faHashtag,
    faCircleCheck,
    faClock,
    faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { Order } from "../types/orders.types";
import { useState } from "react";

export default function OrderCard({ orderInfo }: { orderInfo: Order }) {

    const [isExpanded, setIsExpanded] = useState(false);

    function getStatus() {
        if (orderInfo.isDelivered) {
            return {
                label: "Delivered",
                icon: faCircleCheck,
                colors: {
                    background: "bg-green-100",
                    text: "text-green-600",
                    border: 'border-green-300'
                }
            }
        }

        if (orderInfo.isPaid) {
            return {
                label: "On the way",
                icon: faTruck,
                colors: {
                    background: "bg-blue-100",
                    text: "text-blue-600",
                    border: 'border-blue-300'
                }
            }
        }

        return {
            label: "Processing",
            icon: faClock,
            colors: {
                background: "bg-orange-100",
                text: "text-orange-600",
                border: "border-orange-300",
            },
        }
    }

    const status = getStatus();

    const itemsCount = orderInfo.cartItems.reduce((acc, el) => acc += el.count, 0);

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 overflow-hidden hover:shadow-md">
            {/* Main Content (Top Section) */}
            <div className="p-5 sm:p-6">
                <div className="flex gap-5">
                    {/* Product Images Stack */}
                    <div className="relative shrink-0">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gray-50 border border-gray-100 p-2">
                            {orderInfo.cartItems[0] && (
                                <img
                                    src={orderInfo.cartItems[0].product.imageCover}
                                    alt="Product cover"
                                    className="w-full h-full object-contain"
                                />
                            )}
                        </div>
                        {/* Multi-item indicator */}
                        {orderInfo.cartItems.length > 1 && (<div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                            +{orderInfo.cartItems.length - 1}
                        </div>)}
                    </div>

                    {/* Order Info */}
                    <div className="flex-1 min-w-0 flex flex-col">
                        {/* Status & Order Number Row */}
                        <div className="flex items-start justify-between gap-3 mb-3">
                            <div>
                                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 ${status.colors.background} rounded-lg mb-2`}>
                                    <FontAwesomeIcon
                                        icon={status.icon}
                                        className={`text-xs ${status.colors.text}`}
                                    />
                                    <span className={`text-xs font-semibold ${status.colors.text}`} >
                                        {status.label}
                                    </span>
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                                    <FontAwesomeIcon
                                        icon={faHashtag}
                                        className="text-xs text-gray-400"
                                    />
                                    {orderInfo.id}
                                </h3>
                            </div>

                            {/* Payment Method */}
                            <div
                                className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${orderInfo.paymentMethodType === 'card' ? "bg-purple-100" : "bg-gray-100"
                                    }`}
                            >
                                <FontAwesomeIcon
                                    icon={orderInfo.paymentMethodType === 'card' ? faCreditCard : faMoneyBill}
                                    className={orderInfo.paymentMethodType === 'card' ? "text-purple-600" : "text-gray-600"}
                                />
                            </div>
                        </div>

                        {/* Date & Location */}
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                            <span className="flex items-center gap-1.5">
                                <FontAwesomeIcon icon={faCalendarDays} className="text-gray-400" />
                                {new Date(orderInfo.createdAt).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric"
                                })}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span className="flex items-center gap-1.5">
                                <FontAwesomeIcon
                                    icon={faBox}
                                    className="text-xs text-gray-400"
                                />
                                {itemsCount} {itemsCount === 1 ? 'item' : 'items'}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span className="flex items-center gap-1.5">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400" />
                                {orderInfo.shippingAddress.city}
                            </span>
                        </div>

                        {/* Total Price & Expand Icon */}
                        <div className="flex items-center justify-between mt-auto">
                            <p className="text-2xl font-bold text-gray-900">
                                {orderInfo.totalOrderPrice}
                                <span className="text-sm text-gray-400 font-semibold">EGP</span>
                            </p>
                            <button
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all
                                     ${isExpanded ? 'bg-primary-600 text-white hover:bg-primary-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} `}
                                onClick={() => {
                                    setIsExpanded(!isExpanded)
                                }}
                            >
                                {isExpanded ? "Hide" : "Details"}
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={`text-xs transition-transform duration-300 ${isExpanded && 'rotate-180'} `}
                                />
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            {/* Expanded Content Section (Bottom) */}
            {
                isExpanded && (
                    <div className="border-t border-gray-100 p-5 sm:p-6 bg-gray-50/30">
                        <h4 className="font-bold text-gray-900 text-sm mb-4 flex items-center gap-2">
                            <FontAwesomeIcon icon={faBox} className="text-green-500" />
                            Order Items
                        </h4>
                        <div className="space-y-3">
                            {orderInfo.cartItems.map((item) => (
                                <div key={item._id} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                                    <div className="w-16 h-16 rounded-xl bg-gray-50 p-2 shrink-0">
                                        <img
                                            src={item.product.imageCover}
                                            alt={item.product.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-900 truncate">{item.product.title}</p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            <span className="font-medium text-gray-700">{item.count}</span> x {item.price.toLocaleString()} EGP
                                        </p>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <p className="text-lg font-bold text-gray-900">
                                            {(item.count * item.price).toLocaleString()}
                                        </p>
                                        <p className="text-xs text-gray-400">EGP</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Delivery Address Box */}
                            <div className="bg-white border border-gray-100 p-5 rounded-2xl">
                                <h5 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-3">
                                    <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 text-xs" />
                                    </div>
                                    Delivery Address
                                </h5>
                                <div className="text-sm text-gray-600 space-y-1.5 ml-9">
                                    <p className="font-medium text-gray-900">{orderInfo.shippingAddress.city}</p>
                                    <p>{orderInfo.shippingAddress.details}</p>
                                    <p className="flex items-center gap-2 pt-1 text-gray-500">
                                        <FontAwesomeIcon icon={faPhone} className="text-xs" />
                                        {orderInfo.shippingAddress.phone}
                                    </p>
                                </div>
                            </div>

                            {/* Order Summary Box */}
                            <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
                                <h5 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-4">
                                    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                        <FontAwesomeIcon icon={faReceipt} className="text-xs" />
                                    </div>
                                    Order Summary
                                </h5>
                                <div className="space-y-3 text-sm ml-9">
                                    <div className="flex justify-between text-gray-600">
                                        <span>{orderInfo.totalOrderPrice} EGP</span>
                                        <span>Price</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>{orderInfo.shippingPrice === 0 ? 'Free' : orderInfo.shippingPrice + 'EGP'} </span>
                                        <span>Shipping Price</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-gray-900 pt-3 border-t border-blue-100">
                                        <span>{orderInfo.totalOrderPrice + orderInfo.shippingPrice} EGP</span>
                                        <span>Total Price</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}