package com.example.safemods99backend.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ReportDto {

    int id;

    String fname;
    String Email;
    String ModName;
    String BaseGame;
    String ModVersion;
    String Issue;

}
