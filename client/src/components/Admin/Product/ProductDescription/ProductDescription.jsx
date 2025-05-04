import React from "react";
import QuillEditor from "./QuillEditor/QuillEditor";

export default function ProductDescription() {
    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Chỉnh sửa sản phẩm</h2>
            <form className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                    <div>
                        <label className="block font-medium">Mã sản phẩm <span className="text-red-500">*</span></label>
                        <p className="mt-1 font-semibold text-gray-700">MSP0000001</p>
                    </div>

                    <div>
                        <label className="block font-medium">Tên sản phẩm <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            className="w-full border rounded-lg p-2"
                            defaultValue="Đồ Chơi Cho Chó Tạ Cao Su Chuông TPet Nhai Sạch Răng"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Loại sản phẩm <span className="text-red-500">*</span></label>
                        <select id="countries" class="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Tất cả</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium">Đơn giá <span className="text-red-500">*</span></label>
                        <input type="number" className="w-full border rounded-lg p-2" defaultValue="0" />
                    </div>

                    <div>
                        <label className="block font-medium">Mô tả</label>
                        <QuillEditor></QuillEditor>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    <div>
                        <label className="block font-medium">Kích cỡ</label>
                        <select id="countries" class="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Tất cả</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium">Thương hiệu <span className="text-red-500">*</span></label>
                        <select id="countries" class="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Tất cả</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium">Số lượng còn <span className="text-red-500">*</span></label>
                        <input type="number" className="w-full border rounded-lg p-2" defaultValue="200" />
                    </div>

                    <div>
                        <label className="block font-medium">Hình ảnh <span className="text-red-500">*</span></label>
                        <input type="file" accept="image/*" className="w-full border rounded-lg p-2" />
                    </div>
                </div>
            </form>

            {/* Buttons */}
            <div className="flex justify-center gap-6 mt-8">
                <button className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 px-6 py-2 rounded-full">
                    🛠️ Chỉnh sửa sản phẩm
                </button>
                <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full">
                    🗑️ Xóa sản phẩm
                </button>
            </div>
        </div>
    );
}
