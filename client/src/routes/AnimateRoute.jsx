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
const AnimateRoute = () => {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Shopping />} />
            <Route path="/pet/:name" element={<ShoppingDog />} />
            <Route path="/detail" element={<ProductDetail />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order-detail" element={<OrderDetail />} />
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
