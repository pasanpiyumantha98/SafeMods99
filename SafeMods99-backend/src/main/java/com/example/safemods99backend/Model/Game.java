package com.example.safemods99backend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document(collection = "Games")
public class Game {

    @Id
    Integer id;

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
