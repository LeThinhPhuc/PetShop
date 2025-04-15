package com.example.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "Xa")
public class Xa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "maXa")
    private Integer maXa;
    @Column(name = "tenXa")
    private String tenXa;
    @OneToMany(mappedBy = "xa")
    @JsonIgnore
    private List<DiaChi> danhSachDiaChi;
    @ManyToOne
    @JoinColumn(name = "maHuyen") // FK tham chiếu đến maHuyen trong Huyen
    private Huyen huyen;


}
