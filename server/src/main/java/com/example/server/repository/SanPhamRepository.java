package com.example.server.repository;

import com.example.server.entity.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SanPhamRepository extends JpaRepository<SanPham, String> {
}
