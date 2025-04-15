package com.example.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Tinh")
public class Tinh {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "maTinh")
    private Integer maTinh;
    @Column(name = "tenTinh")
    private String tenTinh;
    @OneToMany(mappedBy = "tinh", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Huyen> danhSachHuyen = new ArrayList<>();
    @OneToMany(mappedBy = "tinh")
    @JsonIgnore
    private List<DiaChi> danhSachDiaChi;
}
