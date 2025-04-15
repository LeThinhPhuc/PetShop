package com.example.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "ThanhToan")
public class ThanhToan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "maThanhToan")
    private Integer maThanhToan;
    @Column(name="maGiaoDich")
    private String maGiaoDich;
    @Column(name="soTien")
    private Double soTien;
    @Column(name="phuongThucThanhToan")
    private String phuongThucThanhToan;
    @Column(name="ngayTao")
    private LocalDateTime ngayTao;
    @Column(name = "trangThai")
    private String trangThai;
    @OneToOne
    @JoinColumn(name = "maHoaDon") // FK đến bảng HoaDon
    private HoaDon hoaDon;
}
