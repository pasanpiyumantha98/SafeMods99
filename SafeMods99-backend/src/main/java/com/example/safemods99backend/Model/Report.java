package com.example.safemods99backend.Model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document(collection = "Reports")
public class Report {

    @Id
    Integer id;

    String fname;
    String mail;
    String modName;
    String baseGame;
    String modVersion;
    String issue;
}
