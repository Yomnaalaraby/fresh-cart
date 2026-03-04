import { ReactNode } from "react";
import "../styles/globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "@fortawesome/fontawesome-svg-core/styles";
import { Bounce, ToastContainer } from "react-toastify";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Exo } from "next/font/google";
import Providers from "@/components/providers/Providers";
import { verifyToken } from "@/features/auth/server/auth.actions";
import { getLoggedUserCart } from "@/features/cart/server/cart.actions";
import { CartState } from "@/features/cart/store/cart.slice";
import { getLoggedUserWishlist } from "@/features/wishlist/server/wishlist.actions";
import { WishlistState } from "@/features/wishlist/store/wishlist.slice";

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-exo",
});

let defaultCartState: CartState = {
  cartId: null,
  numOfCartItems: 0,
  totalCartPrice: 0,
  products: [],
  error: null,
  isLoading: false,
};

let defaultWishlistState: WishlistState = {
  products: [],
  wishlistId: null,
  count: 0,
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const authValues = await verifyToken();

  let cartState = defaultCartState;
  let wishlistState = defaultWishlistState;

  if (authValues.isAuthenticated) {
    try {
      const cartResponse = await getLoggedUserCart();
      cartState = {
        cartId: cartResponse.cartId,
        totalCartPrice: cartResponse.data.totalCartPrice,
        products: cartResponse.data.products,
        numOfCartItems: cartResponse.numOfCartItems,
        isLoading: false,
        error: null,
      };
    } catch (error) {
      cartState = defaultCartState;
    }

    try {
      const wishlistResponse = await getLoggedUserWishlist();
      wishlistState = {
        products: wishlistResponse.data,
        wishlistId: null,
        count: wishlistResponse.count,
      };
    } catch (error) {
      wishlistState = defaultWishlistState;
    }
  }

  return (
    <html lang="en">
      <body className={`${exo.className} font-medium`}>
        <Providers
          preloadedState={{ auth: authValues, cart: cartState, wishlist: wishlistState }}
        >
          <Navbar />
          {children}
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </Providers>
      </body>
    </html>
  );
}