package com.example.server.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
public class SignupDTO {
    private String ho;
    private String ten;
    private Integer maVaiTro;
    private String tenNguoiDung;
    private String matKhau;
    private String email;
    private LocalDateTime ngaySinh;
}
