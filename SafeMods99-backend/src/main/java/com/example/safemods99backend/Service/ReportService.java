package com.example.safemods99backend.Service;

import com.example.safemods99backend.Model.Report;
import com.example.safemods99backend.Dto.ReportDto;
import com.example.safemods99backend.Repo.ReportRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ReportService {

    @Autowired
    ReportRepo reportRepo;

    @Autowired
    ModelMapper modelMapper;

    public String Hello()
    {
        return "Hello";
    }

    public String RepoSubmit(ReportDto reportDto)
    {
        reportRepo.save(modelMapper.map(reportDto, Report.class));
        return "ReportSubmit";

    }
}
