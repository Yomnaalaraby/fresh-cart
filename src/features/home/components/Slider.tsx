'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import sliderImg_1 from "../../../assets/images/home-slider-1.png";
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Slider() {
    return <>
        <section className='relative'>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
            >
                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage: `url(${sliderImg_1.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="h-100 flex items-center justify-center"
                    >
                        <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
                            <div className="container mx-auto px-4 h-full content-center">
                                <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                                    Fresh Products Delivered to your Door
                                </h2>
                                <p>Get 20% off your first order</p>

                                <div className="mt-4 flex items-center gap-3">
                                    <Link
                                        href="/products"
                                        className="btn px-6 py-2.5 rounded-lg font-medium bg-white border-2 border-white/50 text-green-600 hover:bg-gray-50 transition"
                                    >
                                        Shop Now
                                    </Link>
                                    <Link
                                        href="/deals"
                                        className="btn px-6 py-2.5 rounded-lg font-medium bg-transparent border-2 border-white/50 text-white hover:bg-white/20 transition"
                                    >
                                        View Deals
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage: `url(${sliderImg_1.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="h-100 flex items-center justify-center"
                    >
                        <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
                            <div className="container mx-auto px-4 h-full content-center">
                                <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                                    Fast & Free Delivery
                                </h2>
                                <p>Same day delivery avaliable</p>

                                <div className="mt-4 flex items-center gap-3">
                                    <Link
                                        href="/products"
                                        className="btn px-6 py-2.5 rounded-lg font-medium bg-white border-2 border-white/50 text-purple-500 hover:bg-gray-50 transition"
                                    >
                                        Order Now
                                    </Link>
                                    <Link
                                        href="/deals"
                                        className="btn px-6 py-2.5 rounded-lg font-medium bg-transparent border-2 border-white/50 text-white hover:bg-white/20 transition"
                                    >
                                        Delivey Info
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        style={{
                            backgroundImage: `url(${sliderImg_1.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="h-100 flex items-center justify-center"
                    >
                        <div className="overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
                            <div className="container mx-auto px-4 h-full content-center">
                                <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                                    Premium Quality Guaranteed
                                </h2>
                                <p>Fresh From Farm to your Table</p>

                                <div className="mt-4 flex items-center gap-3">
                                    <Link
                                        href="/products"
                                        className="btn px-6 py-2.5 rounded-lg font-medium bg-white border-2 border-white/50 text-blue-600 hover:bg-gray-50 transition"
                                    >
                                        Shop Now
                                    </Link>
                                    <Link
                                        href="/deals"
                                        className="btn px-6 py-2.5 rounded-lg font-medium bg-transparent border-2 border-white/50 text-white hover:bg-white/20 transition"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-[#198754] w-10 h-10 flex items-center justify-center rounded-full shadow-md transition">
                <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
            </div>

            <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-[#198754] w-10 h-10 flex items-center justify-center rounded-full shadow-md transition">
                <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
            </div>

        </section>
    </>
}
