package com.example.server.service;

import com.example.server.entity.LoaiSanPham;
import com.example.server.entity.ThuongHieu;
import com.example.server.repository.LoaiSanPhamRepository;
import com.example.server.repository.ThuongHieuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoaiSanPhamService {
    private final LoaiSanPhamRepository loaiSanPhamRepository;
    @Autowired
    public LoaiSanPhamService(LoaiSanPhamRepository loaiSanPhamRepository) {
        this.loaiSanPhamRepository = loaiSanPhamRepository;
    }
    public List<LoaiSanPham> getAllLoaiSanPhams() {
        return loaiSanPhamRepository.findAll();
    }
}
