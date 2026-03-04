'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faLeaf,
    faTruckFast,
    faTags,
    faArrowRight,
    faMobileScreen,
    faStar,
    faWandMagicSparkles
} from "@fortawesome/free-solid-svg-icons";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

export default function Newsletter() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                {/* Main Wrapper */}
                <div className="relative bg-[#f4faf6] rounded-[40px] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden shadow-sm border border-green-50/50">

                    {/* Abstract Background Blobs للتجميل زي الصورة */}
                    <div className="absolute top-0 right-1/2 w-96 h-96 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

                    {/* --- Left Column: Newsletter Form --- */}
                    <div className="w-full lg:w-3/5 relative z-10">

                        {/* Top Badge */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-[#198754] text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-green-200">
                                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                            </div>
                            <div>
                                <h4 className="text-[#198754] font-bold text-sm tracking-wider">NEWSLETTER</h4>
                                <p className="text-gray-500 text-xs mt-0.5">50,000+ subscribers</p>
                            </div>
                        </div>

                        {/* Typography */}
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4 leading-tight">
                            Get the Freshest Updates <br />
                            <span className="text-[#198754]">Delivered Free</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Weekly recipes, seasonal offers & exclusive member perks.
                        </p>

                        {/* Perk Badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-10">
                            <div className="bg-white border border-gray-100 shadow-sm px-4 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium text-gray-700">
                                <FontAwesomeIcon icon={faLeaf} className="text-[#198754]" />
                                Fresh Picks Weekly
                            </div>
                            <div className="bg-white border border-gray-100 shadow-sm px-4 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium text-gray-700">
                                <FontAwesomeIcon icon={faTruckFast} className="text-[#198754]" />
                                Free Delivery Codes
                            </div>
                            <div className="bg-white border border-gray-100 shadow-sm px-4 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium text-gray-700">
                                <FontAwesomeIcon icon={faTags} className="text-[#198754]" />
                                Members-Only Deals
                            </div>
                        </div>

                        {/* Input & Button */}
                        <form className="flex flex-col sm:flex-row gap-4 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="grow px-6 py-4 rounded-xl border border-gray-200 shadow-sm outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent text-gray-700 placeholder-gray-400"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-[#198754] hover:bg-[#157347] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2 whitespace-nowrap active:scale-95"
                            >
                                Subscribe
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </form>

                        {/* Disclaimer */}
                        <div className="mt-4 text-xs text-gray-400 flex items-center gap-1.5 ml-2">
                            <FontAwesomeIcon icon={faWandMagicSparkles} className="text-orange-300" />
                            Unsubscribe anytime. No spam, ever.
                        </div>
                    </div>

                    {/* --- Right Column: Mobile App Card --- */}
                    <div className="w-full lg:w-95 relative z-10">
                        <div className="bg-[#0f172a] rounded-4xl p-8 relative overflow-hidden shadow-2xl">

                            {/* Inner subtle gradient */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#198754] rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>

                            <div className="relative z-10">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 bg-[#1e293b] border border-gray-700 text-[#10b981] px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest mb-6">
                                    <FontAwesomeIcon icon={faMobileScreen} className="text-[#8b5cf6]" />
                                    MOBILE APP
                                </div>

                                {/* Text */}
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Shop Faster on Our App
                                </h3>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                    Get app-exclusive deals & 15% off your first order.
                                </p>

                                {/* App Buttons */}
                                <div className="flex flex-col gap-3 mb-8">
                                    {/* Apple Store Button */}
                                    <a href="#" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-5 py-3 transition-colors group">
                                        <FontAwesomeIcon icon={faApple} className="text-3xl text-white group-hover:text-gray-200" />
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 uppercase font-semibold leading-none mb-1">Download on</span>
                                            <span className="text-white font-bold leading-none">App Store</span>
                                        </div>
                                    </a>

                                    {/* Google Play Button */}
                                    <a href="#" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-5 py-3 transition-colors group">
                                        <FontAwesomeIcon icon={faGooglePlay} className="text-3xl text-white group-hover:text-gray-200" />
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 uppercase font-semibold leading-none mb-1">Get it on</span>
                                            <span className="text-white font-bold leading-none">Google Play</span>
                                        </div>
                                    </a>
                                </div>

                                {/* Ratings */}
                                <div className="flex items-center gap-2">
                                    <div className="flex text-[#fbbf24] text-xs gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <FontAwesomeIcon key={star} icon={faStar} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-400 font-medium">
                                        4.9 · 100K+ downloads
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}