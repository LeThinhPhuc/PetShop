import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { FaSearch, FaUser, FaShoppingBasket } from "react-icons/fa";
const mockData = [
    { month: "1/2025", revenue: 15 },
    { month: "2/2025", revenue: 24.8 },
    { month: "3/2025", revenue: 19.2 },
    { month: "4/2025", revenue: 17.5 },
    { month: "5/2025", revenue: 9 },
    { month: "6/2025", revenue: 22.5 },
];

const tableData = [
    {
        id: 1,
        code: "MSP001",
        name: "Đồ Chơi Cho Chó Tạ Cao Su Chuông TPet Nhai Gặm Sạch Răng",
        size: "50g",
        quantity: 20,
        price: 50000,
        total: 1000000,
        note: "",
    },
    {
        id: 2,
        code: "MSP001",
        name: "Đồ Chơi Cho Chó Tạ Cao Su Chuông TPet Nhai Gặm Sạch Răng",
        size: "20g",
        quantity: 30,
        price: 50000,
        total: 1500000,
        note: "",
    },
    {
        id: 3,
        code: "MSP001",
        name: "Đồ Chơi Cho Chó Tạ Cao Su Chuông TPet Nhai Gặm Sạch Răng",
        size: "50g",
        quantity: 10,
        price: 50000,
        total: 500000,
        note: "",
    },
    {
        id: 4,
        code: "MSP001",
        name: "Đồ Chơi Cho Chó Tạ Cao Su Chuông TPet Nhai Gặm Sạch Răng",
        size: "50g",
        quantity: 20,
        price: 50000,
        total: 1000000,
        note: "",
    },
];

export default function Statistic() {
    const [viewMode, setViewMode] = useState("chart");
    const [searchCode, setSearchCode] = useState("");
    const [filterDate, setFilterDate] = useState("2025-07");
    const [startMonth, setStartMonth] = useState("");
    const [endMonth, setEndMonth] = useState("");
    const filteredTable = tableData.filter(item =>
        item.code.toLowerCase().includes(searchCode.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-xl font-semibold mb-4">Thống kê doanh thu</h2>
            <div className="flex items-center justify-between">
                <h4 className="mb-4">Top mặt hàng bán chạy</h4>
                <a href="#" className="text-blue-500 mb-4 whitespace-nowrap">Xem tất cả</a>
            </div>

            {/* Top Products */}
            <div className="flex gap-3 overflow-x-auto mb-4">
                {[1, 2, 3].map(i => (
                    <div className="border border-green-400 p-4 rounded-md  flex justify-center items-center">
                        <img
                            src="/assets/food.png"
                            alt="icon"
                            className="w-20 h-20 mr-2"
                        />
                        <div key={i} className="min-w-[250px] bg-white">
                            <p className="font-semibold">Đồ Chơi Cho Chó Tạ Cao Su Chuông TPet Nhai Gặm Sạch Răng</p>
                            <p>Số lượt bán: 250</p>
                            <p>Chất lượng mặt hàng: Tốt</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="view"
                            value="chart"
                            checked={viewMode === "chart"}
                            onChange={() => setViewMode("chart")}
                        />
                        Dạng biểu đồ
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="view"
                            value="table"
                            checked={viewMode === "table"}
                            onChange={() => setViewMode("table")}
                        />
                        Dạng bảng
                    </label>
                </div>

                {viewMode === "table" && (
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Bạn cần tìm gì?"
                            className="w-full h-10 px-4 pr-20 border rounded-full"
                        />
                        <button
                            className="absolute flex justify-center items-center bg-blue right-1 top-1/2 -translate-y-1/2 h-8 px-4 text-sm text-blue-700 bg-cyan-300 rounded-full hover:bg-cyan-400"
                        >
                            Tìm
                        </button>
                    </div>


                )}

                {/* Date Filter */}
                <div className="flex items-center gap-2">
                    <label>Bộ lọc</label>

                    <div className="flex space-x-4 items-center">
                        <input
                            type="month"
                            value={startMonth}
                            onChange={(e) => setStartMonth(e.target.value)}
                            className="p-2 border rounded"
                        />
                        <span>-</span>
                        <input
                            type="month"
                            value={endMonth}
                            onChange={(e) => setEndMonth(e.target.value)}
                            className="p-2 border rounded"
                        />
                    </div>

                </div>
            </div>

            {/* Chart / Table View */}
            {viewMode === "chart" ? (
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={mockData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis unit=" triệu" />
                        <Tooltip />
                        <Bar dataKey="revenue" fill="#4b5563" />
                    </BarChart>
                </ResponsiveContainer>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border px-3 py-2">STT</th>
                                <th className="border px-3 py-2">Mã sản phẩm</th>
                                <th className="border px-3 py-2">Tên sản phẩm</th>
                                <th className="border px-3 py-2">Kích cỡ</th>
                                <th className="border px-3 py-2">Số lượng</th>
                                <th className="border px-3 py-2">Đơn giá</th>
                                <th className="border px-3 py-2">Thành tiền</th>
                                <th className="border px-3 py-2">Ghi chú</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTable.map((item, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border px-3 py-2">{index + 1}</td>
                                    <td className="border px-3 py-2">{item.code}</td>
                                    <td className="border px-3 py-2">{item.name}</td>
                                    <td className="border px-3 py-2">{item.size}</td>
                                    <td className="border px-3 py-2">{item.quantity}</td>
                                    <td className="border px-3 py-2">{item.price.toLocaleString()}đ</td>
                                    <td className="border px-3 py-2">{item.total.toLocaleString()}đ</td>
                                    <td className="border px-3 py-2">{item.note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
