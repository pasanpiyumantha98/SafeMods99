package com.example.safemods99backend.Controller;

import com.example.safemods99backend.Repo.UserRepo;
import com.example.safemods99backend.Service.InquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("api/inquiry")
public class InquiryController {

    @Autowired
    InquiryService inquiryService;

    @GetMapping("/hello")
    public String Hello() {
        return inquiryService.Hello();
    }
}
