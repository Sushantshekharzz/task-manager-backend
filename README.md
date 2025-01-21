# Node.js Task Manager API

## Description

This is the backend API for the Task Manager application built with Node.js and Express. It supports CRUD operations for task management, including user authentication using JWT.

## Deployed API

You can access the live API here: [Visit the Deployed API](https://task-manager-backend-7nni.onrender.com)

## Technologies Used
- Node.js
- Express.js
- PostgreSQL (or your chosen database)
- JWT for Authentication
- dotenv for environment variables

## Setup Instructions

### Prerequisites

1. Node.js and npm (Node Package Manager) installed.
2. PostgreSQL (or your chosen database) set up and running.

### Steps to Set Up Locally

1. Clone the repository:

    ```bash
    git clone https://github.com/Sushantshekharzz/task-manager-backend.git  
    ```

2. Navigate to the project directory:

    ```bash
    cd task-manager-backend
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables by creating a `.env` file in the root directory. Example:

    ```
    HOST=localhost
    DB_USER=your-db-user
    PASSWORD=your-db-password
    DB=your-db-name
    secret_key=your-jwt-secret
    ```

5. Run database migrations :

    ```bash
    npx sequelize-cli db:migrate
    ```

6. Start the server:

    ```bash
    npm start
    ```

   The API will be available at `http://localhost:4000`

## API Endpoints

### 1. **User Sign-Up**
- **POST** `/signup`
- **Description**: Registers a new user by checking if the username already exists and hashing the password before storing the user information.

#### Request Body:
```json
{
  "userName": "your-username",
  "passWord": "your-password",
  "role": "user-role",
  "name": "user-name"
}
```
#### Response (Success):
```json
{
   "message": "User Created successfully"
}
```
#### Response (Failure):
- User Already Exists:
```json
{
  "message": "User already exists. Please choose a different email or username."
}
```

- Server Error:
```json
{ 
    "message": "Internal server error." 
}
```



### 2. **User Sign-In**
- **POST** `/signin`
- **Description**: Authenticates a user and returns a JWT token upon successful login.
  
#### Request Body:
```json
{
  "userName": "your-username",
  "passWord": "your-password"
}
```
#### Response (Success):
```json
{
  "message": "Successfully Login",
  "token": "jwt-token-here",
  "role": "user-role",
  "name": "user-name"
}
```
#### Response (Failure):
- User Not Found:
```json
{ 
    "message": "User not found" 
}
```

- Unauthorized:
```json
{ 
    "message": "Unauthorized User" 
}
```
- Server Error:
```json
{ 
    "message": "Internal server error." 
}
```

**Authentication**: Use the JWT token in the Authorization header for subsequent requests:
`Authorization: Bearer <jwt-token>`

## Running Tests

You can run the tests for the application using:

```bash
npm test
