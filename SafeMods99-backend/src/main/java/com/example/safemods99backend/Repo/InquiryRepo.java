package com.example.safemods99backend.Repo;

import com.example.safemods99backend.Model.Inquiry;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InquiryRepo extends MongoRepository<Inquiry, Integer> {

    Inquiry findTopByOrderByIdDesc();

}
