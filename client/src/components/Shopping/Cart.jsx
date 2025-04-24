import React, { useState } from "react";

const initialCart = [
    {
        id: 1,
        name: "Đồ Chơi Cho Chó Tạ Cao Su Chuông TPet Nhai Gặm Sạch Răng",
        brand: "TPet",
        price: 50000,
        quantity: 1,
        image: "https://via.placeholder.com/80x80",
    },
    {
        id: 2,
        name: "Thức Ăn Hạt Cho Mèo Trưởng Thành Royal Canin Indoor 27",
        brand: "Royal Canin",
        price: 125000,
        quantity: 1,
        image: "https://via.placeholder.com/80x80",
    },
];

const suggestedProducts = Array(4).fill({
    name: "Royal Canin",
    desc: "Thức Ăn Hạt Cho Mèo Trưởng Thành Nuôi Trong Nhà Royal Canin Indoor 27",
    oldPrice: 124000,
    newPrice: 115000,
    image: "https://via.placeholder.com/100x120",
});

const Cart = () => {
    const [cart, setCart] = useState(initialCart);
    const [note, setNote] = useState("");

    const updateQuantity = (id, delta) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    const removeItem = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = () => {
        alert("Thanh toán thành công!");
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Giỏ hàng của bạn</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border p-4 rounded shadow"
                        >
                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                            <div className="flex-1 px-4">
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.brand}</p>
                                <p className="mt-2 font-bold">{item.price.toLocaleString()}đ</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                            </div>
                            <div className="w-24 text-right font-bold">
                                {(item.price * item.quantity).toLocaleString()}đ
                            </div>
                            <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500">
                                ✕
                            </button>
                        </div>
                    ))}
                    <textarea
                        className="w-full border rounded p-2"
                        rows="3"
                        placeholder="Ghi chú"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    ></textarea>
                </div>

                <div className="border rounded p-4 shadow h-fit">
                    <h3 className="text-xl font-bold mb-4">TỔNG THANH TOÁN</h3>
                    <div className="flex justify-between">
                        <span>Tổng số tiền:</span>
                        <span className="font-bold">{total.toLocaleString()}đ</span>
                    </div>
                    <p className="text-sm mt-2 text-gray-500">
                        Miễn phí vận chuyển cho các đơn hàng thuộc thành phố Đà Nẵng
                    </p>
                    <Button className="mt-4 w-full" onClick={handleCheckout}>
                        THANH TOÁN
                    </Button>
                </div>
            </div>

            <h3 className="text-xl font-bold mt-12 mb-4 text-center">Các Sản Phẩm Tương Tự</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {suggestedProducts.map((sp, idx) => (
                    <div key={idx} className="border rounded p-2 text-center">
                        <img src={sp.image} alt={sp.name} className="w-24 h-28 mx-auto object-cover" />
                        <p className="font-bold text-blue-700 mt-2">{sp.name}</p>
                        <p className="text-sm text-gray-500">{sp.desc}</p>
                        <div className="mt-2">
                            <span className="line-through mr-2 text-gray-400">
                                {sp.oldPrice.toLocaleString()}đ
                            </span>
                            <span className="font-bold text-red-500">{sp.newPrice.toLocaleString()}đ</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;