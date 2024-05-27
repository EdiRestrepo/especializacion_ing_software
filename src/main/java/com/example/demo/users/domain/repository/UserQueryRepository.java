package com.example.demo.users.domain.repository;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.example.demo.users.domain.model.UserQuery;

public interface UserQueryRepository {
	    Optional<UserQuery> findById(Long id);
	    Optional<UserQuery> searchBy(Map<String, String> params);
	    List<UserQuery> findAllUsers();
}
