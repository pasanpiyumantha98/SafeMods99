package com.example.safemods99backend.Repo;

import com.example.safemods99backend.Model.Game;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GameRepo extends MongoRepository<Game, Integer> {
}
