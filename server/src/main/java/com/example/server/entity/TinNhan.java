package com.example.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "TinNhan")
public class TinNhan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "maTinNhan")
    private Integer maDTinNhan;
    @Column(name = "noiDung")
    private String noiDung;

    @Column(name = "thoiGianNhan")
    private LocalDateTime thoiGianNhan;

    // Người gửi tin nhắn
    @ManyToOne
    @JoinColumn(name = "maNguoiGui")
    private NguoiDung nguoiGui;

    // Người nhận tin nhắn
    @ManyToOne
    @JoinColumn(name = "maNguoiNhan")
    private NguoiDung nguoiNhan;
}
