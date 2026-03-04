import ProductInfo from "../components/productDetails/ProductInfo";
import { getProductById } from "../server/products.action"

export default async function ProductDetailsScreen({ productId }: { productId: string; }) {
    const response = await getProductById({ id: productId });
    return <>
        <ProductInfo product={response.data} />
    </>

}
