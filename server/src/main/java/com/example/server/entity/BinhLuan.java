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
@Table(name = "BinhLuan")
public class BinhLuan {
    @Id
    @ManyToOne
    @JoinColumn(name = "maNguoiDung")
    private NguoiDung nguoiDung;

    @Id
    @ManyToOne
    @JoinColumn(name = "maSanPham")
    private SanPham sanPham;

    @Column(name = "noiDung")
    private String noiDung;

    @Column(name = "thoiGianBinhLuan")
    private LocalDateTime thoiGianBinhLuan;
}
