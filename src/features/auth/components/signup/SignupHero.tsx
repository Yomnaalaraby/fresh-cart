import {
    faShieldHalved,
    faTruckFast,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import reviewAuthorImg from "../../../../assets/images/review-author.png";
import Image from "next/image";

export default function SignupHero() {
    return (
        <div>
            <h1 className="text-4xl font-bold">
                Welcome to <span className="text-primary-600">FreshCart</span>
            </h1>
            <p className="text-xl mt-2 mb-4">
                Join thousands of happy customers who enjoy fresh groceries delivered
                right to their doorstep.
            </p>
            <ul className="*:flex *:items-start *:gap-4 space-y-6 my-8">
                <li>
                    <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="content">
                        <h2 className="text-lg font-semibold">Premium Quality</h2>
                        <p className="text-gray-600">
                            Premium quality products sourced from trusted suppliers.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faTruckFast} />
                    </div>
                    <div className="content">
                        <h2 className="text-lg font-semibold">Fast Delivery</h2>
                        <p className="text-gray-600">
                            Same-day delivery available in most areas
                        </p>
                    </div>
                </li>
                <li>
                    <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faShieldHalved} />
                    </div>
                    <div className="content">
                        <h2 className="text-lg font-semibold">Secure Shopping</h2>
                        <p className="text-gray-600">
                            Your data and payments are completely secure
                        </p>
                    </div>
                </li>
            </ul>
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                    <Image src={reviewAuthorImg} alt="Sarah Johnson" width={48} height={48} className="rounded-full" />
                    <div>
                        <h4 className="font-bold text-[#21313c]">Sarah Johnson</h4>
                        <div className="flex text-[#ffc107] text-xs">
                            {[...Array(5)].map((_, i) => <FontAwesomeIcon icon={faStar} key={i} />)}
                        </div>
                    </div>
                </div>
                <p className="text-[#5c6c75] italic">
                    &quot;FreshCart has transformed my shopping experience. The quality of the products is outstanding, and the delivery is always on time. Highly recommend!&quot;
                </p>
            </div>
        </div>
    );
}