import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link, useNavigate } from "react-router-dom";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
const Shopping = () => {
    const images = [
        '/assets/banner1.png',
        '/assets/banner2.png'
    ];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { list, loading, error } = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="bg-white">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="rounded-lg"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`Slide ${index}`} className="w-full rounded-lg" />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Section: Services */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 px-4 text-sm">
                {[
                    { icon: "🚚", text: "Miễn phí Vận chuyển" },
                    { icon: "🛡️", text: "Sản phẩm Chính hãng" },
                    { icon: "💳", text: "Thanh toán Tiện lợi" },
                    { icon: "📞", text: "Hỗ trợ Chuyên nghiệp 24/7" },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center p-4 rounded-xl shadow hover:shadow-md transition-all border bg-white"
                    >
                        <div className="text-5xl font-black mr-4">{item.icon}</div>
                        <p className="font-medium">{item.text}</p>
                    </div>
                ))}
            </div>


            {/* Section: Banner */}
            <div className="flex justify-between items-center py-6 px-4 gap-4">
                <Link to='/pet/Chó' className="flex-1">
                    <img src="/assets/dogbanner.png" className="w-full rounded-lg" alt="Mua sắm cho cún" />
                </Link>
                <Link to='/pet/Mèo' className="flex-1">
                    <img src="/assets/catbanner.png" className="w-full rounded-lg" alt="Mua sắm cho mèo" />
                </Link>
            </div>


            {/* Section: Bộ sưu tập mèo con */}
            <div className="px-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-blue-800">Bộ Sưu Tập Cho Mèo Con</h2>
                    <a href="#" className="text-sm text-blue-600 underline">Xem tất cả</a>
                </div>
                <div className="flex justify-between overflow-x-auto gap-4">
                    {["Pate", "Thức Ăn", "Cát Vệ Sinh", "Sữa Tắm", "Nhà Ở"].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center min-w-[100px]">
                            <img src="/assets/food.png" className="w-32 border-[5px] p-2 rounded-full mb-2"></img>
                            <p className="text-xs font-medium">{item} Cho Mèo Con</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section: Được boss yêu thích */}
            <div className="px-4 py-6">
                <h2 className="text-lg font-semibold mb-4">Được boss yêu thích</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {list.map((product) => (
                        <Link to={`/detail/${product?.maSanPham}`}>
                            <Product product={product} />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Section: Hàng mới về */}
            <div className="px-4 py-6">
                <h2 className="text-lg font-semibold mb-4">Hàng mới về</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {list.map((product) => (
                        <Link to={'/detail'}>
                            <Product product={product} />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Section: Thương hiệu */}
            <div className="px-4 py-6">
                <h2 className="text-lg font-semibold mb-4">Các thương hiệu boss thích</h2>
                <div className="grid grid-cols-5 gap-4 items-center">
                    {["/brand1.jpg", "/brand2.png", "/brand3.jpg", "/brand4.jpg", "/brand5.png"].map((logo, i) => (
                        <img key={i} src={`/assets/${logo}`} alt="brand" className="p-3 border-b shadow rounded-md h-25 object-contain mx-auto" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shopping;
