package com.example.server.security;

import com.example.server.entity.NguoiDung;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.Optional;

@Component
public class JwtTokenProvider {

    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.expiration}")
    private long expirationInMs;

    public String generateToken(Optional<NguoiDung> user) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + expirationInMs);
        SecretKey key = Keys.hmacShaKeyFor(secretKey.getBytes()); // chuyển đổi chuỗi thành key

        return Jwts.builder()
                .setSubject(user.get().getTenNguoiDung())         // Đưa username làm subject
                .claim("id", user.get().getMaNguoiDung())                 // Thêm custom claim id
                .claim("roleId", user.get().getVaiTro().getMaVaiTro())         // Thêm custom claim roleId
                .claim("email", user.get().getEmail())     // Thêm custom claim fullname
                .setIssuedAt(now)            // Thời gian tạo token
                .setExpiration(expiryDate)   // Thời gian hết hạn
                .signWith(key, SignatureAlgorithm.HS512) // sử dụng key đã chuyển đổi
                .compact();
    }
}
