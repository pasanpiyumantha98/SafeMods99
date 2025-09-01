package com.example.safemods99backend.Controller;

import com.example.safemods99backend.Dto.InquiryDto;
import com.example.safemods99backend.Dto.ModDto;
import com.example.safemods99backend.Service.GamerService;
import com.example.safemods99backend.Service.ModService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/mod")
public class ModController {

    @Autowired
    ModService  modService;

    @PostMapping("/register")
    public String register(@RequestBody ModDto modDto) {

        return modService.reg(modDto);
    }

}

