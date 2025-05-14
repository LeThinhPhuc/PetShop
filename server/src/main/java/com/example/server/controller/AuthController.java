package com.example.server.controller;

import com.example.server.dto.LoginRequestDto;
import com.example.server.dto.LoginResponseDto;
import com.example.server.dto.SignupDTO;
import com.example.server.entity.NguoiDung;
import com.example.server.security.JwtTokenProvider;
import com.example.server.service.NguoiDungService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/public")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private NguoiDungService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDto loginRequestDto) {
        // Thực hiện authenticate với Spring Security
        try {
            // Quăng lỗi nếu username/password sai
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequestDto.getTenNguoiDung(),
                            loginRequestDto.getMatKhau()
                    )
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            // Tìm user để lấy thêm thông tin, tuỳ bạn
            Optional<NguoiDung> user = userService.findByNguoiDung(loginRequestDto.getTenNguoiDung());

            // Tạo token
            String token = tokenProvider.generateToken(user);
            System.out.println("user : "+user);
            // Return cho client
            return ResponseEntity.ok(new LoginResponseDto(token, user.get().getMaNguoiDung(), user.get().getTenNguoiDung(), user.get().getVaiTro().getMaVaiTro(), 3600));

        } catch (BadCredentialsException e) {
            return ResponseEntity
                    .status(401)
                    .body(new LoginResponseDto(null, null, null, null, null));
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupDTO signupRequestDto) {
        // Kiểm tra username đã tồn tại chưa
        if (userService.existsByTenNguoiDung(signupRequestDto.getTenNguoiDung())) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Tên đăng nhập đã tồn tại");
        }

        try {
            userService.createNguoiDung(signupRequestDto);
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body("Tạo tài khoản thành công");
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Lỗi khi tạo tài khoản: " + e.getMessage());
        }
    }


}
