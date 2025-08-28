package com.example.safemods99backend.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ReportDto {

    Integer id;

    String fname;
    String mail;
    String modName;
    String baseGame;
    String issue;

}
