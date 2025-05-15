package com.example.server.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ItemDTO {
    private Integer maSanPham;
    private String tenSanPham;
    private String hinhAnh;
    private double giaSanPham;
    private int soLuong;

    public ItemDTO(Integer maSanPham, String tenSanPham, String hinhAnh, Double donGia, Integer soLuong) {
        this.maSanPham = maSanPham;
        this.tenSanPham = tenSanPham;
        this.hinhAnh = hinhAnh;
        this.giaSanPham = donGia; // hoặc Math.round(donGia) nếu cần làm tròn
        this.soLuong = soLuong;
    }
}
