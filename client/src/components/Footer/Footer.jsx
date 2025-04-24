const Footer = () => {
    return (
        <footer className="bg-yellow-400 text-black px-10 py-8 w-full">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Shop */}
                <div>
                    <h2 className="font-bold text-lg mb-4">Shop</h2>
                    <ul className="space-y-2">
                        <li>Dành cho chó</li>
                        <li>Dành cho mèo</li>
                        <li>Thương hiệu</li>
                        <li>Blogs</li>
                        <li>Bộ sưu tập</li>
                    </ul>
                </div>

                {/* PetShop */}
                <div>
                    <h2 className="font-bold text-lg mb-4">PetShop</h2>
                    <ul className="space-y-2">
                        <li>Giới thiệu</li>
                        <li>Điều khoản sử dụng</li>
                        <li>Tuyển dụng</li>
                        <li>Thành viên của PetShop</li>
                    </ul>
                </div>

                {/* Hỗ trợ khách hàng */}
                <div>
                    <h2 className="font-bold text-lg mb-4">Hỗ trợ khách hàng</h2>
                    <ul className="space-y-2">
                        <li>Chính sách đổi trả hàng</li>
                        <li>Phương thức vận chuyển</li>
                        <li>Chính sách bảo mật</li>
                        <li>Phương thức thanh toán</li>
                        <li>Chính sách hoàn tiền</li>
                    </ul>
                </div>

                {/* Liên hệ */}
                <div>
                    <h2 className="font-bold text-lg mb-4 flex justify-between items-start">
                        Liên hệ
                        <span className="text-2xl">⬆️</span>
                    </h2>
                    <p className="mb-2 font-semibold">CÔNG TY CỔ PHẦN THƯƠNG MẠI & DỊCH VỤ PETSHOP</p>
                    <p className="flex items-start gap-2 mb-2">
                        <span>📍</span>
                        325 Hùng Vương, Phường Vĩnh Trung, Quận Thanh Khê, TP. Đà Nẵng
                    </p>
                    <p className="flex items-center gap-2 mb-2">
                        📞 Hotline: 0383339852
                    </p>
                    <p className="flex items-center gap-2 mb-4">
                        📧 Email: trandatt130603@gmail.com
                    </p>
                    <div className="flex space-x-4 text-xl">
                        <a href="#"><i className="fab fa-facebook"></i>📘</a>
                        <a href="#"><i className="fab fa-instagram"></i>📸</a>
                        <a href="#"><i className="fab fa-tiktok"></i>🎵</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
