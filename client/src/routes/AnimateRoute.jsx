// import { Routes, Route, Router, useLocation } from "react-router-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import LoginSignup from "../components/LoginSignup";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Shopping from "../components/Shopping/Shopping";
import Signup from "../components/Account/Signup";
import Cart from "../components/Shopping/Cart";
import ShoppingDog from "../components/Shopping/ShoppingDog";
import ProductDetail from "../components/Shopping/ProductDetail";
import Order from "../components/Shopping/Order";
import OrderDetail from "../components/Shopping/OrderDetail";
import Product from "../components/Admin/Product/Product";
import ProductDescription from "../components/Admin/Product/ProductDescription/ProductDescription";
import Statistic from "../components/Admin/Statistic/Statistic";
import Voucher from "../components/Admin/Voucher/Voucher";
const AnimateRoute = () => {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Shopping />} />
            <Route path="/pet/:name" element={<ShoppingDog />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order-detail" element={<OrderDetail />} />
            <Route path="/admin/voucher" element={<Voucher />} />
            <Route path="/admin/statistic" element={<Statistic />} />
            <Route path="/admin/product" element={<Product />} />
            <Route path="/admin/product-detail/:id" element={<ProductDescription />} />
            <Route
                path="*"
                element={
                    <div className="pt-2 p-4 font-bold text-center text-[100px]">
                        PAGE NOT FOUND
                    </div>
                }
            />
        </Routes>
    );
};
export default AnimateRoute;
