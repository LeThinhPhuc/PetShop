package com.example.server.controller;

import com.example.server.dto.SanPhamDTO;
import com.example.server.entity.Response;
import com.example.server.entity.SanPham;
import com.example.server.service.SanPhamService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sanpham")
public class SanPhamController {
    private final SanPhamService sanPhamService;

    public SanPhamController(SanPhamService sanPhamService) {
        this.sanPhamService = sanPhamService;
    }
    @GetMapping
    public ResponseEntity<List<SanPham>> getAllSanPhams() {
        List<SanPham> sanPhams = sanPhamService.getAllSanPhams();
        return ResponseEntity.ok(sanPhams);
    }

    // Get a single question by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getSanPhamById(@PathVariable String id) {
        try {
            SanPham sanPham = sanPhamService.getSanPhamById(id);
            return ResponseEntity.ok(sanPham);
        } catch (Exception ex) {
            return (ResponseEntity<?>) ResponseEntity.status(500);
        }
    }

    // Create a new question
    @PostMapping
    public ResponseEntity<?> createSanPham(@RequestBody SanPhamDTO dto) {
        try {
            SanPham sanPham = sanPhamService.createSanPham(dto);
            return ResponseEntity.ok(sanPham);
        } catch (Exception ex) {
            return ResponseEntity.badRequest().body(Response.of(HttpStatus.BAD_REQUEST, ex.getMessage()));
        }
    }

    // Update a question
    @PutMapping("/{id}")
    public ResponseEntity<?> updateSanPham(@PathVariable String id, @RequestBody SanPham updatedProduct) {
        try {
            SanPham question = sanPhamService.updateSanPham(id, updatedProduct);
            return ResponseEntity.ok(question);
        } catch (Exception ex) {
            Response response = Response.of(HttpStatus.BAD_REQUEST, ex.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }

    // Delete a question
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSanPham(@PathVariable String id) {
        try {
            sanPhamService.deleteQuestion(id);
            return ResponseEntity.ok("Product deleted successfully");
        } catch (Exception ex) {
            Response response = Response.of(HttpStatus.NOT_FOUND, "Failed to delete product with ID: " + id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }
}
