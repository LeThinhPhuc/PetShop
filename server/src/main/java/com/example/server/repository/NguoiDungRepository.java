package com.example.server.repository;

import com.example.server.entity.NguoiDung;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NguoiDungRepository extends JpaRepository<NguoiDung, Integer> {
    Optional<NguoiDung> findByTenNguoiDung(String tenNguoiDung);
    boolean existsByTenNguoiDung(String tenNguoiDung);
}
