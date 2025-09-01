package com.example.safemods99backend.Service;

import com.example.safemods99backend.Dto.ModDto;
import com.example.safemods99backend.Model.Mod;
import com.example.safemods99backend.Repo.ModRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class ModService {

    @Autowired
    ModRepo modRepo;

    @Autowired
    ModelMapper modelMapper;

    public String reg(ModDto modDto) {

        modRepo.save(modelMapper.map(modDto, Mod.class));
        return "success";
    }
}
