package com.example.safemods99backend.Service;


import com.example.safemods99backend.Dto.UserDto;
import com.example.safemods99backend.Model.User;
import com.example.safemods99backend.Repo.UserRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.PublicKey;

@Service
@Transactional
public class UserService {

    @Autowired
    UserRepo userRepo;

    @Autowired
    ModelMapper modelMapper;

    public String Hello()
    {
        return "Hello";
    }

    public String RegUser(UserDto userDto)
    {
        userRepo.save(modelMapper.map(userDto, User.class));

        return "Done";
    }
}
