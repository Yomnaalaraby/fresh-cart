"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons";

export default function DealsBanner() {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-6">

                    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-700 p-8 text-white shadow-sm hover:shadow-md transition">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full text-white mb-4">
                                <FontAwesomeIcon icon={faClock} className="text-sm" />
                                <span className="text-sm font-medium">Deal of the Day</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                Fresh Organic Fruits
                            </h3>
                            <p className="text-white/80 mb-6">
                                Get up to 40% off on selected organic fruits
                            </p>

                            <div className="flex gap-3 mb-8">
                                {[
                                    { value: "08", label: "HOURS" },
                                    { value: "45", label: "MINS" },
                                    { value: "12", label: "SECS" },
                                ].map((time, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/20 backdrop-blur-sm rounded-lg p-2 min-w-16.25 text-center border border-white/20"
                                    >
                                        <div className="text-xl font-bold">{time.value}</div>
                                        <div className="text-[10px] text-white/80 font-medium tracking-wider">
                                            {time.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
                            >
                                Shop Now
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-orange-400 to-orange-500 p-8 text-white shadow-sm hover:shadow-md transition">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full text-white mb-4">
                                    <span className="text-sm font-medium">✨ New Arrivals</span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                    Exotic Vegetables
                                </h3>
                                <p className="text-white/80 mb-6">
                                    Discover our latest collection of premium vegetables
                                </p>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="text-3xl font-bold">25% OFF</div>
                                    <div className="text-sm text-white/80">
                                        Use code: <br />
                                        <span className="font-bold text-white text-base tracking-wider">
                                            FRESH25
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Link
                                    href="/products?sort=newest"
                                    className="inline-flex items-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition w-max"
                                >
                                    Explore Now
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}