package com.example.server.repository;

import com.example.server.entity.HoaDon;
import com.example.server.entity.KichCo;
import com.example.server.entity.NguoiDung;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HoaDonRepository extends JpaRepository<HoaDon, Integer> {
    Optional<HoaDon> findByNguoiDungAndLoai(NguoiDung nguoiDung, int loai);

}
