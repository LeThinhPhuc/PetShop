package com.example.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "LoaiSanPham")
public class LoaiSanPham {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "maLoai")
    private Integer maLoai;
    @Column(name = "tenLoaiSanPham")
    private String tenLoaiSanPham;
    @Column(name="loai")
    private Integer loai;
    @OneToMany(mappedBy = "loaiSanPham")
    @JsonIgnore
    private List<SanPham> danhSachSanPham;
}
