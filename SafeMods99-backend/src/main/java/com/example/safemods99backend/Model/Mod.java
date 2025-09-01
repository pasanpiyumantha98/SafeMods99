package com.example.safemods99backend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document(collection = "Mods")
public class Mod {

    @Id
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
