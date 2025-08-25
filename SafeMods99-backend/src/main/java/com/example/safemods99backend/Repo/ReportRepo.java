package com.example.safemods99backend.Repo;

import com.example.safemods99backend.Dto.ReportDto;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReportRepo extends MongoRepository<ReportDto, Integer> {

}
