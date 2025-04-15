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
@Table(name = "Huyen")
public class Huyen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "maHuyen")
    private Integer maHuyen;
    @Column(name = "tenHuyen")
    private String tenHuyen;
    @ManyToOne
    @JoinColumn(name = "maTinh")
    private Tinh tinh;
    @OneToMany(mappedBy = "huyen", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Xa> danhSachXa = new ArrayList<>();

    @OneToMany(mappedBy = "huyen")
    @JsonIgnore
    private List<DiaChi> danhSachDiaChi;
}
