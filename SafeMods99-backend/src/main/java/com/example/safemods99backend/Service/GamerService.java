package com.example.safemods99backend.Service;

import com.example.safemods99backend.Dto.GameDto;
import com.example.safemods99backend.Model.Game;
import com.example.safemods99backend.Repo.GameRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class GamerService {

    @Autowired
    GameRepo gameRepo;

    @Autowired
    ModelMapper modelMapper;

    public String hello ()
    {
        return "hello";
    }

    public String gameReg(GameDto gameDto) {
        gameRepo.save(modelMapper.map(gameDto, Game.class));
        return "submitted";
    }


}
