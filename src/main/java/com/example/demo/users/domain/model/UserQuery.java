package com.example.demo.users.domain.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Getter
@Builder
public class UserQuery {
	private Long  id;
	private String username;
	private String firstname;
	private String lastname;
	private String email;
}