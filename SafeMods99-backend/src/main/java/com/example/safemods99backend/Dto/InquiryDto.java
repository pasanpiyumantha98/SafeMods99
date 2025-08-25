package com.example.safemods99backend.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class InquiryDto {
    int id;

    String fname;
    String lname;
    String email;

    String subject;
    String msg;


}
