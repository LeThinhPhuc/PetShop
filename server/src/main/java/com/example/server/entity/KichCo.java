package com.example.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

import java.util.List;

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
    @OneToMany(mappedBy = "kichCo")
    @JsonIgnore
    private List<SanPham> danhSachSanPham;
}
