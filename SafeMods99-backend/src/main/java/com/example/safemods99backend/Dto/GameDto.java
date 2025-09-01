package com.example.safemods99backend.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class GameDto {

    int id;

    String name;
    String genre;

    int releaseYear;
    int releaseMonth;
    int releaseDay;

    int rscore;
    int rs;

    String description;
    String metadescription;
}
