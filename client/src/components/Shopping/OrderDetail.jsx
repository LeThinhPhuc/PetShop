import { FaMapMarkerAlt } from "react-icons/fa";

const OrderDetail = () => {
    const order = {
        deliveryStatus: "Đang giao hàng",
        items: [
            {
                name: "Thức Ăn Hạt Cho Mèo Trưởng Thành Nuôi Trong Nhà Royal Canin Indoor 27",
                quantity: 1,
                price: 125000,
                imageUrl: "assets/food.png",
            },
            {
                name: "Đồ Chơi Cho Chó Tạ Cao Su Chuông TPet Nhai Gặm Sạch Răng",
                quantity: 1,
                price: 50000,
                imageUrl: "assets/food.png",
            },
        ],
        receiverName: "Trần Đạt",
        phone: "0383339852",
        address: "325 Hùng Vương, Phường Vĩnh Trung, Quận Thanh Khê, Tp. Đà Nẵng",
        note: "Kiệt 325 đi vào 50m rẽ trái đi 50m đi thẳng 100m",
        subtotal: 230000,
        shippingFee: 0,
        discount: 0,
        totalPrice: 230000,
        orderDate: "01/01/2025",
        paymentMethod: "VISA (4406)",
        paymentTime: "10:00 01/01/2025",
        deliveryDate: "05/01/2025",
    };

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-5">Lịch sử đặt hàng</h2>

            <div className="bg-yellow-100 p-6 rounded-md flex flex-col">
                {/* Trạng thái giao hàng */}
                <div className="text-right text-2xl font-bold mb-4">{order.deliveryStatus}</div>

                <div className="grid grid-cols-3 gap-4">
                    {/* Sản phẩm */}
                    <div className="col-span-1 flex flex-col gap-6">
                        {order.items.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-contain" />
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p>Số lượng : {item.quantity}</p>
                                    <p>Đơn giá : {item.price}đ</p>
                                </div>
                            </div>
                        ))}

                    </div>


                </div>
                <div className="flex justify-start items-center gap-10">
                    <p className="text-2xl font-bold mb-4">{order.totalPrice}đ</p>
                    {/* Địa chỉ giao hàng */}
                    <div className="mt-6 text-xl">
                        <div className="flex items-center gap-2 font-semibold">
                            <FaMapMarkerAlt />
                            {order.receiverName} - {order.phone}
                        </div>
                        <p>{order.address}</p>
                        {order.note && <p>Ghi chú: {order.note}</p>}
                    </div>
                </div>
                {/* Tổng tiền */}
                <div className="grid grid-cols-2 gap-4 mt-10">

                    <div>
                        <h3 className="text-xl font-bold mb-2">Tổng quan đơn hàng</h3>
                        <div className="text-xl space-y-1">
                            <p>Tổng phụ: {order.subtotal}đ</p>
                            <p>Vận chuyển: {order.shippingFee}đ</p>
                            <p>Phiếu giảm giá: {order.discount}đ</p>
                            <p className="font-bold">Tổng: {order.totalPrice}đ</p>
                        </div>
                    </div>
                    {/* Chi tiết đơn hàng */}
                    <div className="col-span-1 flex flex-col justify-start border-l-2 pl-4">
                        <h3 className="text-xl font-bold mb-2">Chi tiết đơn hàng</h3>
                        <div className="text-xl space-y-1">
                            <p>Ngày đặt hàng: {order.orderDate}</p>
                            <p>Phương thức thanh toán: {order.paymentMethod}</p>
                            <p>Thời gian thanh toán: {order.paymentTime}</p>
                            <p>Ngày giao hàng: {order.deliveryDate}</p>
                        </div>
                    </div>
                </div>



                {/* Nút quay lại */}
                <div className="flex justify-end mt-6">
                    <button
                        onClick={() => window.history.back()}
                        className="bg-white border border-black px-4 py-2 rounded hover:bg-gray-100"
                    >
                        Quay lại
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
