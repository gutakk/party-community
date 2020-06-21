CREATE EXTENSION pgcrypto;
CREATE EXTENSION "uuid-ossp";

CREATE TABLE users (
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    PRIMARY KEY(email)
);

CREATE TABLE parties (
    id TEXT NOT NULL DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    members INT NOT NULL DEFAULT 0,
    max_members INT NOT NULL,
    PRIMARY KEY(id)
);