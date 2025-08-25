package com.example.safemods99backend.Service;

import com.example.safemods99backend.Repo.InquiryRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class InquiryService {

    @Autowired
    InquiryRepo repo;

    @Autowired
    ModelMapper mapper;

    public String Hello()
    {
        return "Hello";
    }


}
