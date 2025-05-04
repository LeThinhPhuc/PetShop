import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div className="max-w-[95%] mx-auto p-2">
            <div>
                Thống kê sản phẩm
            </div>
            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-3 ">
                    <div className="p-4 text-xl border-b-2 pb-3">
                        Bộ lọc
                    </div>
                    <div className="grid grid-cols-2 p-5">
                        <div className="col-span-1">

                            <form class="max-w-sm mx-auto">
                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loại sản phẩm</label>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Tất cả</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </form>

                        </div>
                        <div className="col-span-1">

                            <div class="max-w-sm mx-auto">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mã sản phẩm</label>
                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-span-1 ">
                    <h2 className="font-semibold mb-2">Giá</h2>
                    <div className="flex items-center space-x-2">
                        <input type="number" className="w-20 p-1 border rounded" placeholder="0" />
                        <span>-</span>
                        <input type="number" className="w-24 p-1 border rounded" placeholder="1.000.000đ" />
                    </div>
                    <button className="mt-2 px-3 py-1 border rounded hover:bg-gray-100">Áp dụng</button>
                </div>
            </div>
            <div className="mt-6 overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm text-left text-black">
                    <thead className="bg-[#0b2b7a] text-white">
                        <tr>
                            <th className="px-4 py-2 border">STT</th>
                            <th className="px-4 py-2 border">Mã sản phẩm</th>
                            <th className="px-4 py-2 border">Tên sản phẩm</th>
                            <th className="px-4 py-2 border">Kích cỡ</th>
                            <th className="px-4 py-2 border">Thương hiệu</th>
                            <th className="px-4 py-2 border">Số lượng còn</th>
                            <th className="px-4 py-2 border">Đơn giá</th>
                            <th className="px-4 py-2 border">Loại sản phẩm</th>
                            <th className="px-4 py-2 border">Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2, 3, 4].map((num) => (
                            <tr key={num} className="bg-white hover:bg-gray-50">
                                <td className="px-4 py-2 border text-center">{num}</td>
                                <td className="px-4 py-2 border text-center">MSP001</td>
                                <td className="px-4 py-2 border">
                                    Đồ Chơi Cho Chó Tạ Cao Su Chuông TPet Nhai Gặm Sạch Răng
                                </td>
                                <td className="px-4 py-2 border text-center">50g</td>
                                <td className="px-4 py-2 border text-center">TPet</td>
                                <td className="px-4 py-2 border text-center">20</td>
                                <td className="px-4 py-2 border text-center">50.000₫</td>
                                <td className="px-4 py-2 border text-center">Đồ chơi</td>
                                <td className="px-4 py-2 border text-center">
                                    <div className="flex justify-center items-center space-x-2">
                                        <Link to={"/admin/product-detail"}>
                                            <button className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500">
                                                🛠️
                                            </button>
                                        </Link>
                                        <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
                                            🗑️
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Product;
