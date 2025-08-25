package com.example.safemods99backend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document(collection = "Inquiries")
public class Inquiry {

    @Id
    Integer id;

    String fname;
    String lname;
    String email;

    String subject;
    String msg;

}
