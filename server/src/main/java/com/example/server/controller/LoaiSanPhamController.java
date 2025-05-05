package com.example.server.controller;

import com.example.server.entity.LoaiSanPham;
import com.example.server.entity.ThuongHieu;
import com.example.server.service.LoaiSanPhamService;
import com.example.server.service.ThuongHieuService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/loaisanpham")
public class LoaiSanPhamController {
    private final LoaiSanPhamService loaiSanPhamService;

    public LoaiSanPhamController(LoaiSanPhamService loaiSanPhamService) {
        this.loaiSanPhamService = loaiSanPhamService;
    }
    @GetMapping
    public ResponseEntity<List<LoaiSanPham>> getAllLoaiSanPhams() {
        List<LoaiSanPham> loaiSanPhams = loaiSanPhamService.getAllLoaiSanPhams();
        return ResponseEntity.ok(loaiSanPhams);
    }

}
