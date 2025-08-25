package com.example.safemods99backend.Controller;

import com.example.safemods99backend.Dto.InquiryDto;
import com.example.safemods99backend.Repo.UserRepo;
import com.example.safemods99backend.Service.InquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/submit")
    public String Submit(@RequestBody InquiryDto inquiryDto) {

            return inquiryService.InqSubmit(inquiryDto);
        }

}
