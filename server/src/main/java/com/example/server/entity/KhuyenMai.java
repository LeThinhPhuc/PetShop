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
@Table(name = "KhuyenMai")
public class KhuyenMai {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "maKhuyenMai")
    private Integer maKhuyenMai;
    @Column(name = "tenKhuyenMai")
    private String tenKhuyenMai;
    @Column(name="giamGia")
    private Double giamGia;
    @Column(name="ngayTao")
    private LocalDateTime ngayTao;
    @Column(name="ngayHetHan")
    private LocalDateTime ngayHetHan;
    @OneToMany(mappedBy = "khuyenMai", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<HoaDon> danhSachHoaDon;
}
