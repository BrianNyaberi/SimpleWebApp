# Google OAuth Authentication React.js and Node.js(No Passport)

## 1. Node.js + TypeScript + MongoDB: JWT Authentication

This code base implements Google OAuth Authentication with React.js and Node.js without using Passport.

We will also learn how to send JWT access and refresh tokens after the user has been authenticated.

![Node.js + TypeScript + MongoDB: JWT Authentication](https://codevoweb.com/wp-content/uploads/2022/04/Node.js-TypeScript-MongoDB-JWT-Authentication.webp)

### Topics Covered

- Setup Development Environment (Optional)
    - Download and Install Node.js
    - Download and Install Docker
    - Download and Install MongoDB Compass
- Node.js, Redis, MongoDB, Typegoose, Docker: JWT Authentication example
- JWT Authentication Flow with Redis, MongoDB, and Node.js
- Project Structure
- Project Setup
    - Initialize a Node.js Project with TypeScript
    - Install the Required Libraries
    - Initialize and Start the Express Server
    - Setting up Redis and MongoDB with Docker Compose
    - Connecting to the MongoDB Docker Container with Mongoose
    - Connecting to Redis Docker Container
- Creating the Database Schema with Typegoose
- How to Generate Private and Public keys for JWT Authentication
- Define Middleware to Sign and Verify JWTs
- Define a Custom Error Handler in Express
- Define the Zod Validation Schema
- Create a Middleware to Validate the User Inputs
- Create a Service to Communicate with the Database
- Create the Authentication Controller
- Create the User Controller to Test Authorization
- Define a function to deserialize the User
- Define a function to check if the user is logged in
- Define a Middleware to Restrict Unauthorized Access
- Create the Authentication Routes
- Update the app.ts file to use the route
- Testing the JWT Authentication Rest API
    - Register users
    - Login user
    - Get Currently Logged in User's Credentials
    - Admin Get All Users