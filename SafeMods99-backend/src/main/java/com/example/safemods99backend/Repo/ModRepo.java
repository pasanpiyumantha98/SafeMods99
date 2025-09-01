package com.example.safemods99backend.Repo;

import com.example.safemods99backend.Model.Mod;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ModRepo extends MongoRepository<Mod, Integer> {
}
