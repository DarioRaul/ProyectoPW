CREATE DATABASE proyecto; 

USE proyecto;

CREATE TABLE eventos (id_evento INT NOT NULL PRIMARY KEY,
 nombre_evento VARCHAR (50),
 fecha DATE,
 descripcion VARCHAR (50),
 hora VARCHAR (10),
 id_grupo INT NOT NULL, 
 FOREIGN KEY (id_grupo) REFERENCES grupos(id_grupo));
 


DESCRIBE usuarios;
DESCRIBE grupos;
DESCRIBE eventos;
DESCRIBE admin;
DESCRIBE alumnos; 
