package com.example.demo.users.infraestructure.outboun.database;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.users.infraestructure.outboun.database.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long>{
	
}
