import { Link } from "react-router-dom";

const Order = () => {
    const orders = [
        {
            id: 1,
            items: [
                { name: "Đồ Chơi Cho Chó Tạ Cao Su Chuông TPet Nhai Gặm Sạch Răng", quantity: 1 },
                { name: "Thức Ăn Hạt Cho Mèo Trưởng Thành Nuôi Trong Nhà Royal Canin Indoor 27", quantity: 1 },
            ],
            orderDate: "28/03/2025",
            deliveryStatus: "Đang giao hàng",
            totalPrice: "230.000",
        },
        {
            id: 2,
            items: [
                { name: "Thức Ăn Hạt Cho Mèo Trưởng Thành Nuôi Trong Nhà Royal Canin Indoor 27", quantity: 2 },
            ],
            orderDate: "28/03/2025",
            deliveryStatus: "Đã giao hàng",
            totalPrice: "230.000",
        },
    ];

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-5">Đơn hàng của bạn</h2>

            {orders.map((order, index) => (
                <div key={index} className="bg-yellow-100 p-4 mb-4 rounded">
                    {/* Danh sách sản phẩm */}
                    {order.items.map((item, idx) => (
                        <div key={idx} className="mb-2">
                            <p className="font-semibold">{item.name}</p>
                            <p>Số lượng : {item.quantity}</p>
                        </div>
                    ))}


                    {/* Thông tin giao hàng và tổng tiền */}
                    <div className="top-4 right-4 flex justify-between">
                        <p>Ngày đặt hàng : {order.orderDate}</p>

                        <p className="border-l-2 pl-5">
                            <p>Trạng thái giao hàng : {order.deliveryStatus}</p>
                            <p>{order.items.length} mặt hàng : <span className="font-bold text-lg">{order.totalPrice}đ</span></p>
                        </p>

                        {/* Link xem chi tiết */}
                        <Link to={'/order-detail'} className="text-purple-700 underline mt-2 inline-block">
                            Xem chi tiết
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Order;
