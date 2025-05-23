package com.example.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "SanPham")
public class SanPham {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "maSanPham")
    private Integer maSanPham;
    @Column(name = "tenSanPham", columnDefinition = "NVARCHAR(255)")
    private String tenSanPham;
    @Column(name="moTa", columnDefinition = "NVARCHAR(255)")
    private String moTa;
    @Column(name="hinhAnh")
    private String hinhAnh;
    @Column(name="tonKho")
    private Integer tonKho;
    @Column(name="giaSanPham")
    private Double giaSanPham;
    @Column(name="ngayTao")
    private LocalDateTime ngayTao;
    @OneToMany(mappedBy = "sanPham", cascade = CascadeType.ALL)
    @JsonIgnore
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
