DROP DATABASE IF EXISTS todo_react;

CREATE DATABASE todo_react;

\c todo_react

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25) NOT NULL,
    pass_word VARCHAR(25) NOT NULL,
    users_name VARCHAR(25) NOT NULL
);

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    users_id INT REFERENCES users(id) ON DELETE CASCADE,
    body VARCHAR(150) NOT NULL,
    completed INT NOT NULL
);

INSERT INTO users (username, pass_word, users_name) VALUES 
    ('red', 'red', 'Red'),
    ('blue', 'blue', 'Blue'),
    ('green', 'green', 'Green')
;
\echo ======> USERS <======
SELECT * FROM users;

INSERT INTO todos (users_id, body, completed) VALUES 
    (1, 'My favorite color is red', 0),
    (1, 'I love red', 0),
    (2, 'My favorite color is blue', 0),
    (3, 'My favorite color is green', 0)
;
\echo ======> TODOS <======
SELECT * FROM todos;