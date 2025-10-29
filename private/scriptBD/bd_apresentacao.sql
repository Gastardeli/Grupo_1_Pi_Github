-- Criar o Banco de Dados
CREATE DATABASE invtracker;

-- Utilizar o banco de dados
USE invtracker;

-- Criar tabela cliente
CREATE TABLE cliente (
	idCliente INT PRIMARY KEY AUTO_INCREMENT,
    statusCliente VARCHAR(8),
		CONSTRAINT chkCliente CHECK (statusCliente IN('Ativo', 'Inativo'))
);

insert into cliente (statusCliente) VALUES
('Ativo'),
('Inativo'),
('Ativo'),
('Inativo'),
('Ativo');



-- Criar a tabela cadastro
CREATE TABLE cadastro (
	idCadastro INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    razao VARCHAR(70),
    cnpj CHAR(14) UNIQUE NOT NULL, -- Considerar apenas os números do CNPJ
    email VARCHAR(70) UNIQUE NOT NULL,
		CONSTRAINT chkEmail CHECK (email LIKE '%@%'),
    telefone VARCHAR(15) NOT NULL,
--     senha_hash VARCHAR(255) NOT NULL,
--     dtCadastro DATETIME DEFAULT current_timestamp,
    fkClienteCad INT,
		CONSTRAINT fk_cadastroCliente 
        FOREIGN KEY (fkClienteCad)
		REFERENCES cliente(idCliente)
);

INSERT INTO cadastro (nome, razao, cnpj, email, telefone, fkClienteCad) VALUES

('Supermercado Sol Nascente', 'Sol Nascente Atacadista LTDA', '78393422235045', 'contato@solnascente.com', '(01)0000-0001', 1),
('Mercado Alegria Fliz', 'Alegria Feliz Atacadista SA', '97546169564125', 'contato@alegriafeliz.com', '(02)0000-0002', 2),
('Hiper Estrela da Alegria', 'Hiper Estrela da Alegria SA', '85295968178980', 'contato@estrelafeliz.com', '(01)0000-0003', 3),
('Super Nova Atacado', 'Super Nova Atacadista LTDA', '35693153583303', 'contato@supernovaatacado.com', '(02)0000-0004', 4),
('Mercadão Horizonte do Universo', 'Horizonte Universo Atacadista LTDA', '29249842902523', 'contato@horizonteuniverso.com', '(02)0000-0005', 5);

-- Criar tabela pagamento
CREATE TABLE pagamento (
	idPagamento INT AUTO_INCREMENT,
    fkClientePagto INT,
		PRIMARY KEY (idPagamento, fkClientePagto),
		CONSTRAINT fk_pagtoCliente
			FOREIGN KEY (fkClientePagto)
			REFERENCES cliente(idCliente),
	moeda VARCHAR(30) DEFAULT 'BRL',
    preco DECIMAL(10,2),
    metodo VARCHAR(30),
		CONSTRAINT chkMetodo CHECK(metodo IN ('Pix', 'Boleto', 'Débito', 'Crédito')),
	quantidadeParcela INT DEFAULT 1,
    dtContratacao DATETIME DEFAULT current_timestamp, -- Data de registro de quando o serviço foi contratado.
	dtPagamento DATE,
	dtVencimento DATE,
    statusPagamento VARCHAR(25) DEFAULT 'Pendente',
		CONSTRAINT chkPagamento CHECK( statusPagamento IN ('Inadimplente', 'Pago', 'Cancelado', 'Pendente'))
);

-- -- Inserir os dados na tabela pagamento
INSERT INTO pagamento (idPagamento, fkClientePagto, moeda, preco, metodo, quantidadeParcela, dtPagamento, dtVencimento, statusPagamento) VALUES
(1, 1, 'BRL', 120.50, 'Pix', 1, '2025-08-05', '2025-08-05', 'Pago'),
(2, 1, 'BRL', 89.90, 'Boleto', 2, NULL, '2025-09-10', 'Pendente'),
(1, 2, 'BRL' ,250.00, 'Crédito', 3, '2025-08-15', '2025-08-15', 'Pago'),
(2, 2, 'BRL', 45.00, 'Débito', 4, '2025-08-18', '2025-08-18', 'Pago'),
(1, 3, 'BRL', 600.00, 'Crédito', 3, NULL, '2025-09-20', 'Pendente'),
(2, 3, 'BRL', 75.00, 'Pix', 2, '2025-08-22', '2025-08-22', 'Pago'),
(1, 4, 'BRL', 300.00, 'Boleto', 4, NULL, '2025-09-25', 'Inadimplente'),
(1, 5, 'BRL', 150.00, 'Crédito', 4, NULL, '2025-09-30', 'Cancelado');

-- Criar a tabela estoque
CREATE TABLE estoque (
	idEstoque INT PRIMARY KEY AUTO_INCREMENT,
    tamanho DECIMAL(3,2),
    setor VARCHAR(40), -- Referente ao nome do setor (exemplo: Setor AZ)
    categoria VARCHAR(40), -- Referente ao tipo de produto (exemplo: Sabão em pó)
    fkClienteEstoque INT,
		CONSTRAINT fk_estoqueCliente
        FOREIGN KEY (fkClienteEstoque)
        REFERENCES cliente(idCliente)
);

