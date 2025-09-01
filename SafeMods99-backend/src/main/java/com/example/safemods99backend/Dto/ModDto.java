package com.example.safemods99backend.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ModDto {

    Integer id;
    String name;
    String creator;
    String description;
    String category;

    int rscore;
    int rcount;
    int downloads;
    String fileUrl;


    String metadescription;
}
