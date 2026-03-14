package com.example.demo.users.domain.repository;

import java.util.Optional;

import com.example.demo.users.domain.model.UserCommand;

public interface UserCommandRepository {
	Optional<UserCommand> create(UserCommand userCommand);
	Optional<UserCommand> update(UserCommand userCommand);

}
