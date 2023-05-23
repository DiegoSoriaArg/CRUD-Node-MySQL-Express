CREATE DATABASE IF NOT EXISTS pruebaexpress;

USE pruebaexpress;

CREATE TABLE empleados (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salario INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE empleados;

INSERT INTO empleados VALUES
    (1, "joe", 1000),
    (2, "henrry", 1000),
    (3, "tom", 1000),
    (4, "yefry", 1000);

SELECT * FROM empleados;

DELETE FROM empleados WHERE id = 2;