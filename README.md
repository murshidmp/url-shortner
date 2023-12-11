# Authenticated URL Shortener

A Nest.js project for authentication and URL shortening using MongoDB and JWT.

## AI-Assisted Development

This project benefits from the use of AI-assisted development tools, specifically ChatGPT, during the development process. ChatGPT has been employed to enhance development speed and code quality by providing assistance in writing and refining code snippets, offering insights into best practices, and aiding in problem-solving.

## Description

This project is a Nest.js application that provides authentication functionalities (signup and signin) and URL shortening capabilities. It uses MongoDB as the database and JWT (JSON Web Tokens) for user authentication. The application is structured into modules for easy maintenance and scalability.

## Features

- User signup and signin with email and password
- JWT-based authentication
- URL shortening with random string generation
- MongoDB as the database
- Prerequisites
- Ensure you have the following installed:
## Prerequisites
#### Ensure you have the following installed:
- Node.js (v14 or later)
- Yarn (as the package manager)
- MongoDB (running locally or accessible)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/murshidmp/url-shortner-nestjs.git
    ```

2. Change into the project directory:

    ```bash
    cd url-shortner-nestjs
    ```

3. Install dependencies using Yarn:

    ```bash
    yarn install
    ```

## Configuration

1. Create a `.env` file in the root of the project.

2. Add the MongoDB connection URL:

    ```env
    DATABASE_URL=mongodb://username:password@localhost:27017/your-database
    ```

3. Set the JWT secret key:

    ```env
    JWT_SECRET=your-secret-key
    ```

    ## Usage

1. Serve  **index.html** from **public** folder Manually

2. Start the application:

    ```bash
    yarn start:dev
    ```

3. The application will be accessible at `http://localhost:3000`.

## Endpoints

- **Authentication Module**
  - POST /auth/signup - User signup
  - POST /auth/signin - User signin

- **URL Module**
  - POST /url/shorten - Shorten a URL (protected by JWT)
  - GET /url/:short - Retrieve the original URL (protected by JWT)
