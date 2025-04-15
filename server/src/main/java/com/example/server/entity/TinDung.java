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
@Table(name = "TinDung")
public class TinDung {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "maTinDung")
    private Integer maTinDung;
    @Column(name="soTaiKhoan")
    private String soTaiKhoan;
    @Column(name="tenChuThe")
    private String tenChuThe;
    @Column(name="csc")
    private String csc;
    @Column(name="ngayTao")
    private LocalDateTime ngayTao;
    @Column(name="ngayHetHan")
    private LocalDateTime ngayHetHan;
    @ManyToOne
    @JoinColumn(name = "maNguoiDung") // Khóa ngoại tham chiếu đến Người Dùng
    private NguoiDung nguoiDung;
}
