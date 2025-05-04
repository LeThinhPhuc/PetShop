import React, { useState } from "react";

export default function Voucher() {
    const [discountType, setDiscountType] = useState("product"); // product | shipping
    const [startMonth, setStartMonth] = useState("");
    const [endMonth, setEndMonth] = useState("");
    return (
        <div className="flex w-full p-4 space-x-4">
            {/* Bên trái */}
            <div className="w-1/4 bg-gray-100 p-4 rounded">
                <h2 className="font-semibold mb-2">Tạo mã khuyến mãi</h2>

                {discountType === "product" ? (
                    <>
                        <input
                            type="text"
                            placeholder="Nhập mã sản phẩm"
                            className="w-full p-2 border rounded mb-4"
                        />
                        {/* Danh sách sản phẩm */}
                        {[1, 2, 3, 4].map((item, index) => (
                            <div key={index} className="flex items-center mb-2 bg-white p-2 rounded shadow">
                                <input type="checkbox" className="mr-2 accent-yellow-400" />
                                <img
                                    src="/assets/food.png"
                                    alt="icon"
                                    className="w-8 h-8 mr-2"
                                />
                                <span>Đồ Chơi Cho Chó Tạ Cao Su Chuông TPet Nhai Gặm Sạch Răng</span>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {/* Danh sách loại vận chuyển */}
                        {["Vận chuyển nhanh", "Vận chuyển hỏa tốc", "Vận chuyển nước ngoài"].map(
                            (label, idx) => (
                                <div key={idx} className="flex items-center mb-2 bg-white p-2 rounded shadow">
                                    <input type="checkbox" className="mr-2 accent-yellow-400" />
                                    <span>{label}</span>
                                </div>
                            )
                        )}
                    </>
                )}
            </div>

            {/* Bên phải */}
            <div className="w-3/4 p-4">
                <div className="flex items-center mb-4 space-x-4">
                    <label className="flex items-center space-x-1">
                        <input
                            type="radio"
                            name="type"
                            checked={discountType === "product"}
                            onChange={() => setDiscountType("product")}
                        />
                        <span>Sản phẩm</span>
                    </label>
                    <label className="flex items-center space-x-1">
                        <input
                            type="radio"
                            name="type"
                            checked={discountType === "shipping"}
                            onChange={() => setDiscountType("shipping")}
                        />
                        <span>Vận chuyển</span>
                    </label>
                </div>

                {/* Giá muốn giảm */}
                <div className="flex items-center mb-4 gap-2">
                    <input
                        type="number"
                        placeholder="Nhập %"
                        className="p-2 border rounded flex-1"
                    />
                    <span>% hoặc</span>
                    <input
                        type="number"
                        placeholder="Nhập số tiền"
                        className="p-2 border rounded flex-1"
                    />
                    <span>vnd</span>
                </div>


                {/* Áp dụng cho */}
                <div className="flex items-center mb-4 gap-2">
                    <input
                        type="number"
                        placeholder="Nhập số lượng khách"
                        className="p-2 border rounded flex-1"
                    />
                    <span>khách</span>
                </div>


                {/* Thời gian */}
                <div className="flex items-center mb-4 gap-2">
                    <label>Thời gian khuyến mãi từ</label>
                    <input
                        type="month"
                        value={startMonth}
                        onChange={(e) => setStartMonth(e.target.value)}
                        className="p-2 border rounded flex-1"
                    />
                    <span>đến</span>
                    <input
                        type="month"
                        value={endMonth}
                        onChange={(e) => setEndMonth(e.target.value)}
                        className="p-2 border rounded flex-1"
                    />
                </div>


                {/* Khu vực */}
                {discountType === "shipping" && (
                    <div className="mb-4">
                        <label className="block mb-1">Khu vực</label>
                        <select className="w-full p-2 border rounded">
                            <option>Toàn quốc</option>
                            <option>Miền Bắc</option>
                            <option>Miền Trung</option>
                            <option>Miền Nam</option>
                        </select>
                    </div>
                )}

                <button className="mt-4 px-4 py-2 bg-white border rounded shadow hover:bg-gray-50">
                    Tạo mã giảm giá
                </button>
            </div>
        </div>
    );
}
