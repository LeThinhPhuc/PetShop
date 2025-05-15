package com.example.server.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartItemDTO {
    private Long maNguoiDung;
    private Long maSanPham;
    private int soLuong;
    private double donGia;

}
