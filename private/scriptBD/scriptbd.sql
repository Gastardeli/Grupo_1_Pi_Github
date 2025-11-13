SHOW DATABASES;
CREATE DATABASE invtracker;
USE invtracker;

CREATE TABLE Empresa(
idCliente INT PRIMARY KEY AUTO_INCREMENT,
statusCliente VARCHAR(8),
nome VARCHAR(45),
senha VARCHAR(45),
razao VARCHAR(45),
cnpj VARCHAR(45),
email VARCHAR(45),
telefone VARCHAR(45)
);

CREATE TABLE funcionario(
idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
funcao VARCHAR(45),
data_nascimento DATE,
cpf CHAR(12),
cep CHAR(11),
fk_empresa INT,
FOREIGN KEY (fk_empresa) REFERENCES empresa(idEmpresa)
);

CREATE TABLE login (
idLogin INT PRIMARY KEY AUTO_INCREMENT,
fk_funcionario_login INT ,
FOREIGN KEY (fk_funcionario_login) REFERENCES funcionario(idFuncionario)
);

CREATE TABLE pagamento(
idPagamento INT PRIMARY KEY AUTO_INCREMENT,
moeda VARCHAR(45),
CONSTRAINT tipo_moeda CHECK(tipo_moeda('Real','DOlar','Euro')),
quantidadeParcela INT,
dtContratacao DATETIME,
dtPagamento DATE,
dtVencimento DATE,
status_pagamento VARCHAR(25),
fkClientePagto INT,
FOREIGN KEY (fkClientePagto) REFERENCES empresa(idCliente)
);

CREATE TABLE estoque (
idEstoque INT PRIMARY KEY AUTO_INCREMENT,
tamanho DECIMAL(3,2),
estoque VARCHAR(40),
categoria VARCHAR(40),
fkEmpresa INT,
CONSTRAINT fkEmpresaEstoque
FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa)
);

CREATE TABLE lote (
idLote INT PRIMARY KEY AUTO_INCREMENT,
numLote INT,
fkEstoque INT,
CONSTRAINT fkEstoqueLote
FOREIGN KEY (fkEstoque) REFERENCES estoque(idEstoque),
fkProduto INT,
CONSTRAINT fkProdutoLote
FOREIGN KEY (fkProduto) REFERENCES produto(idProduto),
fkSensor INT,
CONSTRAINT fkSensorLote
FOREIGN KEY (fkSensor) REFERENCES sensor(idSensor),
dtEntrada DATETIME,
dtSaida DATETIME
);

CREATE TABLE produto (
idProduto INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
marca VARCHAR(50),
categoria VARCHAR(50),
tamanho INT,
dtValidade VARCHAR(45),
fabricante VARCHAR(45)
);


CREATE TABLE sensor (
idSensor INT PRIMARY KEY AUTO_INCREMENT,
nSerie VARCHAR(40),
statusSensor1 VARCHAR(15),
statusSensor2 VARCHAR(15)
);

CREATE TABLE registro(
idRegistro INT PRIMARY KEY AUTO_INCREMENT,
fkSensor INT,
CONSTRAINT fkRegistroSensor
FOREIGN KEY (fkSensor) REFERENCES sensor(idSensor),
distancia DECIMAL(3,2),
statusAlerta VARCHAR(8),
dtRegistro DATETIME
);



