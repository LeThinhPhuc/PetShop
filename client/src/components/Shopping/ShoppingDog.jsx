import React from 'react';
import { Link, useParams } from "react-router-dom";
const products = new Array(12).fill({
    name: "Royal Canin",
    description: "Thức Ăn Hạt Cho Mèo Trưởng Thành Nuôi Trong Nhà Royal Canin Indoor 27",
    price: "124.000đ",
    salePrice: "115.000đ",
    image: "/assets/food.png"
});

const ShoppingDog = ({ name }) => {
    const param = useParams();
    return (
        <div className="p-4 max-w-7xl mx-auto">
            <h1 className="text-center text-2xl font-semibold mb-6">Sản phẩm - {param.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Bên trái - Bộ lọc */}
                <div className="col-span-1 space-y-6">
                    <div>
                        <h2 className="font-semibold mb-2">Loại sản phẩm</h2>
                        {['Cát vệ sinh', 'Dây dắt', 'Dầu thơm', 'Dinh dưỡng', 'Giường - nệm', 'Phụ kiện', 'Sữa'].map(item => (
                            <div key={item} className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <label>{item}</label>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2">Phân loại</h2>
                        {['Bổ mắt', 'Bổ sung canxi', 'Cá hồi', 'Cá mòi & Cá trắng', 'Cá ngừ', 'Tôm', 'Gạo'].map(item => (
                            <div key={item} className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <label>{item}</label>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2">Giá</h2>
                        <div className="flex items-center space-x-2">
                            <input type="number" className="w-20 p-1 border rounded" placeholder="0" />
                            <span>-</span>
                            <input type="number" className="w-24 p-1 border rounded" placeholder="1.000.000đ" />
                        </div>
                        <button className="mt-2 px-3 py-1 border rounded hover:bg-gray-100">Áp dụng</button>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2">Thương hiệu</h2>
                        {['DoggyMan', 'TPet', 'Mon Ami', 'FOFOS'].map(item => (
                            <div key={item} className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <label>{item}</label>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2 className="font-semibold mb-2">Kích thước</h2>
                        {['18g', '50g', '60g', '63g', '100g', '200g', '400g'].map(item => (
                            <div key={item} className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <label>{item}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bên phải - Danh sách sản phẩm */}
                <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <Link to={'/detail'}>
                            <div key={index} className="p-3 rounded-lg hover:shadow-md">
                                <img src={product.image} alt="product" className="w-full h-40 object-contain" />
                                <h3 className="text-blue-700 font-semibold mt-2">{product.name}</h3>
                                <p className="text-sm">{product.description}</p>
                                <div className="mt-1">
                                    <span className="line-through text-gray-500 mr-2">{product.price}</span>
                                    <span className="text-red-600 font-semibold">{product.salePrice}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <button className="px-6 py-2 border rounded hover:bg-gray-100">Xem thêm</button>
            </div>
        </div>
    );
}
export default ShoppingDog;