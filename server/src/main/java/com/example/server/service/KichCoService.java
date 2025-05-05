package com.example.server.service;

import com.example.server.entity.KichCo;
import com.example.server.entity.SanPham;
import com.example.server.repository.KichCoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KichCoService {
    private final KichCoRepository kichCoRepository;
    @Autowired
    public KichCoService(KichCoRepository kichCoRepository) {
        this.kichCoRepository = kichCoRepository;
    }
    public List<KichCo> getAllKichCos() {
        return kichCoRepository.findAll();
    }
}
