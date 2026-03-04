// {/* <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="grid grid-cols-1 lg:grid-cols-3 gap-8"
//         >
//           {/* Left Column - Forms */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* تم إيقاف المكونات دي مؤقتاً لحد ما تبرمجيها
//               <ShippingForm register={register} errors={errors} />
//               <PaymentMethods onChange={setPaymentMethod} selected={paymentMethod} />
//             */}
//             <div className="p-8 border border-gray-100 rounded-2xl bg-white text-center text-gray-400">
//               Shipping Form Placeholder
//             </div>
//             <div className="p-8 border border-gray-100 rounded-2xl bg-white text-center text-gray-400">
//               Payment Methods Placeholder
//             </div>
//           </div>

//           {/* Right Column - Order Summary */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4">
//               {/* Header */}
//               <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
//                 <h2 className="text-lg font-bold text-white flex items-center gap-2">
//                   <FontAwesomeIcon icon={faShoppingBag} />
//                   Order Summary
//                 </h2>
//                 <p className="text-primary-100 text-sm mt-1">
//                   {numOfCartItems} {numOfCartItems === 1 ? "item" : "items"}
//                 </p>
//               </div>

//               <div className="p-5">
//                 {/* Cart Items Preview */}
//                 <div className="space-y-3 max-h-56 overflow-y-auto mb-5 pr-1">
//                   {products.map((item) => (
//                     <div
//                       key={item._id}
//                       className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
//                     >
//                       <div className="w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0">
//                         <img
//                           src={item.product.imageCover}
//                           alt={item.product.title}
//                           className="w-full h-full object-contain"
//                         />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="text-sm font-medium text-gray-900 truncate">
//                           {item.product.title}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <hr className="border-gray-100 my-4" />

//                 {/* Price Breakdown */}
//                 <div className="space-y-3">
//                   <div className="flex justify-between text-gray-600">
//                     <span>Subtotal</span>
//                     <span className="font-medium">{subtotal} EGP</span>
//                   </div>
//                   <div className="flex justify-between text-gray-600">
//                     <span className="flex items-center gap-2">
//                       <FontAwesomeIcon icon={faTruck} className="text-gray-400" />
//                       Shipping
//                     </span>
//                     {shipping === 0 ? (
//                       <span className="text-green-600 font-semibold">FREE</span>
//                     ) : (
//                       <span className="font-medium">{shipping} EGP</span>
//                     )}
//                   </div>
//                 </div>

//                 <hr className="border-gray-100 my-4" />

//                 <div className="flex justify-between items-center">
//                   <span className="text-lg font-bold text-gray-900">Total</span>
//                   <div className="text-right">
//                     <span className="text-2xl font-bold text-primary-600">
//                       {total}
//                     </span>
//                     <span className="text-sm text-gray-500 ml-1">EGP</span>
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="w-full mt-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
//                 >
//                   <FontAwesomeIcon icon={faShieldAlt} />
//                   Proceed to Payment
//                 </button>

//                 {/* Trust Badges */}
//                 <div className="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100">
//                   <div className="flex items-center gap-1.5 text-xs text-gray-500">
//                     <FontAwesomeIcon icon={faShieldAlt} className="text-green-500" />
//                     <span>Secure</span>
//                   </div>
//                   <div className="w-px h-4 bg-gray-200"></div>
//                   <div className="flex items-center gap-1.5 text-xs text-gray-500">
//                     <FontAwesomeIcon icon={faTruck} className="text-blue-500" />
//                     <span>Fast Delivery</span>
//                   </div>
//                   <div className="w-px h-4 bg-gray-200"></div>
//                   <div className="flex items-center gap-1.5 text-xs text-gray-500">
//                     <FontAwesomeIcon icon={faBox} className="text-orange-500" />
//                     <span>Easy Returns</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// } */}