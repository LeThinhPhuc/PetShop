package com.example.server.service;

import com.example.server.dto.SanPhamDTO;
import com.example.server.dto.SignupDTO;
import com.example.server.entity.NguoiDung;
import com.example.server.entity.SanPham;
import com.example.server.repository.NguoiDungRepository;
import com.example.server.repository.VaiTroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class NguoiDungService {

    @Autowired
    private NguoiDungRepository userRepository;
    @Autowired
    private VaiTroRepository vaiTroRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public Optional<NguoiDung> findByNguoiDung(String nguoiDung) {
        return Optional.ofNullable(userRepository.findByTenNguoiDung(nguoiDung).orElse(null));
    }

    public boolean existsByTenNguoiDung(String tenNguoiDung) {
        return userRepository.existsByTenNguoiDung(tenNguoiDung);
    }

    @Transactional
    public NguoiDung createNguoiDung(SignupDTO dto) {
        NguoiDung nguoiDung = new NguoiDung();
        nguoiDung.setTenNguoiDung(dto.getTenNguoiDung());
        nguoiDung.setMatKhau(passwordEncoder.encode(dto.getMatKhau())); // Encode password
        nguoiDung.setHo(dto.getTenNguoiDung());
        nguoiDung.setTen(dto.getTenNguoiDung());
        nguoiDung.setNgaySinh(dto.getNgaySinh());
        nguoiDung.setEmail(dto.getEmail());
        nguoiDung.setNgayTao(LocalDateTime.now());
        nguoiDung.setVaiTro(vaiTroRepository.findById(dto.getMaVaiTro()).orElseThrow(() -> new IllegalArgumentException("Kích cỡ không tồn tại")));

        return userRepository.save(nguoiDung);
    }
}
