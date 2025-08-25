package com.example.safemods99backend.Controller;

import com.example.safemods99backend.Dto.UserDto;
import com.example.safemods99backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/reg")
    public String Reg(@RequestBody UserDto userDto) {
        return userService.RegUser(userDto);
    }



}
