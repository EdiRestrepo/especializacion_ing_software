package com.example.demo.users.application;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.users.domain.model.UserQuery;
import com.example.demo.users.domain.repository.UserQueryRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserFindUseCase {
	private final UserQueryRepository userQueryRepository;
	
	public Optional<UserQuery> findUser(Long id) {
		return userQueryRepository.findById(id);
		
	}
	
	public List<UserQuery> findAllUsers() {
		return userQueryRepository.findAllUsers();
	}

}
