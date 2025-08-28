package com.example.safemods99backend.Service;

import com.example.safemods99backend.Model.Inquiry;
import com.example.safemods99backend.Dto.InquiryDto;
import com.example.safemods99backend.Repo.InquiryRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class InquiryService {

    @Autowired
    InquiryRepo inquiryRepo;

    @Autowired
    ModelMapper modelMapper;

    public String Hello()
    {
        return "Hello";
    }


    public String InqSubmit(InquiryDto inquiryDto)
    {

        Inquiry maxInquiry = inquiryRepo.findTopByOrderByIdDesc();
        inquiryDto.setId(maxInquiry.getId()+1);
        inquiryRepo.save(modelMapper.map(inquiryDto,Inquiry.class));
        return "submitted";
    }


}
