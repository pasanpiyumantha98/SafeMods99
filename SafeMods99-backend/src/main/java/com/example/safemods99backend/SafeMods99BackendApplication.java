package com.example.safemods99backend;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@SpringBootApplication
public class SafeMods99BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(SafeMods99BackendApplication.class, args);
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http

                .csrf(CsrfConfigurer::disable); // ✅ New way to disable CSRF in Spring Security 6.1+

        return http.build();
    }


}
