package com.example.safemods99backend.Controller;

import com.example.safemods99backend.Service.GamerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("api/games")
public class GameController {

    @Autowired
    GamerService gamerService;

    @GetMapping("/hello")
    public String hello()
    {
        return gamerService.hello();
    }
}
