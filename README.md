# CRUD Todo App with authentication - Node.js, Express, MongoDB

# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition and run it
- `node server.js` to start the local server


# Code Overview

## Dependencies

- expressjs
- jsonwebtoken
- mongoose
- morgan
- bcrypt
- bcrypt.js
- body-parser
- cors
- dotenv


## Error Handling

In `backend/middleware`, a middleware was added as an error handler for Mongoose's validation errors. 

## Authentication

After a user is registered, a token will be given when they login. Requests are authenticated by adding `x-auth-token` with its token as a value in the header with a valid JWT.

It was my first time working with authentication. I used bcrypt to apply a salt and hash the passwords. 

## Database

It was also my first time working with a database, and I decided to use MongoDB for this application. The folder `models/` contains the schema definitions for the Mongoose models. The env file was put into gitignore to store the MongoDB database credentials in a more secure place. If you need to see this file, please let me know. 

## Routes

Users must be registered and logged in to edit or delete a task. Users may also search for and access tasks by id, username, or the status of completion. 

- Register new user
```sh
method: "POST"
url: "/api/register"
body: {
    "username": <String>,
    "password": <String>,
}
```

- User Login
```sh
method: "POST"
url: "/api/login"
body: {
    "username": <String>,
    "password": <String>
}
```

- Validate token
```sh
method: "POST"
url: "/api/tokenIsValid"
header: {
    key: x-auth-token,
    value: <token given at login>
}
```

- View all todo tasks: GET /api/todos
```sh
method: "GET"
url: "/api/todos"
```

- View tasks by username
```sh
method: "GET"
url: "/api/todos/username/:username"
```

- View tasks by id
```sh
method: "GET"
url: "/api/todos/:id"
```

- View tasks by status of completion
    - Completed tasks:
        ```sh
        method: "GET"
        url: "/api/todos/isCompleted/true"
        ```
    - Incompleted tasks:
        ```sh
        method: "GET"
        url: "/api/todos/isCompleted/false"
        ```

- Add/create a new task 
```sh
method: "POST"
url: "/api/todos/"
body: {
    "username": <String>,
    "task": <String>,
    "isCompleted": <Boolean>
}
```
- Edit/update a task by id: after getting token validated
```sh
method: "PUT"
url: "/api/todos/:id"
body: {
    "username": <String>,
    "task": <String>,
    "isCompleted": <Boolean>
}
```
- Edit/update task by username: after gettting token validated
```sh
method: "PUT"
url: "/api/todos/username/:username"
body: {
    "username": <String>,
    "task": <String>,
    "isCompleted": <Boolean>
}
```

- Delete a task: after getting token validated
```sh
method: "DELETE"
url: "/api/todos/:id"
```


# Other

I did attempt to incorporate GraphQL with a schema and resolver, but since MongoDB and authentication were both new to me already, I eventually took out GraphQL to ensure the rest of it was working.

Overall, as someone who was always more comfortable with the front-end, it felt good for me to learn more and practice working with the back-end through this exercise. I hope I didn't miss too many points with this! Thank you for reviewing. 

