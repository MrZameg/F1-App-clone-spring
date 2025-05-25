package com.clone_App_F1.model;

@Entity
@Data // Lombok
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String team;
    private int championships;
    // TODO identify extra fields or extra info that i want to show
}