'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { CartItem } from "../types/cart.types";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { removeProductFromCart, updateProductQuantity } from "../server/cart.actions";
import { id } from "zod/v4/locales";
import { removeProduct, setCartInfo } from "../store/cart.slice";
import { useAppDispatch } from "@/store/store";

export default function CartItemCard({ info }: { info: CartItem }) {
    const { _id, count, price, product } = info
    const { brand, category, imageCover, quantity, title, id } = product

    const dispatch = useAppDispatch()

    const handleUpdateQuantity = async (newCount: number) => {
        if (newCount < 1) return;
        try {
            const response = await updateProductQuantity(id, newCount)
            dispatch(setCartInfo(response))
        } catch (error) {

        }

    };

    const handleRemove = async () => {
        const result = await Swal.fire({
            html: `<div class="text-center py-2">
      <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
        <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
        </svg>
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-2">Remove Item?</h3>
      <p class="text-gray-500 text-sm leading-relaxed">
        Remove <span class="font-semibold text-gray-700">${title.slice(0, 40)}${title.length > 40 ? "..." : ""}</span> from cart
      </p>
    </div>`,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Remove",
            cancelButtonText: "Cancel",
            buttonsStyling: false,
            customClass: {
                popup: "rounded-2xl shadow-2xl border-0 p-0",
                htmlContainer: "p-6 m-0",
                actions: "px-6 pb-6 pt-0 gap-3 flex-row-reverse",
                confirmButton: "bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all",
                cancelButton: "bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all",
            }
        })

        if (result.isConfirmed) {
            dispatch(removeProduct({ id }))
            const response = await removeProductFromCart(id);
            toast.success("Item removed from cart")
        }

    }



    return (
        <div className="flex flex-col sm:flex-row gap-6 p-4 sm:p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
            <div className="relative w-full sm:w-40 h-40 shrink-0 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100">
                <img
                    src={imageCover}
                    alt={title}
                    className="object-contain h-full p-2 mix-blend-multiply"
                />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#10b981] text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 whitespace-nowrap shadow-sm">
                    <FontAwesomeIcon icon={faCheck} />
                    In Stock
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-between pt-1">
                <div>
                    <h3 className="text-xl font-bold text-[#0b132a] mb-2">
                        {title}
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#eefcf2] text-[#198754] px-3 py-1 rounded-full text-xs font-medium">
                            {category?.name}
                        </span>
                        <span className="text-gray-300 text-xs">•</span>
                        <span className="text-gray-500 text-xs font-medium">SKU: {_id.slice(-6).toUpperCase()}</span>
                    </div>
                    <div className="mb-4">
                        <span className="text-xl font-bold text-[#198754]">{price} EGP</span>
                        <span className="text-sm text-gray-400 font-medium ml-1.5">per unit</span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center bg-white rounded-xl border border-gray-200 p-0.5 shadow-sm">
                        <button
                            disabled={count <= 1}
                            onClick={() => handleUpdateQuantity(count - 1)}
                            className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-[#0b132a] hover:bg-gray-50 rounded-lg transition-colors">
                            <FontAwesomeIcon icon={faMinus} className="text-xs" />
                        </button>
                        <span className="w-10 text-center font-bold text-[#0b132a]">{count}</span>
                        <button
                            disabled={count >= quantity}
                            onClick={() => handleUpdateQuantity(count + 1)}
                            className="w-9 h-9 flex items-center justify-center bg-[#198754] text-white rounded-lg hover:bg-[#157347] transition-colors shadow-sm">
                            <FontAwesomeIcon icon={faPlus} className="text-xs" />
                        </button>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="text-right">
                            <span className="block text-xs text-gray-400 font-medium mb-0.5">Total</span>
                            <span className="text-2xl font-bold text-[#0b132a]">
                                {price * count} <span className="text-gray-400 font-medium text-base">EGP</span>
                            </span>
                        </div>
                        <button
                            onClick={handleRemove}
                            className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center hover:bg-red-100 hover:text-red-600 transition-colors shadow-sm border border-red-100">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}