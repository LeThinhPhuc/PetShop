import React, { useEffect, useState } from "react";
import QuillEditor from "./QuillEditor/QuillEditor";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, deleteProduct, fetchProductById, fetchProducts, updateProduct } from "../../../../store/productSlice";
import { fetchBranchs, fetchProductTypes, fetchSizes } from "../../../../store/categorySlice";

export default function ProductDescription() {
    const param = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { selected, loading, error } = useSelector((state) => state.products);

    const { listProductTypes, listSizes, listBranchs } = useSelector((state) => state.categories);
    const [formData, setFormData] = useState({
        tenSanPham: "",
        moTa: "",
        giaSanPham: 0,
        tonKho: 0,
        ngayTao: "",
        hinhAnh: "",
        maLoaiSanPham: 0,
        maKichCo: 0,
        maThuongHieu: 0,
    });
    console.log(formData, param);


    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleDescriptionChange = (html) => {
        setFormData((prev) => ({
            ...prev,
            moTa: html,
        }));
    };

    useEffect(() => {
        console.log("again ", selected)
        if (param?.id != 0) {
            dispatch(fetchProductById(param?.id));
        }

        dispatch(fetchProductTypes());
        dispatch(fetchSizes());
        dispatch(fetchBranchs());
    }, [dispatch, param?.id]);

    useEffect(() => {
        if (selected) {
            setFormData({
                tenSanPham: selected.tenSanPham,
                moTa: selected.moTa,
                giaSanPham: selected.giaSanPham,
                tonKho: selected.tonKho,
                ngayTao: selected.ngayTao,
                hinhAnh: selected.hinhAnh,
                maLoaiSanPham: selected.loaiSanPham?.maLoai,
                maKichCo: selected.kichCo?.maKichCo,
                maThuongHieu: selected.thuongHieu?.maThuongHieu,
            });
        }
    }, [selected]);

    const handleUpdateProduct = async () => {
        dispatch(updateProduct({ id: param?.id, data: formData }))
        navigate("/admin/product")
        // const result = await dispatch(updateProduct({ id: param?.id, data: formData }));
        // if (updateProduct.fulfilled.match(result)) {
        //     setFormData({
        //         tenSanPham: "",
        //         moTa: "",
        //         giaSanPham: 0,
        //         tonKho: 0,
        //         ngayTao: "",
        //         hinhAnh: "",
        //         maLoaiSanPham: 0,
        //         maKichCo: 0,
        //         maThuongHieu: 0,
        //     });
        //     navigate("/admin/product")
        // }
    };
    const handleCreateProduct = () => {
        dispatch(createProduct(formData))
        dispatch(fetchProducts())
        navigate("/admin/product")
    };
    const handleDeleteProduct = () => {
        if (param?.id != 0) {
            dispatch(deleteProduct(param?.id))
            dispatch(fetchProducts())
        }
        navigate("/admin/product")
    };

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Chỉnh sửa sản phẩm</h2>
            <form className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                    <div>
                        <label className="block font-medium">Mã sản phẩm <span className="text-red-500">*</span></label>
                        <p className="mt-1 font-semibold text-gray-700">{selected?.maSanPham}</p>
                    </div>

                    <div>
                        <label className="block font-medium">Tên sản phẩm <span className="text-red-500">*</span></label>
                        <input
                            name="tenSanPham"
                            value={formData?.tenSanPham}
                            onChange={handleChange}
                            placeholder="Tên sản phẩm"
                            type="text"
                            className="w-full border rounded-lg p-2"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Loại sản phẩm <span className="text-red-500">*</span></label>
                        <select id="maLoaiSanPham" name="maLoaiSanPham" value={formData?.maLoaiSanPham}
                            onChange={handleChange} class="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Chọn thương hiệu</option>
                            {listProductTypes.map((c) => (
                                <option key={c.maLoai} value={c.maLoai}>
                                    {c.tenLoaiSanPham}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium">Đơn giá <span className="text-red-500">*</span></label>
                        <input
                            name="giaSanPham"
                            value={formData?.giaSanPham}
                            onChange={handleChange}
                            placeholder="Giá sản phẩm"
                            type="number" className="w-full border rounded-lg p-2" defaultValue="0" />
                    </div>

                    <div>
                        <label className="block font-medium">Mô tả</label>
                        <QuillEditor name="moTa" onEditorChange={handleDescriptionChange} value={formData?.moTa}></QuillEditor>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    <div>
                        <label className="block font-medium">Kích cỡ</label>
                        <select id="maKichCo" name="maKichCo" value={formData?.maKichCo}
                            onChange={handleChange} class="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Chọn kích cỡ</option>
                            {listSizes.map((c) => (
                                <option key={c.maKichCo} value={c.maKichCo}>
                                    {c.tenKichCo}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium">Thương hiệu <span className="text-red-500">*</span></label>
                        <select id="maThuongHieu" name="maThuongHieu" value={formData?.maThuongHieu}
                            onChange={handleChange} class="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Chọn thương hiệu</option>
                            {listBranchs.map((c) => (
                                <option key={c.maThuongHieu} value={c.maThuongHieu}>
                                    {c.tenThuongHieu}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium">Số lượng còn <span className="text-red-500">*</span></label>
                        <input
                            name="tonKho"
                            value={formData?.tonKho}
                            onChange={handleChange}
                            placeholder="Tồn kho"
                            type="number" className="w-full border rounded-lg p-2" />
                    </div>

                    <div>
                        <label className="block font-medium">Hình ảnh <span className="text-red-500">*</span></label>
                        <input type="file" accept="image/*" className="w-full border rounded-lg p-2" />
                    </div>
                </div>
            </form>
            {param?.id == 0 ? (
                <div className="flex justify-center gap-6 mt-8">
                    <button className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 px-6 py-2 rounded-full" onClick={handleCreateProduct}>
                        🛠️ Thêm sản phẩm
                    </button>
                    <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full" onClick={handleDeleteProduct}>
                        🗑️ Hủy sản phẩm
                    </button>
                </div>
            ) : (
                <div className="flex justify-center gap-6 mt-8">
                    <button className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 px-6 py-2 rounded-full" onClick={handleUpdateProduct}>
                        🛠️ Chỉnh sửa sản phẩm
                    </button>
                    <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full" onClick={handleDeleteProduct}>
                        🗑️ Xóa sản phẩm
                    </button>
                </div>)
            }


        </div>
    );
}
