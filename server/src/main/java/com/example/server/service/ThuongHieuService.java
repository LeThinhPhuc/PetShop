package com.example.server.service;

import com.example.server.entity.KichCo;
import com.example.server.entity.ThuongHieu;
import com.example.server.repository.ThuongHieuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThuongHieuService {
    private final ThuongHieuRepository thuongHieuRepository;
    @Autowired
    public ThuongHieuService(ThuongHieuRepository thuongHieuRepository) {
        this.thuongHieuRepository = thuongHieuRepository;
    }
    public List<ThuongHieu> getAllThuongHieus() {
        return thuongHieuRepository.findAll();
    }
}
