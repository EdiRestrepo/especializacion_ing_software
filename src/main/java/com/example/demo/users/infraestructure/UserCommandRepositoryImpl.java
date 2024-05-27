package com.example.demo.users.infraestructure;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.users.domain.model.UserCommand;
import com.example.demo.users.domain.repository.UserCommandRepository;
import com.example.demo.users.infraestructure.outboun.database.UserRepository;
import com.example.demo.users.infraestructure.outboun.database.entity.UserEntity;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserCommandRepositoryImpl implements UserCommandRepository{

	private final UserRepository userRepository;
	
	@Override
	public Optional<UserCommand> create(UserCommand userCommand) {
		UserEntity userEntity = UserEntity.builder().username(userCommand.getUsername())
				.password(userCommand.getPassword()).firstname(userCommand.getFirstname())
				.lastname(userCommand.getLastname()).email(userCommand.getEmail()).build();
		
		userRepository.save(userEntity);

		UserCommand userCommandResponse = UserCommand.builder().username(userEntity.getUsername())
				.password(userEntity.getPassword()).firstname(userEntity.getFirstname())
				.lastname(userEntity.getLastname()).email(userEntity.getEmail()).build();
		return Optional.of(userCommandResponse);
	}

	@Override
	public Optional<UserCommand> update(UserCommand userCommand) {
		UserEntity userEntity = UserEntity.builder().username(userCommand.getUsername())
				.password(userCommand.getPassword()).firstname(userCommand.getFirstname())
				.lastname(userCommand.getLastname()).email(userCommand.getEmail()).build();
		
		userRepository.save(userEntity);

		UserCommand userCommandResponse = UserCommand.builder().username(userEntity.getUsername())
				.password(userEntity.getPassword()).firstname(userEntity.getFirstname())
				.lastname(userEntity.getLastname()).email(userEntity.getEmail()).build();
		return Optional.of(userCommandResponse);
	}

}
