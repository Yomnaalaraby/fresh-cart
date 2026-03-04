"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faMagnifyingGlass,
    faCartShopping,
    faArrowRightFromBracket,
    faUserPlus,
    faRightToBracket,
    faBars,
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import {
    faEnvelope,
    faHeart,
    faUser
} from "@fortawesome/free-regular-svg-icons";
import Logo from "../../assets/images/freshcart-logo.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { AppState, useAppSelector } from "@/store/store";
import useLogout from "@/features/auth/hooks/useLogout";

export default function Navbar() {
    const { logout } = useLogout()
    const { numOfCartItems } = useAppSelector((state) => state.cart)

    const { isAuthenticated } = useSelector((appState: AppState) => appState.auth)
    return (
        <header className="font-sans">
            {/* --- 1. Top Bar --- */}
            <div className="bg-white border-b border-gray-100 py-1.5 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center text-[11px] text-gray-500 font-medium">
                    {/* Left Side (Contact) */}
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 hover:text-[#198754] transition cursor-pointer">
                            <FontAwesomeIcon icon={faPhone} />
                            +1 (800) 123-4567
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-[#198754] transition cursor-pointer">
                            <FontAwesomeIcon icon={faEnvelope} />
                            support@freshcart.com
                        </span>
                    </div>

                    {/* Right Side (Links & Lang) */}
                    <div className="flex items-center gap-4">
                        <Link href="/track-order" className="hover:text-[#198754] transition">Track Order</Link>
                        <Link href="/about" className="hover:text-[#198754] transition">About</Link>
                        <Link href="/contact" className="hover:text-[#198754] transition">Contact</Link>
                        <div className="border-l border-gray-300 h-3 mx-1"></div> {/* Divider */}
                        <button className="flex items-center gap-1 hover:text-[#198754] transition">
                            EGP <FontAwesomeIcon icon={faChevronDown} className="text-[9px]" />
                        </button>
                        <button className="flex items-center gap-1 hover:text-[#198754] transition">
                            العربية <FontAwesomeIcon icon={faChevronDown} className="text-[9px]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* --- 2. Middle Bar (Main Content) --- */}
            <div className="bg-white py-5 border-b border-gray-100">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={Logo}
                            alt="FreshCart Logo"
                            width={220}
                            height={65}
                            priority
                        />
                    </Link>

                    {/* Search Bar */}
                    <div className="w-full max-w-xl relative">
                        <input
                            type="text"
                            placeholder="Search for products ..."
                            className="w-full border border-gray-300 rounded-lg pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-[#198754] transition"
                        />
                        <button className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-[#198754] transition">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>

                    {/* Action Icons */}
                    <div className="flex items-center gap-5 text-[#5c6c75]">
                        <Link href="/wishlist" className="flex flex-col items-center gap-1 hover:text-[#198754] transition group">
                            <FontAwesomeIcon icon={faHeart} className="text-lg group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] font-medium">Wishlist</span>
                        </Link>

                        <Link href="/cart" className="flex flex-col items-center gap-1 hover:text-[#198754] transition group relative">
                            <div className="relative">
                                <FontAwesomeIcon icon={faCartShopping} className="text-lg group-hover:scale-110 transition-transform" />
                                <span className="absolute -top-1.5 -right-2.5 bg-[#198754] text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-white">
                                    {numOfCartItems}
                                </span>
                            </div>
                            <span className="text-[10px] font-medium">Cart</span>
                        </Link>

                        <Link href="/account" className="flex flex-col items-center gap-1 hover:text-[#198754] transition group">
                            <FontAwesomeIcon icon={faUser} className="text-lg group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] font-medium">Account</span>
                        </Link>



                        <div className="border-l border-gray-200 h-8"></div>

                        {isAuthenticated ? (
                            <button onClick={logout} className="flex flex-col items-center gap-1 hover:text-red-500 transition group">
                                <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-lg group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-medium">Logout</span>
                            </button>
                        ) : (
                            <>
                                <Link href="/signup" className="flex flex-col items-center gap-1 hover:text-[#198754] transition group">
                                    <FontAwesomeIcon icon={faUserPlus} className="text-lg group-hover:scale-110 transition-transform" />
                                    <span className="text-[10px] font-medium">Signup</span>
                                </Link>

                                <Link href="/login" className="flex flex-col items-center gap-1 hover:text-[#198754] transition group">
                                    <FontAwesomeIcon icon={faRightToBracket} className="text-lg group-hover:scale-110 transition-transform" />
                                    <span className="text-[10px] font-medium">Login</span>
                                </Link>
                            </>
                        )}
                    </div>

                </div>
            </div>

            {/* --- 3. Bottom Bar (Navigation) --- */}
            <div className="bg-gray-50 border-b border-gray-200 shadow-sm">
                <div className="container mx-auto px-4 py-2 flex items-center gap-6">

                    {/* All Categories Button */}
                    <button className="bg-[#1d945d] hover:bg-[#157347] text-white px-4 py-2.5 rounded-lg flex items-center gap-3 text-sm font-bold transition">
                        <FontAwesomeIcon icon={faBars} />
                        All Categories
                        <FontAwesomeIcon icon={faChevronDown} className="text-xs ml-2" />
                    </button>

                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-6 text-[13px] font-bold text-[#21313c]">
                        <Link href="/" className="hover:text-[#198754] transition">Home</Link>
                        <Link href="/recent" className="hover:text-[#198754] transition">Recently Added</Link>
                        <Link href="/featured" className="hover:text-[#198754] transition">Featured Products</Link>
                        <Link href="/offers" className="hover:text-[#198754] transition">Offers</Link>
                        <Link href="/brands" className="hover:text-[#198754] transition">Brands</Link>
                    </nav>

                </div>
            </div>
        </header>
    );
}