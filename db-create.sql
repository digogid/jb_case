create database jb_db;

create table Usuario (
	id char(36) primary key,
    name varchar(100) not null,
    email varchar(100) unique not null
);

create table Produto (
	id char(36) primary key,
    name varchar(100) unique not null,
	bar_code varchar(13) unique not null,
	productPicture varchar(500) null,
	inStock int not null,
	category int check (category in (1,2)) not null
);

insert into usuario (id, name, email) values (uuid(), 'Rodrigo Silva', 'rodrigo.silva@jurosbaixos.com.br');
insert into usuario (id, name, email) values (uuid(), 'Arthur Bonzi', 'arthur.bonzi@jurosbaixos.com.br');

insert into produto (id, name, bar_code, productPicture, inStock, category) values (uuid(), 'Produto 01', '1234567890123', 'http://pudim.com.br', 0, 1);
insert into produto (id, name, bar_code, productPicture, inStock, category) values (uuid(), 'Produto 02', '1597531597534', 'http://pudim.com.br', 0, 1);
insert into produto (id, name, bar_code, productPicture, inStock, category) values (uuid(), 'Produto 03', '1479632587531', 'http://pudim.com.br', 0, 2);