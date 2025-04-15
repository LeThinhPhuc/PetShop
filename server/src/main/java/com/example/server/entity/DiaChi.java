package com.example.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "DiaChi")
public class DiaChi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "maDiaChi")
    private Integer maDiaChi;
    @Column(name = "ghiChu")
    private String ghiChu;
    @ManyToOne
    @JoinColumn(name = "maXa")
    private Xa xa;

    @ManyToOne
    @JoinColumn(name = "maHuyen")
    private Huyen huyen;

    @ManyToOne
    @JoinColumn(name = "maTinh")
    private Tinh tinh;

    @ManyToOne
    @JoinColumn(name = "maNguoiDung")
    private NguoiDung nguoiDung;
}
