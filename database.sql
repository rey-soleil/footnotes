CREATE DATABASE footnotes;

CREATE TABLE footnote(
    id SERIAL PRIMARY KEY,
    description text
);

CREATE TABLE note(
    id SERIAL PRIMARY KEY,
    index integer,
    url text,
    description text,
    footnote_id integer REFERENCES footnote(id)
);