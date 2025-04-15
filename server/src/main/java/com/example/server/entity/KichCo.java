package com.example.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "KichCo")
public class KichCo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "maKichCo")
    private Integer maKichCo;
    @Column(name = "tenKichCo")
    private String tenKichCo;
    @Column(name="giaSanPham")
    private Double giaSanPham;
    @OneToMany(mappedBy = "kichCo")
    private List<SanPham> danhSachSanPham;
}
