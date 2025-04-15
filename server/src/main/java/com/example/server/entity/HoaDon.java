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
@Table(name = "HoaDon")
public class HoaDon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "maHoaDon")
    private Integer maHoaDon;
    @Column(name="tongTien")
    private Double tongTien;
    @Column(name="ngayTao")
    private LocalDateTime ngayTao;
    @Column(name="loai")
    private Integer loai;
    @OneToOne(mappedBy = "hoaDon", cascade = CascadeType.ALL)
    private ThanhToan thanhToan;
    @ManyToOne
    @JoinColumn(name = "maNguoiDung") // tên cột khóa ngoại trong bảng HoaDon
    private NguoiDung nguoiDung;
    @ManyToOne
    @JoinColumn(name = "maKhuyenMai") // Tên cột khóa ngoại trong bảng HoaDon
    private KhuyenMai khuyenMai;
    @OneToMany(mappedBy = "hoaDon", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<ChiTietHoaDon> danhSachChiTietHoaDon;


}
