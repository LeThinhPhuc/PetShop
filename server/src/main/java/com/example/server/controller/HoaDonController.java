package com.example.server.controller;

import com.example.server.dto.CartItemDTO;
import com.example.server.dto.ItemDTO;
import com.example.server.entity.HoaDon;
import com.example.server.service.HoaDonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hoadon")
public class HoaDonController {
    @Autowired
    private HoaDonService hoaDonService;
    public HoaDonController(HoaDonService hoaDonService) {
        this.hoaDonService = hoaDonService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<ItemDTO>> getGioHang(@PathVariable Integer id) {
        List<ItemDTO> gioHang = hoaDonService.getGioHangByUserId(id);
        return ResponseEntity.ok(gioHang);
    }
    @GetMapping("/donhang/{id}")
    public ResponseEntity<List<ItemDTO>> getDonHang(@PathVariable Integer id) {
        List<ItemDTO> donHang = hoaDonService.getDonHangByUserId(id);
        return ResponseEntity.ok(donHang);
    }
    @PostMapping("/add")
    public ResponseEntity<HoaDon> themSanPhamVaoGio(@RequestBody CartItemDTO request) {
        HoaDon gioHang = hoaDonService.taoGioHang(request);
        return ResponseEntity.ok(gioHang);
    }
}
