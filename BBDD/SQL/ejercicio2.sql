-- Ejercicio 2
-- 1. Crea una base de datos llamada "MiBaseDeDatos".
-- Adjunto captura la creé de manera visuaal.


-- 2. Crea una tabla llamada "Usuarios" con las columnas: "id" (entero, clave
-- primaria), "nombre" (texto) y "edad" (entero).

CREATE TABLE Usuarios (
id SERIAL PRIMARY KEY,
nombre TEXT not null,
edad INT
);

-- 3. Inserta dos registros en la tabla "Usuarios".

INSERT INTO usuarios (nombre, edad)
VALUES ('Abimael', 31),
('Paula', 28);


-- 4. Actualiza la edad de un usuario en la tabla "Usuarios".

UPDATE usuarios 
set edad = 29
where id = (SELECT u.id FROM usuarios u where u.nombre = 'Paula');

-- 5. Elimina un usuario de la tabla "Usuarios".

DELETE FROM usuarios
WHERE id = 1;

-- Nivel de dificultad: Moderado
-- 1. Crea una tabla llamada "Ciudades" con las columnas: "id" (entero, clave
-- primaria), "nombre" (texto) y "pais" (texto).


CREATE TABLE ciudades (
id SERIAL PRIMARY KEY,
nombre TEXT NOT NULL,
pais TEXT NOT NULL
);


-- 2. Inserta al menos tres registros en la tabla "Ciudades".


INSERT INTO ciudades (nombre, pais)
VALUES ('Santa Cruz de Tenerife', 'Spain'),
('London', 'United Kingdom'),
('Paris','France');

-- 3. Crea una foreign key en la tabla "Usuarios" que se relacione con la columna "id"
-- de la tabla "Ciudades".


ALTER TABLE usuarios
ADD COLUMN ciudad_id INT,
ADD CONSTRAINT fk_ciudad FOREIGN KEY (ciudad_id) REFERENCES ciudades(id);


-- 4. Realiza una consulta que muestre los nombres de los usuarios junto con el
-- nombre de su ciudad y país (utiliza un LEFT JOIN).
SELECT usuarios.nombre, ciudades.nombre, ciudades.pais FROM usuarios
LEFT JOIN ciudades on usuarios.ciudad_id = ciudades.id

-- 5. Realiza una consulta que muestre solo los usuarios que tienen una ciudad
-- asociada (utiliza un INNER JOIN).

SELECT usuarios.nombre, ciudades.nombre, ciudades.pais  FROM usuarios
JOIN ciudades on usuarios.ciudad_id = ciudades.id;