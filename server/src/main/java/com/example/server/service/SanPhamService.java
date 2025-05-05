package com.example.server.service;

import com.example.server.dto.SanPhamDTO;
import com.example.server.entity.SanPham;
import com.example.server.repository.KichCoRepository;
import com.example.server.repository.LoaiSanPhamRepository;
import com.example.server.repository.SanPhamRepository;
import com.example.server.repository.ThuongHieuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
@Service
public class SanPhamService {
    private final SanPhamRepository sanPhamRepository;
    private final LoaiSanPhamRepository loaiSanPhamRepository;
    private final ThuongHieuRepository thuongHieuRepository;
    private final KichCoRepository kichCoRepository;

    @Autowired
    public SanPhamService(SanPhamRepository sanPhamRepository, LoaiSanPhamRepository loaiSanPhamRepository, ThuongHieuRepository thuongHieuRepository, KichCoRepository kichCoRepository) {
        this.sanPhamRepository = sanPhamRepository;
        this.loaiSanPhamRepository = loaiSanPhamRepository;
        this.thuongHieuRepository = thuongHieuRepository;
        this.kichCoRepository = kichCoRepository;
    }
    private SanPham findSanPhamById(String id) {
        return sanPhamRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Question not found with ID: " + id));
    }

    // Retrieve all questions
    public List<SanPham> getAllSanPhams() {
        return sanPhamRepository.findAll();
    }

    // Retrieve a question by ID
    public SanPham getSanPhamById(String id) {
        return findSanPhamById(id);
    }

    // Create a new question
    @Transactional
    public SanPham createSanPham(SanPhamDTO dto) {
        SanPham sanPham = new SanPham();
        sanPham.setTenSanPham(dto.getTenSanPham());
        sanPham.setMoTa(dto.getMoTa());
        sanPham.setTonKho(dto.getTonKho());
        sanPham.setHinhAnh(dto.getHinhAnh());
        sanPham.setNgayTao(LocalDateTime.now());

        sanPham.setLoaiSanPham(loaiSanPhamRepository.findById(String.valueOf(dto.getMaLoaiSanPham()))
                .orElseThrow(() -> new IllegalArgumentException("Loại sản phẩm không tồn tại")));

        sanPham.setKichCo(kichCoRepository.findById(String.valueOf(dto.getMaKichCo()))
                .orElseThrow(() -> new IllegalArgumentException("Kích cỡ không tồn tại")));

        sanPham.setThuongHieu(thuongHieuRepository.findById(String.valueOf(dto.getMaThuongHieu()))
                .orElseThrow(() -> new IllegalArgumentException("Thương hiệu không tồn tại")));

        return sanPhamRepository.save(sanPham);
    }


    // Update a question
    @Transactional
    public SanPham updateSanPham(String id, SanPham updatedSanPham) {
        SanPham question = findSanPhamById(id);

        if (updatedSanPham.getLoaiSanPham() != null) {
            question.setLoaiSanPham(updatedSanPham.getLoaiSanPham());
        }
        if (updatedSanPham.getThuongHieu() != null) {
            question.setThuongHieu(updatedSanPham.getThuongHieu());
        }
        if (updatedSanPham.getTonKho() != null) {
            question.setTonKho(updatedSanPham.getTonKho());
        }
        if (updatedSanPham.getKichCo() != null) {
            question.setKichCo(updatedSanPham.getKichCo());
        }
        if (updatedSanPham.getMoTa() != null) {
            question.setMoTa(updatedSanPham.getMoTa());
        }
        if (updatedSanPham.getHinhAnh() != null) {
            question.setHinhAnh(updatedSanPham.getHinhAnh());
        }

        return sanPhamRepository.save(question);
    }

    // Delete a question
    @Transactional
    public void deleteQuestion(String id) {
        // Finally, delete the question itself
        sanPhamRepository.deleteById(id);
    }
}
