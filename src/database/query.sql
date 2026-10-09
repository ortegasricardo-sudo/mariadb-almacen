-- MariaDB
create database almacen;
use almacen;

create table clientes (
    id int not null auto_increment primary key,
    nombre varchar(50)
);

create table pedidos (
    cliente_id int not null primary key,
    producto varchar(50)
);

insert into clientes(nombre) values
('Ana'),
('Luis'),
('Sofia'),
('Pedro');

select * from clientes;

insert into pedidos(cliente_id, producto) values
(1, 'Libro'),
(3, 'Cafe'),
(4, 'Mapa'),
(6, 'Lapiz');

select * from pedidos;

select nombre, producto from clientes 
inner join pedidos 
on clientes.id = pedidos.cliente_id;

select nombre, producto from clientes 
left join pedidos 
on clientes.id = pedidos.cliente_id;

select nombre, producto from clientes 
right join pedidos 
on clientes.id = pedidos.cliente_id;