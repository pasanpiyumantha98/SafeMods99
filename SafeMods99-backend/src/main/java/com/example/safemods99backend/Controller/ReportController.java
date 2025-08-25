package com.example.safemods99backend.Controller;

import com.example.safemods99backend.Dto.ReportDto;
import com.example.safemods99backend.Service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/reports")
public class ReportController {

    @Autowired
    ReportService reportService;

    @GetMapping("/hello")
    public String Hello()
    {
        return reportService.Hello();

    }

    @PostMapping("/submit")
    public String RepoSubmit(@RequestBody ReportDto reportDto)
    {
        return reportService.RepoSubmit(reportDto);
    }


}
