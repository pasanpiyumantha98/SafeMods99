package com.example.safemods99backend.Controller;

import com.example.safemods99backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("api/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/hello")
    public String Hello() {
        return userService.Hello();
    }



}
