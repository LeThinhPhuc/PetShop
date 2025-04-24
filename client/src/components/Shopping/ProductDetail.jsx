import { useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function ProductDetail() {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("400g");
    const sizes = ["400g", "1kg"];
    const similarProducts = new Array(4).fill({
        name: "Royal Canin",
        desc: "Thức Ăn Hạt Cho Mèo Trưởng Thành Nuôi Trong Nhà Royal Canin Indoor 27",
        oldPrice: "124.000đ",
        newPrice: "115.000đ",
        img: "/assets/food.png",
    });

    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Breadcrumb */}
            <Link to={'/'}>
                <p className="text-sm text-gray-600 mb-2">Trang chủ </p>
            </Link>

            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image preview */}
                <div className="flex flex-col items-center">
                    <div className="w-72 h-72 border rounded mb-4">
                        <img src="/assets/food.png" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex gap-2">
                        {[...Array(4)].map((_, i) => (
                            <img
                                key={i}
                                src="/assets/food.png"
                                className="w-16 h-16 object-contain border rounded"
                            />
                        ))}
                    </div>
                </div>

                {/* Info */}
                <div>
                    <h2 className="text-xl font-semibold text-blue-700">Thức Ăn Hạt Cho Mèo Trưởng Thành Nuôi Trong Nhà Royal Canin Indoor 27</h2>
                    <p className="mt-2 text-sm">Thương hiệu: <span className="font-semibold">Royal Canin</span></p>

                    {/* Quantity */}
                    <div className="my-4">
                        <label className="font-medium mr-3">Số lượng:</label>
                        <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="border px-2">-</button>
                        <span className="mx-2">{quantity}</span>
                        <button onClick={() => setQuantity(q => q + 1)} className="border px-2">+</button>
                    </div>

                    {/* Size */}
                    <div className="mb-4">
                        <label className="font-medium mr-3">Kích cỡ:</label>
                        {sizes.map(s => (
                            <button
                                key={s}
                                onClick={() => setSize(s)}
                                className={`px-3 py-1 mr-2 rounded ${size === s ? 'border' : ''}`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>

                    {/* Price */}
                    <div className="mb-4 text-lg">
                        <span className="font-semibold text-gray-500 line-through mr-2">{124 * quantity}.000đ</span>
                        <span className="font-bold text-red-600 text-xl">{115 * quantity}.000đ</span>
                    </div>

                    {/* Add to cart */}
                    <button className="px-5 py-2 rounded hover:bg-gray-800">Thêm vào giỏ hàng</button>
                    <p className="text-sm mt-2 text-gray-500">Miễn phí vận chuyển với đơn nội thành Đà Nẵng</p>
                </div>
            </div>

            {/* Mô tả */}
            <div className="my-10 border-t pt-6">
                <h3 className="text-xl font-semibold mb-3">Mô Tả</h3>
                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-justify">
                    <li><strong>Thương hiệu:</strong> Royal Canin</li>
                    <li><strong>Phù hợp cho:</strong> Mèo nhà trưởng thành (trên 12 tháng tuổi)</li>
                    <li>Thức ăn cho mèo Royal Canin Indoor giúp kiểm soát cân nặng, giảm mùi hôi và tốt cho lông mèo.</li>
                    <li>Lợi ích:
                        <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
                            <li>
                                <strong>GIẢM MÙI HÔI CHẤT THẢI:</strong> Các protein giúp tiêu hóa tốt, giảm mùi và bảo vệ hệ tiêu hóa.
                            </li>
                            <li>
                                <strong>QUẢN LÝ CÂN NẶNG:</strong> Giảm calo phù hợp cho mèo ít hoạt động.
                            </li>
                        </ul>
                    </li>
                </ul>
                <button className="mt-4 px-4 py-1 border rounded hover:bg-gray-100">Đọc thêm</button>
            </div>


            {/* Sản phẩm tương tự */}
            <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-6 text-center">Các Sản Phẩm Tương Tự</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {similarProducts.map((p, i) => (
                        <div key={i} className="border rounded p-2 text-center hover:shadow">
                            <img src={p.img} alt={p.name} className="h-36 object-contain mx-auto mb-2" />
                            <h4 className="font-semibold text-blue-600">{p.name}</h4>
                            <p className="text-sm">{p.desc}</p>
                            <div className="text-sm mt-2">
                                <span className="line-through mr-1 text-gray-400">{p.oldPrice}</span>
                                <span className="font-bold text-red-600">{p.newPrice}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} <div className="my-10 border-t pt-6">
    <h3 className="text-xl font-semibold mb-3">Mô Tả</h3>
    <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-justify">
        <li><strong>Thương hiệu:</strong> Royal Canin</li>
        <li><strong>Phù hợp cho:</strong> Mèo nhà trưởng thành (trên 12 tháng tuổi)</li>
        <li>Thức ăn cho mèo Royal Canin Indoor giúp kiểm soát cân nặng, giảm mùi hôi và tốt cho lông mèo.</li>
        <li>Lợi ích:
            <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
                <li>
                    <strong>GIẢM MÙI HÔI CHẤT THẢI:</strong> Các protein giúp tiêu hóa tốt, giảm mùi và bảo vệ hệ tiêu hóa.
                </li>
                <li>
                    <strong>QUẢN LÝ CÂN NẶNG:</strong> Giảm calo phù hợp cho mèo ít hoạt động.
                </li>
            </ul>
        </li>
    </ul>
    <button className="mt-4 px-4 py-1 border rounded hover:bg-gray-100">Đọc thêm</button>
</div>

