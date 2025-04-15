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
public class BinhLuanId implements Serializable {
    private Integer maNguoiDung;
    private Integer maSanPham;
}
