package com.example.server.repository;

import com.example.server.entity.LoaiSanPham;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoaiSanPhamRepository extends JpaRepository<LoaiSanPham, String> {
}
