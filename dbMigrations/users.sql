CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    pass VARCHAR(255) NOT NULL
);
INSERT INTO users (name, pass) VALUES ('john_doe', '123');
