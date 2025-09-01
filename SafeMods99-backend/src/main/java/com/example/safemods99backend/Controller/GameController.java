package com.example.safemods99backend.Controller;

import com.example.safemods99backend.Dto.GameDto;
import com.example.safemods99backend.Service.GamerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/reg")
    public String reg(@RequestBody GameDto gameDto) {
        return gamerService.gameReg(gameDto);
    }
}
