package com.example.server.service;

import com.example.server.dto.CartItemDTO;
import com.example.server.dto.ItemDTO;
import com.example.server.entity.ChiTietHoaDon;
import com.example.server.entity.HoaDon;
import com.example.server.entity.NguoiDung;
import com.example.server.entity.SanPham;
import com.example.server.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class HoaDonService {
    private final HoaDonRepository hoaDonRepository;
    private final SanPhamRepository sanPhamRepository;
    private final NguoiDungRepository nguoiDungRepository;

    @Autowired
    public HoaDonService(HoaDonRepository hoaDonRepository, SanPhamRepository sanPhamRepository, NguoiDungRepository nguoiDungRepository) {
        this.hoaDonRepository = hoaDonRepository;
        this.sanPhamRepository = sanPhamRepository;
        this.nguoiDungRepository = nguoiDungRepository;
    }
    public List<ItemDTO> getGioHangByUserId(Integer userId) {
        NguoiDung nguoiDung = nguoiDungRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng"));

        HoaDon gioHang = hoaDonRepository.findByNguoiDungAndLoai(nguoiDung, 0)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy giỏ hàng"));

        return gioHang.getDanhSachChiTietHoaDon().stream()
                .map(cthd -> new ItemDTO(
                        cthd.getSanPham().getMaSanPham(),
                        cthd.getSanPham().getTenSanPham(),
                        cthd.getSanPham().getHinhAnh(),
                        cthd.getDonGia(),
                        cthd.getSoLuong()
                ))
                .collect(Collectors.toList());
    }

    public List<ItemDTO> getDonHangByUserId(Integer userId) {
        NguoiDung nguoiDung = nguoiDungRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng"));

        HoaDon gioHang = hoaDonRepository.findByNguoiDungAndLoai(nguoiDung, 1)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy đơn hàng"));

        return gioHang.getDanhSachChiTietHoaDon().stream()
                .map(cthd -> new ItemDTO(
                        cthd.getSanPham().getMaSanPham(),
                        cthd.getSanPham().getTenSanPham(),
                        cthd.getSanPham().getHinhAnh(),
                        cthd.getDonGia(),
                        cthd.getSoLuong()
                ))
                .collect(Collectors.toList());
    }



    // Create a new question
    @Transactional
    public HoaDon taoGioHang(CartItemDTO request) {
        NguoiDung nguoiDung = nguoiDungRepository.findById(Math.toIntExact(request.getMaNguoiDung()))
                .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng"));

        SanPham sp = sanPhamRepository.findById(Math.toIntExact(request.getMaSanPham()))
                .orElseThrow(() -> new RuntimeException("Không tìm thấy sản phẩm"));

        // Tìm giỏ hàng hiện tại (type = 0 là giỏ hàng)
        HoaDon gioHang = hoaDonRepository.findByNguoiDungAndLoai(nguoiDung, 0).orElse(null);

        if (gioHang == null) {
            gioHang = new HoaDon();
            gioHang.setNguoiDung(nguoiDung);
            gioHang.setLoai(0); // 0 = giỏ hàng
            gioHang.setDanhSachChiTietHoaDon(new ArrayList<>());
        }

        // Kiểm tra nếu sản phẩm đã tồn tại trong giỏ hàng
        Optional<ChiTietHoaDon> existing = gioHang.getDanhSachChiTietHoaDon().stream()
                .filter(ct -> ct.getSanPham().getMaSanPham().equals(sp.getMaSanPham()))
                .findFirst();

        if (existing.isPresent()) {
            ChiTietHoaDon chiTiet = existing.get();
            chiTiet.setSoLuong(chiTiet.getSoLuong() + request.getSoLuong());
        } else {
            ChiTietHoaDon chiTiet = new ChiTietHoaDon();
            chiTiet.setHoaDon(gioHang);
            chiTiet.setSanPham(sp);
            chiTiet.setSoLuong(request.getSoLuong());
            chiTiet.setDonGia(request.getDonGia());

            gioHang.getDanhSachChiTietHoaDon().add(chiTiet);
        }

        return hoaDonRepository.save(gioHang);
    }



}
