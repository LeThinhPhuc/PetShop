import { Link } from "react-router-dom";
const Product = ({ product, index }) => {
    return (
        <div key={index} className="p-3 rounded-lg hover:shadow-md group relative">
            {/* Wrapper để hover zoom và hiện button */}
            <div className="relative overflow-hidden">
                <img
                    src={product.image}
                    alt="product"
                    className="w-full h-40 object-contain transform transition-transform duration-300 group-hover:scale-110"
                />

                {/* Button hiện ra khi hover */}
                <Link to={'/cart'}>
                    <button className="mt-[40%] absolute inset-0 m-auto w-48 h-10 text-black text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Thêm vào giỏ hàng
                    </button>
                </Link>
            </div>

            {/* Nội dung sản phẩm */}
            <h3 className="text-blue-700 font-semibold mt-2">{product.name}</h3>
            <p className="text-sm">{product.description}</p>
            <div className="mt-1">
                <span className="line-through text-gray-500 mr-2">{product.price}</span>
                <span className="text-red-600 font-semibold">{product.salePrice}</span>
            </div>
        </div>
    );
};
export default Product;
