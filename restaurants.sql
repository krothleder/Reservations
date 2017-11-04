DROP DATABASE IF EXISTS restaurants_db;
CREATE DATABASE restaurants_db;
USE restaurants_db;

CREATE TABLE reservations(
	person_name VARCHAR (100),
	email VARCHAR (100),
	phone VARCHAR(20),
	unique_id VARCHAR(100),
	PRIMARY KEY(unique_id)
);
