package com.example.demo.users.infraestructure;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.users.domain.model.UserQuery;
import com.example.demo.users.domain.repository.UserQueryRepository;
import com.example.demo.users.infraestructure.outboun.database.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserQueryRepositoryImpl implements UserQueryRepository {

	private final UserRepository userRepository;

	@Override
	public Optional<UserQuery> findById(Long id) {

		return userRepository.findById(id)
				.map(userEntity -> UserQuery.builder().username(userEntity.getUsername())
						.firstname(userEntity.getFirstname()).lastname(userEntity.getLastname())
						.email(userEntity.getEmail()).build());

	}

	@Override
	public Optional<UserQuery> searchBy(Map<String, String> params) {
		return Optional.empty();
	}

	@Override
	public List<UserQuery> findAllUsers() {
		return userRepository.findAll().stream()
				.map(userEntity -> UserQuery.builder().username(userEntity.getUsername())
						.firstname(userEntity.getFirstname()).lastname(userEntity.getLastname()).id(userEntity.getId())
						.email(userEntity.getEmail()).build())
				.toList();
	}

}
