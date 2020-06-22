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

CREATE TABLE party_joining (
    party_id TEXT NOT NULL REFERENCES parties(id),
    user_email TEXT NOT NULL REFERENCES users(email),
    PRIMARY KEY(party_id, user_email)
);

CREATE INDEX ON parties (name);