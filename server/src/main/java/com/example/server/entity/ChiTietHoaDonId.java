package com.example.server.entity;

import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Embeddable
public class ChiTietHoaDonId implements Serializable {
    private Integer hoaDon;
    private Integer sanPham;
}
