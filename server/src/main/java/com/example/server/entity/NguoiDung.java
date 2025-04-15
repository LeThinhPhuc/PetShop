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
@Table(name = "NguoiDung")
public class NguoiDung {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "maNguoiDung")
    private Integer maNguoiDung;
    @Column(name="ten")
    private String ten;
    @Column(name="ho")
    private String ho;
    @Column(name="tenNguoiDung")
    private String tenNguoiDung;
    @Column(name="matKhau")
    private String matKhau;
    @Column(name="cccd")
    private String cccd;
    @Column(name="sdt")
    private String sdt;
    @Column(name="gioiTinh")
    private Integer tonKho;
    @Column(name="ngaySinh")
    private LocalDateTime ngaySinh;
    @Column(name="ngayTao")
    private LocalDateTime ngayTao;
    // Một người dùng có 1 vai trò
    @ManyToOne
    @JoinColumn(name = "maVaiTro")
    private VaiTro vaiTro;

    // Một người dùng có nhiều địa chỉ
    @OneToMany(mappedBy = "nguoiDung", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<DiaChi> danhSachDiaChi;

    // Tin nhắn người này gửi đi
    @OneToMany(mappedBy = "nguoiGui", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<TinNhan> danhSachTinGui;

    // Tin nhắn người này nhận
    @OneToMany(mappedBy = "nguoiNhan", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<TinNhan> danhSachTinNhan;
    @OneToMany(mappedBy = "nguoiDung", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<TinDung> danhSachTinDung;
    @OneToMany(mappedBy = "nguoiDung", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<HoaDon> danhSachHoaDon;
    @OneToMany(mappedBy = "nguoiDung", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<BinhLuan> danhSachBinhLuan;
}
