package com.example.server.controller;

import com.example.server.entity.KichCo;
import com.example.server.entity.ThuongHieu;
import com.example.server.service.KichCoService;
import com.example.server.service.ThuongHieuService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/thuonghieu")
public class ThuongHieuController {
    private final ThuongHieuService thuongHieuService;

    public ThuongHieuController(ThuongHieuService thuongHieuService) {
        this.thuongHieuService = thuongHieuService;
    }
    @GetMapping
    public ResponseEntity<List<ThuongHieu>> getAllThuongHieus() {
        List<ThuongHieu> thuongHieus = thuongHieuService.getAllThuongHieus();
        return ResponseEntity.ok(thuongHieus);
    }

}
