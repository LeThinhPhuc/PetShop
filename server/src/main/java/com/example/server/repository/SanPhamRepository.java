package com.example.server.repository;

import com.example.server.entity.HoaDon;
import com.example.server.entity.NguoiDung;
import com.example.server.entity.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SanPhamRepository extends JpaRepository<SanPham, Integer> {
}