INSERT INTO estoque (tamanho, setor, categoria, fkClienteEstoque) VALUES
(1.20, 'Estoque 1', 'Alimentos Secos', 1),
(0.80, 'Estoque 2', 'Grãos e Cereais', 1),
(1.50, 'Estoque 1', 'Bebidas', 2),
(0.60, 'Estoque 2', 'Limpeza', 2),
(0.40, 'Estoque 1', 'Higiene Pessoal', 3),
(1.70, 'Estoque 2', 'Refrigerados', 3),
(1.10, 'Estoque 1', 'Padaria e Pães', 4),
(1.90, 'Estoque 1', 'Infantil', 5);

-- Criar a tabela produto
CREATE TABLE produto (
	idProduto INT PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR(50),
    marca VARCHAR(50),
    categoria VARCHAR(50),
    tamanho INT -- em centímetros
);

INSERT INTO produto (nome, marca, categoria, tamanho) VALUES
('Arroz Tipo 1 5kg', 'Tio João', 'Alimentos', 30),
('Feijão Carioca 1kg', 'Camil', 'Alimentos', 20),
('Leite Integral 1L', 'Itambé', 'Bebidas', 22),
('Detergente Líquido 500ml', 'Ypê', 'Limpeza', 18),
('Sabonete 90g', 'Dove', 'Higiene', 10),
('Refrigerante Cola 2L', 'Coca-Cola', 'Bebidas', 32),
('Pão de Forma Integral 500g', 'Wickbold', 'Alimentos', 28),
('Fralda Descartável M 40un', 'Pampers', 'Infantil', 40);

-- Criar a tabela sensor
CREATE TABLE sensor (
	idSensor INT PRIMARY KEY AUTO_INCREMENT,
    nSerie VARCHAR(40),
    statusSensor VARCHAR(15), CONSTRAINT
    checkStatus
    CHECK(statusSensor IN ('Ativo', 'Desativado'))
);

INSERT INTO sensor (nSerie, statusSensor) VALUES
('1000000001', 'Ativo'),
('1000000002', 'Desativado'),
('1000000003', 'Desativado'),
('1000000004', 'Ativo'),
('1000000005', 'Ativo'),
('1000000006', 'Desativado'),
('1000000007', 'Desativado'),
('1000000008', 'Ativo');

-- Criar tabela lote
CREATE TABLE lote (
	idLote INT PRIMARY KEY AUTO_INCREMENT,
    numLote INT,
    dtValidade DATE,
    dtFabricacao DATE,
    dtEntrada DATETIME DEFAULT current_timestamp,
    dtSaida DATETIME DEFAULT current_timestamp,
    fkEstoque INT,
		CONSTRAINT fk_estoqueLote
        FOREIGN KEY (fkEstoque)
        REFERENCES estoque(idEstoque),
    fkProduto INT,
		CONSTRAINT fk_produtoLote
        FOREIGN KEY (fkProduto)
        REFERENCES produto(idProduto),
    fkSensor INT,
		CONSTRAINT fk_sensorLote
        FOREIGN KEY (fkSensor)
        REFERENCES sensor(idSensor)
);

INSERT INTO lote (dtValidade, dtFabricacao, dtEntrada, dtSaida, fkEstoque, fkProduto, fkSensor) VALUES
('2026-01-10', '2025-01-10', '2025-01-15', '2025-06-15', 1, 1, 1),
('2026-02-20', '2025-02-20', '2025-02-25', '2025-07-20', 2, 2, 2),
('2026-03-15', '2025-03-15', '2025-03-18', '2025-08-10', 3, 3, 3),
('2026-04-25', '2025-04-25', '2025-04-28', '2025-09-05', 4, 4, 4),
('2026-05-30', '2025-05-30', '2025-06-02', '2025-10-01', 5, 5, 5),
('2026-06-10', '2025-06-10', '2025-06-12', '2025-11-05', 6, 6, 6),
('2026-07-18', '2025-07-18', '2025-07-22', '2025-12-02', 7, 7, 7),
('2026-08-25', '2025-08-25', '2025-08-28', '2026-01-10', 8, 8, 8);

-- Criar a tabela registro
CREATE TABLE registro (
	idRegistro INT AUTO_INCREMENT,
    fkRegistroSensor INT,
		PRIMARY KEY (idRegistro, fkRegistroSensor),
		FOREIGN KEY (fkRegistroSensor)
			REFERENCES sensor(idSensor),
    distancia INT, 
    statusAlerta VARCHAR(8),
		CONSTRAINT chkAlerta CHECK (statusAlerta IN ('Alto', 'Moderado', 'Baixo')),
    dtRegistro DATETIME DEFAULT current_timestamp
);

select idRegistro as 'Registro', 
	idSensor as 'Sensor', 
		distancia as 'Medida (cm)', 
			dtRegistro as 'Data de Registro' 
				from registro 
					join sensor 
						on fkRegistroSensor = idSensor;

