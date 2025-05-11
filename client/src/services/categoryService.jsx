
import axiosClient from "../utils/AxiosClient";

const categoryService = {
    getAllLoaiSanPham: () => axiosClient.get("loaisanpham"),
    getAllThuongHieu: () => axiosClient.get("thuonghieu"),
    getAllKichCo: () => axiosClient.get("kichco"),
};

export default categoryService;
