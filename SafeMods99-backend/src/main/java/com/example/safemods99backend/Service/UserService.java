package com.example.safemods99backend.Service;


import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.PublicKey;

@Service
@Transactional
public class UserService {

    public String Hello()
    {
        return "Hello";
    }
}
