package com.example.demo.users.infraestructure.inbound.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.users.application.UserCreateUseCase;
import com.example.demo.users.application.UserFindUseCase;
import com.example.demo.users.domain.model.UserCommand;
import com.example.demo.users.domain.model.UserQuery;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
	private final UserCreateUseCase userCreateUseCase;
	private final UserFindUseCase userFindUseCase;

	@GetMapping
	public List<UserQuery> findAllUsers() {
		return userFindUseCase.findAllUsers();
	}
	
	@GetMapping("/{id}")
	public UserQuery findUser(Long id) {
		return userFindUseCase.findUser(id).orElseThrow();
	}
	
	@PostMapping
	public void createUser(@RequestBody UserCommand userCommand) {
		userCreateUseCase.createUser(userCommand);
	}
	
}
