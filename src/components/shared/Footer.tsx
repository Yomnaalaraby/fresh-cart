import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTruck,
    faRotateLeft,
    faShieldHalved,
    faHeadset,
    faPhone,
    faEnvelope,
    faLocationDot,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/images/freshcart-logo.svg";
import Image from "next/image";

export default function Footer() {
    // --- Data Arrays for Clean Code ---
    const features = [
        { icon: faTruck, title: "Free Shipping", desc: "On orders over 500 EGP" },
        { icon: faRotateLeft, title: "Easy Returns", desc: "14-day return policy" },
        { icon: faShieldHalved, title: "Secure Payment", desc: "100% secure checkout" },
        { icon: faHeadset, title: "24/7 Support", desc: "Contact us anytime" },
    ];

    const shopLinks = ["All Products", "Categories", "Brands", "Electronics", "Men's Fashion", "Women's Fashion"];
    const accountLinks = ["My Account", "Order History", "Wishlist", "Shopping Cart", "Sign In", "Create Account"];
    const supportLinks = ["Contact Us", "Help Center", "Shipping Info", "Returns & Refunds", "Track Order"];
    const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

    return (
        <footer className="w-full">
            {/* --- Top Features Section --- */}
            <div className="bg-[#eefcf2] border-b border-gray-200/50 py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-[#198754]">
                                    <FontAwesomeIcon icon={feature.icon} className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-[15px]">{feature.title}</h4>
                                    <p className="text-gray-500 text-sm mt-0.5">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- Main Footer Section --- */}
            <div className="bg-[#0b132a] pt-16 pb-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

                        {/* 1. Brand & Contact Column */}
                        <div className="lg:col-span-4">
                            {/* Logo Box */}
                            <div className="bg-white rounded-lg px-4 py-2 inline-flex items-center gap-2 mb-6">
                                <Link href="/" className="flex items-center gap-2">
                                    <Image
                                        src={Logo}
                                        alt="FreshCart Logo"
                                        priority
                                    />
                                </Link>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
                                FreshCart is your one-stop destination for quality products.
                                From fashion to electronics, we bring you the best brands
                                at competitive prices with a seamless shopping experience.
                            </p>

                            {/* Contact Info */}
                            <div className="flex flex-col gap-4 mb-8">
                                <div className="flex items-center gap-3 text-gray-400 text-sm">
                                    <FontAwesomeIcon icon={faPhone} className="text-[#198754]" />
                                    <span>+1 (800) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400 text-sm">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-[#198754]" />
                                    <span>support@freshcart.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400 text-sm">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-[#198754]" />
                                    <span>123 Commerce Street, New York, NY 10001</span>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-3">
                                {[faFacebookF, faTwitter, faInstagram, faYoutube].map((icon, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#198754] hover:text-white transition-all"
                                    >
                                        <FontAwesomeIcon icon={icon} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* 2. Shop Links */}
                        <div className="lg:col-span-2">
                            <h3 className="text-white font-semibold text-lg mb-6">Shop</h3>
                            <ul className="flex flex-col gap-4">
                                {shopLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 3. Account Links */}
                        <div className="lg:col-span-2">
                            <h3 className="text-white font-semibold text-lg mb-6">Account</h3>
                            <ul className="flex flex-col gap-4">
                                {accountLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 4. Support Links */}
                        <div className="lg:col-span-2">
                            <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
                            <ul className="flex flex-col gap-4">
                                {supportLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 5. Legal Links */}
                        <div className="lg:col-span-2">
                            <h3 className="text-white font-semibold text-lg mb-6">Legal</h3>
                            <ul className="flex flex-col gap-4">
                                {legalLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}
