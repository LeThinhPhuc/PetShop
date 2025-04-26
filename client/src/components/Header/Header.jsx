import { useState } from "react";
import { FaSearch, FaUser, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "./Modal";
const Header = () => {
    const [checkModal, setCheckModal] = useState(false);
    const changeStatus = () => {
        setCheckModal(false);
    }
    return (

        <>
            <header className="bg-orange-400">
                {/* Top section */}
                <div className="flex justify-between items-center px-6 py-2">
                    {/* Logo */}
                    <Link to={'/'}>
                        <div className="flex items-center justify-center">
                            <img src="/assets/logo-removebg.png" alt="Logo" className="h-15" />
                        </div>
                    </Link>

                    {/* Search */}
                    <div className="flex items-center w-1/2">
                        <input
                            type="text"
                            placeholder="Bạn cần tìm gì?"
                            className="flex-1 py-2 px-4 rounded-l-full border-b"
                        />
                        <button className="bg-cyan-300 px-4 py-2 rounded-r-full text-blue-700 text-xl">
                            <FaSearch />
                        </button>
                    </div>

                    {/* Login + Cart */}
                    <div className="flex items-center gap-6 text-center text-sm text-white">
                        <div onClick={() => { setCheckModal(true) }}>
                            <FaUser className="mx-auto text-xl" />
                            <p>Đăng nhập</p>
                        </div>
                        <Link to={'/cart'}>
                            <div className="relative">
                                <FaShoppingBasket className="mx-auto text-xl" />
                                <span className="absolute top-0 right-[-10px] bg-cyan-100 text-xs text-black rounded-full px-1">
                                    0
                                </span>
                                <p>Giỏ hàng</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex justify-center gap-10 text-white font-medium py-2">
                    <div className="relative group">
                        Chó
                        {/* Dropdown content */}
                        <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                            <ul className="py-2">
                                <Link to="/pet/Chó" className="hover:underline">
                                    <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Chó 1</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Chó 2</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Chó 3</li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <div className="relative group">
                        Mèo
                        {/* Dropdown content */}
                        <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                            <ul className="py-2">
                                <Link to="/pet/Mèo" className="hover:underline">
                                    <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Mèo 1</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Mèo 2</li>
                                    <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Mèo 3</li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <div>
                        Thiết bị thông minh
                    </div>

                    <Link
                        to="/order"
                        className="text-white"
                    >
                        Đơn hàng của bạn
                    </Link>




                    <div>
                        Tin tức
                    </div>
                </nav>

                {/* Bottom strip */}
                <div className="bg-cyan-100 text-black text-center py-1 text-sm flex justify-between px-6">
                    <span>
                        Nơi cung cấp sản phẩm uy tín - chất lượng cho thú cưng của bạn!
                    </span>
                    <span className="font-medium">Hotline : 0383339852</span>
                </div>
            </header>
            {checkModal && (
                <div className="fixed inset-0 z-50 flex justify-end bg-[rgba(0,0,0,0.4)]">

                    <div className="w-full max-w-md bg-white h-full shadow-lg relative animate-slide-in-right">
                        <button
                            onClick={() => setCheckModal(false)}
                            className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-black"
                        >
                            ×
                        </button>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-6">Đăng Nhập</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-gray-700">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full border px-4 py-2 rounded"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-gray-700">
                                        Mật khẩu <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            placeholder="Mật khẩu"
                                            className="w-full border px-4 py-2 rounded pr-10"
                                            required
                                        />
                                        <span className="absolute right-3 top-3 text-gray-400 cursor-pointer">
                                            👁️
                                        </span>
                                    </div>
                                </div>
                                <button className="w-full bg-orange-400 py-2 rounded hover:bg-orange-500">
                                    Đăng nhập
                                </button>
                                <div className="text-center text-sm mt-2 space-y-1">
                                    <p className="text-blue-500 cursor-pointer hover:underline">
                                        Quên mật khẩu?
                                    </p>
                                    <Link to={'/signup'} onClick={() => { setCheckModal(false) }}>
                                        <p className="text-blue-500 cursor-pointer hover:underline">
                                            Tạo tài khoản
                                        </p>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default Header;
