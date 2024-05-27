package com.example.demo.users.application;

import org.springframework.stereotype.Service;

import com.example.demo.users.domain.model.UserCommand;
import com.example.demo.users.domain.repository.UserCommandRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserCreateUseCase {
	
	private final UserCommandRepository userCommandRepository;
	
	public void createUser(UserCommand userCommand) {
		
		// Validate userCommand
		if (userCommand.getUsername().isEmpty()) {
			throw new IllegalArgumentException("Username is required");
		}
		
		userCommandRepository.create(userCommand);
	}
}
