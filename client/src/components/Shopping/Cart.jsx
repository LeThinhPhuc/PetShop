import { FaTimes } from "react-icons/fa";
import { useState } from "react";
const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Thức ăn hạt Royal Canin cho mèo",
            image: "/assets/food.png",
            price: 300000,
            quantity: 1,
        },
        {
            id: 2,
            name: "Đồ chơi cho chó phát ra tiếng",
            image: "/assets/food.png",
            price: 120000,
            quantity: 2,
        },
    ]);
    const similarProducts = new Array(4).fill({
        name: "Royal Canin",
        desc: "Thức Ăn Hạt Cho Mèo Trưởng Thành Nuôi Trong Nhà Royal Canin Indoor 27",
        oldPrice: "124.000đ",
        newPrice: "115.000đ",
        img: "/assets/food.png",
    });
    const increaseQuantity = (id) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-6 text-center border-b pb-3">
                Giỏ hàng của bạn
            </h2>

            <div className="grid grid-cols-3 gap-8">
                {/* Cột trái: Danh sách sản phẩm */}
                <div className="col-span-2">
                    {/* Tiêu đề cột */}
                    <div className="grid grid-cols-4 font-semibold bg-gray-100 p-3 border-b border-gray-300">
                        <div>Sản phẩm</div>
                        <div className="text-center">Giá</div>
                        <div className="text-center">Số lượng</div>
                        <div className="text-center">Tổng tiền</div>
                    </div>

                    {/* Danh sách sản phẩm */}
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-4 items-center p-3 border-b border-gray-200 hover:bg-gray-50 transition"
                        >
                            {/* Cột Sản phẩm */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <span className="font-medium">{item.name}</span>
                            </div>

                            {/* Cột Giá */}
                            <div className="text-center font-bold">
                                {item.price.toLocaleString()} đ
                            </div>

                            {/* Cột Số lượng */}
                            <div className="flex items-center justify-center gap-2">
                                <button
                                    className="w-7 h-7 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300"
                                    onClick={() => decreaseQuantity(item.id)}
                                >
                                    -
                                </button>
                                <span className="w-6 text-center">{item.quantity}</span>
                                <button
                                    className="w-7 h-7 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300"
                                    onClick={() => increaseQuantity(item.id)}
                                >
                                    +
                                </button>
                            </div>

                            {/* Cột Tổng tiền + nút xóa */}
                            <div className="text-center flex justify-center items-center gap-2">
                                <span className="font-bold">
                                    {(item.price * item.quantity).toLocaleString()} đ
                                </span>
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <FaTimes />
                                </button>
                            </div>
                        </div>
                    ))}

                    <textarea
                        placeholder="Ghi chú"
                        className="w-full h-[100px] rounded-lg border p-2 mt-6"
                    ></textarea>
                </div>

                {/* Cột phải: Tổng thanh toán */}
                <div className="sticky top-6 self-start">
                    <h3 className="text-xl font-semibold mb-6 text-center border-b pb-3">
                        TỔNG THANH TOÁN
                    </h3>
                    <div className="p-6 rounded shadow-md">
                        <p className="grid grid-cols-2 text-lg font-medium mb-2">
                            Tổng cộng:
                            <span>
                                {cartItems
                                    .reduce((total, item) => total + item.price * item.quantity, 0)
                                    .toLocaleString()}{" "}
                                đ
                            </span>
                        </p>
                        <p className="text-gray-300 font-small mb-2 mt-10">
                            Miễn phí vận chuyển đà nẵng
                        </p>
                        <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 border py-2 px-6 rounded">
                            Thanh toán
                        </button>
                    </div>
                </div>
            </div>
            <h3 className="text-xl font-semibold mb-6 text-center mt-10">Các Sản Phẩm Tương Tự</h3>
            <div className="border-t pt-6">

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
};

export default Cart;
