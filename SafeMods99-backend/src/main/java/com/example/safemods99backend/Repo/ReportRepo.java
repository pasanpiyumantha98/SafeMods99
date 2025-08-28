package com.example.safemods99backend.Repo;


import com.example.safemods99backend.Model.Report;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ReportRepo extends MongoRepository<Report, Integer> {

    Report findTopByOrderByIdDesc();
}
