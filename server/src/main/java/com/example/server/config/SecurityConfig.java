package com.example.server.config;


import com.example.server.handlers.CustomAccessDeniedHandler;
import com.example.server.security.JwtAuthenticationEntryPoint;
import com.example.server.security.JwtAuthenticationFilter;
import com.example.server.service.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final CustomUserDetailsService customUserDetailsService;

    public SecurityConfig(JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint,
                          JwtAuthenticationFilter jwtAuthenticationFilter,
                          CustomUserDetailsService customUserDetailsService) {
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
        this.customUserDetailsService = customUserDetailsService;
    }

    @Autowired
    private CustomAccessDeniedHandler accessDeniedHandler;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // Có thể cấu hình tùy ý
        http
                .cors(Customizer.withDefaults())
                .csrf(csrf -> csrf.disable()) // Tắt CSRF nếu bạn dùng token
                .authorizeHttpRequests(auth -> auth
                        // Nguyên tắc: "specific to general" (từ cụ thể đến tổng quát)
                        // Chỉ user có ROLE_1 được phép vào /api/delete/**
                        //.requestMatchers("/sanpham").authenticated()
                       // .requestMatchers("/sanpham/**").hasAnyRole("ADMIN")
                        // Chỉ user có ROLE_1 hoặc ROLE_2 được phép vào /admin/** & /api/**
                      //  .requestMatchers("/admin/**", "/api/**").hasAnyRole("ADMIN","MANAGER","SALE")
                        // /product thì cần xác thực (authen) là đủ, không phân biệt quyền
                        // Mọi request còn lại cho phép tự do
                        .anyRequest().permitAll()
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .exceptionHandling(ex -> ex
                        .authenticationEntryPoint(jwtAuthenticationEntryPoint)  // Xử lý lỗi xác thực (chưa đăng nhập, token không hợp lệ)
                        .accessDeniedHandler(accessDeniedHandler)  // Chuyển hướng khi người dùng không có quyền truy cập
                )
                .logout(logout -> logout
                        .logoutUrl("/public/logout") // Đặt URL cho logout
                        .clearAuthentication(true) // Xóa authentication trong SecurityContext
                        .invalidateHttpSession(true) // Hủy session
                        .deleteCookies("jwt") // Xóa cookie jwt
                        .logoutSuccessUrl("/login") // Chuyển hướng tới trang login sau khi logout
                );

        // Thêm filter JWT
        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    // Cần bean này để handle authenticate username/password:
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
