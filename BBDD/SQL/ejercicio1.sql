-- Ejercicio 1
-- 1. Crear una tabla llamada "Clientes" con las columnas: id (entero, clave primaria),
-- nombre (texto) y email (texto).
CREATE TABLE clientes (id SERIAL PRIMARY KEY,
nombre TEXT NOT NULL,
email TEXT NOT NULL);

-- 2. Insertar un nuevo cliente en la tabla "Clientes" con id=1, nombre="Juan" y
-- email="juan@example.com".

INSERT INTO clientes (nombre, email)
VALUES ('Jua', 'juan@example.com');

-- 3. Actualizar el email del cliente con id=1 a "juan@gmail.com".

UPDATE clientes 
SET email = 'juan@gmail.com'
WHERE clientes.id = 1; 

-- 4. Eliminar el cliente con id=1 de la tabla "Clientes".

DELETE FROM clientes
where id=2;

-- 5. Crear una tabla llamada "Pedidos" con las columnas: id (entero, clave primaria),
-- cliente_id (entero, clave externa referenciando a la tabla "Clientes"), producto
-- (texto) y cantidad (entero).

CREATE TABLE pedidos ( id SERIAL PRIMARY KEY,
cliente_id INTEGER NOT NULL,
producto TEXT NOT NULL,
cantidad INTEGER NOT NULL,
CONSTRAINT fk_cliente
	FOREIGN KEY (cliente_id) REFERENCES clientes(id));

-- 6. Insertar un nuevo pedido en la tabla "Pedidos" con id=1, cliente_id=1,
-- producto="Camiseta" y cantidad=2.

INSERT INTO pedidos (cliente_id, producto, cantidad)
VALUES (3, 'camiseta', 2);

-- Me está dando error porque me hicieron eliminar el 
-- cliente que creamos antes evidentemente, volví a insertarlo para poder continuar.
-- viene con otro id distinto en este caso el 3.

-- 7. Actualizar la cantidad del pedido con id=1 a 3.
UPDATE pedidos
set cantidad = 3
where id = 4 -- En mi tabla tiene este id. no el 1
;

-- 8. Eliminar el pedido con id=1 de la tabla "Pedidos".


DELETE FROM pedidos
where id = 4; -- En mi caso no tiene id 1 tiene id 4
-- no lo voy a ejecutar 

-- 9. Crear una tabla llamada "Productos" con las columnas: id (entero, clave
-- primaria), nombre (texto) y precio (decimal).

CREATE TABLE productos (id SERIAL PRIMARY KEY,
nombre TEXT NOT NULL,
precio DECIMAL(20, 2) NOT NULL);


-- 10. Insertar varios productos en la tabla "Productos" con diferentes valores.

INSERT INTO productos (nombre, precio)
VALUES 
('chucheria', 0.5),
('chocolatinas', 1.95),
('papas_fritas', 0.95),
('helados', 2.50),
('game_key_5', 5.00 ),
('game_key_10', 10.00),
('game_key_50', 50.00),
('monster_energy', 1.80);

-- 11. Consultar todos los clientes de la tabla "Clientes".
select * from clientes;

-- 12. Consultar todos los pedidos de la tabla "Pedidos" junto con los nombres de los
-- clientes correspondientes.

select pedidos.*, clientes.nombre AS nombre_cliente from pedidos
INNER JOIN clientes on cliente_id = clientes.id;

-- 13. Consultar los productos de la tabla "Productos" cuyo precio sea mayor a $50.

select * from productos
where precio > 50;

-- 14. Consultar los pedidos de la tabla "Pedidos" que tengan una cantidad mayor o
-- igual a 5.

select * from pedidos
where cantidad >= 5;

-- 15. Consultar los clientes de la tabla "Clientes" cuyo nombre empiece con la letra
-- "A".

select * from clientes
where nombre like 'A%';

-- Ejercicios216. Realizar una consulta que muestre el nombre del cliente y el total de pedidos
-- realizados por cada cliente.

SELECT clientes.nombre, COUNT(pedidos.id) AS total_pedidos 
FROM clientes
LEFT JOIN pedidos on clientes.id=pedidos.cliente_id
group by clientes.id;


-- 17. Realizar una consulta que muestre el nombre del producto y la cantidad total de
-- pedidos de ese producto.

SELECT
producto, SUM(cantidad) AS cantidad_total
FROM pedidos
group by producto;

-- 18. Agregar una columna llamada "fecha" a la tabla "Pedidos" de tipo fecha.

ALTER TABLE pedidos
ADD COLUMN fecha DATE;

-- 19. Agregar una clave externa a la tabla "Pedidos" que haga referencia a la tabla
-- "Productos" en la columna "producto".
CREATE UNIQUE INDEX idx_productos_nombre ON productos (nombre);

UPDATE pedidos
set producto = 'helados'
where id = 4;

ALTER TABLE pedidos
ADD CONSTRAINT fk_producto
FOREIGN KEY (producto) REFERENCES productos(nombre);

-- tuve que añadir una restricción unica para poder alterar la tabla
-- y poder hacer una foreign key.
-- como camiseta no coincidía con ninguno de los productos en la tabla 
-- no me dejaba crear la foreign key asi que modifiqué el producto en
-- la tabla de pedidos para que coincidiera con uno de los productos
-- de la tienda

-- 20. Realizar una consulta que muestre los nombres de los clientes, los nombres de
-- los productos y las cantidades de los pedidos donde coincida la clave externa.

SELECT 
clientes.nombre as nombre_cliente, productos.nombre, pedidos.cantidad
from pedidos
INNER JOIN clientes on pedidos.cliente_id = clientes.id
INNER JOIN productos on pedidos.producto = productos.nombre;