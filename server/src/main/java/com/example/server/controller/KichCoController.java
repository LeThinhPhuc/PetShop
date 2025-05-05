package com.example.server.controller;

import com.example.server.dto.SanPhamDTO;
import com.example.server.entity.KichCo;
import com.example.server.entity.Response;
import com.example.server.entity.SanPham;
import com.example.server.service.KichCoService;
import com.example.server.service.SanPhamService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/kichco")
public class KichCoController {
    private final KichCoService kichCoService;

    public KichCoController(KichCoService kichCoService) {
        this.kichCoService = kichCoService;
    }
    @GetMapping
    public ResponseEntity<List<KichCo>> getAllKichCos() {
        List<KichCo> kichCos = kichCoService.getAllKichCos();
        return ResponseEntity.ok(kichCos);
    }

}
