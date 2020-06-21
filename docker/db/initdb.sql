CREATE EXTENSION pgcrypto;

CREATE TABLE users (
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    PRIMARY KEY(email)
);