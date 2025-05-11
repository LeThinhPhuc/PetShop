package com.example.server.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SanPhamDTO {
    private String tenSanPham;
    private String moTa;
    private Integer tonKho;
    private String hinhAnh;
    private Integer maLoaiSanPham;
    private Integer maKichCo;
    private Integer maThuongHieu;
    private Double giaSanPham;
}