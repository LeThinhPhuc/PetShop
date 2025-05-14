package com.example.server.service;

import com.example.server.entity.NguoiDung;
import com.example.server.entity.VaiTro;
import com.example.server.repository.NguoiDungRepository;
import com.example.server.repository.VaiTroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private NguoiDungRepository userRepository;

    @Autowired
    private VaiTroRepository roleRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        NguoiDung user = userRepository.findByTenNguoiDung(username).orElse(null);
        System.out.println("User loaded : "+user);
        if (user != null) {
            VaiTro role = roleRepository.findById(user.getVaiTro().getMaVaiTro()).orElse(null);
            System.out.println("role loaded : "+role.getTenVaiTro());
            if (role != null) {
                System.out.println("ten vai tro loaded : "+"role_"+role.getTenVaiTro());
                List<GrantedAuthority> authorities = Collections.singletonList(
                        new SimpleGrantedAuthority("ROLE_" + role.getTenVaiTro().toUpperCase())  // Thêm prefix ở đây
                );
                return new org.springframework.security.core.userdetails.User(
                        user.getTenNguoiDung(),
                        user.getMatKhau(),
                        authorities
                );
            }
        }
        throw new UsernameNotFoundException("Not found");
    }

}
