package com.example.server.config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {
    @Bean
    public Cloudinary cloudinary() {
        return new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "dimwnid1k",
                "api_key", "732816623755515",
                "api_secret", "noI2tgbmNf31bFlf7zqmrdpw9oc"
        ));
    }
}
