-- Ejercicio 4
-- 1. Crea una tabla llamada "Pedidos" con las columnas: "id" (entero, clave
-- primaria), "id_usuario" (entero, clave foránea de la tabla "Usuarios") y
-- "id_producto" (entero, clave foránea de la tabla "Productos").

CREATE TABLE pedidos (
id SERIAL PRIMARY KEY,
usuario_id INT,
producto_id INT,
CONSTRAINT fk_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
CONSTRAINT fk_producto FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- 2. Inserta al menos tres registros en la tabla "Pedidos" que relacionen usuarios con
-- productos.
-- Añado primero varios usuarios más a la tabla de usuarios para que sea un poco mas real xd

INSERT INTO usuarios (nombre, edad, ciudad_id)
VALUES ('Cristo', 60, 1), ('Eliecer', 33, 2);

-- ahora la query que piden

INSERT INTO pedidos (usuario_id, producto_id)
VALUES (3, 3), (4,3), (4, 1);


-- 3. Realiza una consulta que muestre los nombres de los usuarios y los nombres de
-- los productos que han comprado, incluidos aquellos que no han realizado
-- ningún pedido (utiliza LEFT JOIN y COALESCE).

SELECT usuarios.nombre AS nombre_usuario,
COALESCE (productos.nombre,'No compro nada') AS nombre_producto
FROM usuarios
LEFT JOIN pedidos on pedidos.usuario_id = usuarios.id
LEFT JOIN productos ON productos.id = pedidos.id;

-- 4. Realiza una consulta que muestre los nombres de los usuarios que han
-- realizado un pedido, pero también los que no han realizado ningún pedido
-- (utiliza LEFT JOIN).

-- Le pongo distinct para que no salgan los nombres duplicados por haber hecho más de un pedido, no se si era esto a lo que se refería este ejercicio...
SELECT DISTINCT
usuarios.nombre
FROM usuarios
LEFT JOIN pedidos ON pedidos.usuario_id = usuarios.id;


-- 5. Agrega una nueva columna llamada "cantidad" a la tabla "Pedidos" y actualiza
-- los registros existentes con un valor (utiliza ALTER TABLE y UPDATE)

ALTER TABLE pedidos
ADD COLUMN cantidad INT;

UPDATE pedidos
set cantidad = 1;