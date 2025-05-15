
import axiosClient from "../utils/AxiosClient";

const cartService = {
    getGioHang: (id) => axiosClient.get(`hoadon/${id}`),
    themVaoGio: (data) => axiosClient.post("hoadon/add", data),
};

export default cartService;
