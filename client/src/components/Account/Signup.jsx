import React from "react";

const Signup = () => {
    return (
        <div className="max-w-xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-2">TẠO TÀI KHOẢN</h2>
            <p className="mb-6 text-sm">Vui lòng đăng ký bên dưới để tạo tài khoản</p>

            <form className="space-y-4">
                {/* Họ và Tên */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">Họ :</label>
                        <input type="text" placeholder="Nhập họ"
                            className="w-full border rounded px-3 py-2" />
                    </div>
                    <div className="flex-1">
                        <label className="block mb-1 font-medium">Tên :</label>
                        <input type="text" placeholder="Nhập tên"
                            className="w-full border rounded px-3 py-2" />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1 font-medium">
                        Địa chỉ Email <span className="text-red-500">*</span>
                    </label>
                    <input type="email" placeholder="Nhập email"
                        className="w-full border rounded px-3 py-2" required />
                </div>

                {/* Mật khẩu */}
                <div>
                    <label className="block mb-1 font-medium">
                        Mật khẩu <span className="text-red-500">*</span>
                    </label>
                    <input type="password" placeholder="Nhập mật khẩu"
                        className="w-full border rounded px-3 py-2" required />
                </div>

                {/* Nhập lại mật khẩu */}
                <div>
                    <label className="block mb-1 font-medium">
                        Nhập lại mật khẩu <span className="text-red-500">*</span>
                    </label>
                    <input type="password" placeholder="Nhập lại mật khẩu"
                        className="w-full border rounded px-3 py-2" required />
                </div>

                {/* Nút tạo tài khoản và liên kết đăng nhập */}
                <div className="flex items-center justify-between pt-2">
                    <button type="submit"
                        className="border px-5 py-2 rounded hover:bg-gray-100 font-medium">
                        Tạo tài khoản
                    </button>
                    <p className="text-sm">
                        Bạn đã có tài khoản?{" "}
                        <a href="/login" className="text-blue-600 underline">Đăng nhập</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signup;
