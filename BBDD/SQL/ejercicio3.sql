-- jercicio 3
-- Ejercicios31. Crea una tabla llamada "Productos" con las columnas: "id" (entero, clave
-- primaria), "nombre" (texto) y "precio" (numérico).

CREATE TABLE productos (
id SERIAL PRIMARY KEY,
nombre TEXT NOT NULL,
precio INT
);

-- 2. Inserta al menos cinco registros en la tabla "Productos".

INSERT INTO productos (nombre, precio)
VALUES ('Red Bull', 1.50),
('Monster Energy', 2.31),
('Sprite', 1.20),
('Iced Coffee', 1.50),
('Black Iced Coffee', 1.50);


-- 3. Actualiza el precio de un producto en la tabla "Productos".

UPDATE productos
set precio = 1.29
where id = (SELECT id FROM productos where nombre = 'Iced Coffee');

-- 4. Elimina un producto de la tabla "Productos".

DELETE FROM productos
where id = (select id FROM productos where nombre = 'Black Iced Coffee');

-- 5. Realiza una consulta que muestre los nombres de los usuarios junto con los
-- nombres de los productos que han comprado (utiliza un INNER JOIN con la
-- tabla "Productos")
-- Primero hay que creaar la tabla para asociar las compras de productos a los usuarios

CREATE TABLE compras (
id SERIAL PRIMARY KEY,
usuario_id INT,
producto_id INT,
CONSTRAINT fk_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
CONSTRAINT fk_producto FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- luego la query 

SELECT usuarios.nombre AS nombre_usuario, productos.nombre AS nombre_producto
FROM usuarios
inner join compras on compras.id = usuarios.id
inner join productos on compras.id = productos.id;


