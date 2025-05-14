
import axiosClient from "../utils/AxiosClient";

const productService = {
    getAll: () => axiosClient.get("sanpham"),
    getById: (id) => axiosClient.get(`sanpham/${id}`),
    create: (data) => axiosClient.post("sanpham", data),
    upload: (data) => axiosClient.post("upload", data),
    update: (id, data) => axiosClient.put(`sanpham/${id}`, data),
    delete: (id) => axiosClient.delete(`sanpham/${id}`),
};

export default productService;
