# Hexagonal Architecture Example with Spring Boot, Lombok, and JPA

This repository contains an example of a Spring Boot application following the principles of hexagonal architecture, utilizing Lombok for boilerplate code reduction and JPA for persistence.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project demonstrates how to implement a clean architecture style, specifically hexagonal architecture (also known as Ports and Adapters), in a Spring Boot application. The application uses Lombok to reduce boilerplate code and JPA for database interactions.

## Technologies Used

- Spring Boot
- Spring Data JPA
- Lombok
- H2 Database (for testing purposes)
- Maven

## Architecture Overview

Hexagonal architecture aims to decouple the core business logic from external systems, making the application more maintainable and testable. The architecture is divided into three main layers:

1. **Domain Layer:** Contains the core business logic and domain entities.
2. **Application Layer:** Contains use cases and orchestrates the application's workflow.
3. **Infrastructure Layer:** Contains implementations of external systems like databases, web frameworks, etc.

## Project Structure
´´´ 
demo
└── src
└── main
└── java
└── com
└── example
└── demo
├── users
│ ├── application
│ ├── domain
│ │ ├── model
│ │ └── repository
│ ├── infrastructure
│ │ ├── inbound
│ │ └── outbound
│ │ ├── database
│ │ │ └── entity
´´´ 

### Domain Layer

**Package:** `com.example.demo.users.domain.model`

Contains core business models/entities.

- `UserCommand.java`: Represents commands or operations that change the state of a user.
- `UserQuery.java`: Represents queries or operations that retrieve user data.

**Package:** `com.example.demo.users.domain.repository`

Contains repository interfaces for the domain.

- `UserCommandRepository.java`: Interface for commands related to user operations.
- `UserQueryRepository.java`: Interface for queries related to user operations.

### Application Layer

**Package:** `com.example.demo.users.application`

Contains the use cases which define the application-specific business rules.

- `UserCreateUseCase.java`: Use case for creating users.
- `UserFindUseCase.java`: Use case for finding users.

### Infrastructure Layer

**Package:** `com.example.demo.users.infrastructure`

Contains implementations of the domain repositories and other technical details.

- `UserCommandRepositoryImpl.java`: Implementation of `UserCommandRepository`.
- `UserQueryRepositoryImpl.java`: Implementation of `UserQueryRepository`.

**Package:** `com.example.demo.users.infrastructure.inbound.controllers`

Contains controllers for handling HTTP requests.

- `UserController.java`: REST controller for user operations.

**Package:** `com.example.demo.users.infrastructure.outbound.database`

Contains the database-related implementations.

- `UserRepository.java`: JPA repository interface extending Spring Data JPA.
- `entity/UserEntity.java`: JPA entity representing the User table.

### Getting Started

To get started with this project, clone the repository and import it into your preferred IDE.

```bash
git clone https://github.com/yourusername/hexagonal-architecture-example.git
cd hexagonal-architecture-example