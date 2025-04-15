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
@Table(name = "ThuongHieu")
public class ThuongHieu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "maThuongHieu")
    private Integer maThuongHieu;
    @Column(name = "tenThuongHieu")
    private String tenThuongHieu;
    @OneToMany(mappedBy = "thuongHieu")
    private List<SanPham> danhSachSanPham;
}
