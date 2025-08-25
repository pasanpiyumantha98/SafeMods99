package com.example.safemods99backend.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.safemods99backend.Model.User;

public interface UserRepo extends MongoRepository<User, Integer> {


}
