CREATE DATABASE IF NOT EXISTS travel_db;
USE travel_db;

DROP TABLE flights;
CREATE TABLE IF NOT EXISTS flights (
  id INT AUTO_INCREMENT PRIMARY KEY,
  flightNo VARCHAR(50) NOT NULL UNIQUE,
  fromCity VARCHAR(100) NOT NULL,
  toCity VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

DROP TABLE hotels;
CREATE TABLE IF NOT EXISTS hotels (
  id INT AUTO_INCREMENT PRIMARY KEY,
  hotelName VARCHAR(100) NOT NULL UNIQUE,
  city VARCHAR(100) NOT NULL,
  rating DECIMAL(2,1) NOT NULL
);

INSERT INTO flights (flightNo, fromCity, toCity, price)
VALUES
  ('PS101', 'Kyiv', 'London', 120),
  ('PS102', 'Kyiv', 'London', 135)
ON DUPLICATE KEY UPDATE price = VALUES(price);

INSERT INTO hotels (hotelName, city, rating)
VALUES
  ('London Palace', 'London', 4.5),
  ('Kyiv Hotel X', 'Kyiv', 4.0)
ON DUPLICATE KEY UPDATE rating = VALUES(rating);