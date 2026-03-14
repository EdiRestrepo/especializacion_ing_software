package com.example.demo.users.domain.model;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserCommand {
    private String username;
    private String password;
    private String firstname;
    private String lastname;
    private String email;
}