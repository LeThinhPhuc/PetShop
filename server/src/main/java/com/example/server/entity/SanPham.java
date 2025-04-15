package com.example.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "SanPham")
public class SanPham {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "maSanPham")
    private Integer maSanPham;
    @Column(name="moTa")
    private String moTa;
    @Column(name="hinhAnh")
    private String hinhAnh;
    @Column(name="tonKho")
    private Integer tonKho;
    @Column(name="ngayTao")
    private LocalDateTime ngayTao;
    @OneToMany(mappedBy = "sanPham", cascade = CascadeType.ALL)
    private List<ChiTietHoaDon> danhSachChiTietHoaDon;
    @OneToMany(mappedBy = "sanPham", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<BinhLuan> danhSachBinhLuan;

    @ManyToOne
    @JoinColumn(name = "maLoaiSanPham") // FK tới bảng LoaiSanPham
    private LoaiSanPham loaiSanPham;

    @ManyToOne
    @JoinColumn(name = "maKichCo") // FK tới bảng KichCo
    private KichCo kichCo;

    @ManyToOne
    @JoinColumn(name = "maThuongHieu") // FK tới bảng ThuongHieu
    private ThuongHieu thuongHieu;
}
