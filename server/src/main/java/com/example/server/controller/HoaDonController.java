package com.example.server.controller;

import com.example.server.dto.CartItemDTO;
import com.example.server.entity.HoaDon;
import com.example.server.service.HoaDonService;
import com.example.server.service.SanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("hoadon")
public class HoaDonController {
    @Autowired
    private HoaDonService hoaDonService;
    public HoaDonController(HoaDonService hoaDonService) {
        this.hoaDonService = hoaDonService;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<HoaDon> getGioHang(@PathVariable Integer id) {
        HoaDon gioHang = hoaDonService.getGioHangByUserId(id);
        return ResponseEntity.ok(gioHang);
    }
    @PostMapping("/add")
    public ResponseEntity<HoaDon> themSanPhamVaoGio(@RequestBody CartItemDTO request) {
        HoaDon gioHang = hoaDonService.taoGioHang(request);
        return ResponseEntity.ok(gioHang);
    }
}
