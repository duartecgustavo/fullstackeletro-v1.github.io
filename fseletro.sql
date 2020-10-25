-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2020 at 08:38 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fseletro`
--

-- --------------------------------------------------------

--
-- Table structure for table `pedidos`
--

CREATE TABLE `pedidos` (
  `idpedidos` int(9) NOT NULL,
  `nome_cliente` varchar(99) DEFAULT NULL,
  `endereco` varchar(199) DEFAULT NULL,
  `telefone` varchar(40) DEFAULT NULL,
  `nome_produto` varchar(99) DEFAULT NULL,
  `valor_und` decimal(8,2) DEFAULT NULL,
  `quantidade` int(9) DEFAULT NULL,
  `valor_total` decimal(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `produtos`
--

CREATE TABLE `produtos` (
  `idproduto` int(11) NOT NULL,
  `descricao` varchar(250) NOT NULL,
  `preco` decimal(8,2) NOT NULL,
  `nomeimagem` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `produtos`
--

INSERT INTO `produtos` (`idproduto`, `descricao`, `preco`, `nomeimagem`) VALUES
(1, 'Geladeira Brastemp Frost Free Inverse - Prata', '5999.00', 'Geladeira_Brastemp_Prata.jpeg'),
(2, 'Geladeira Consul Frost Free - Prata', '3999.00', 'Geladeira_Consul.jpeg'),
(3, 'Geladeira Brastemp Frost Free Inverse - Branca', '4999.00', 'Geladeira_Brastemp_Branca.jpeg'),
(4, 'Fogão Atlas 4 Bocas Tropical Glass - Branco', '699.00', 'Fog%C3%A3o_Atlas.jpeg'),
(5, 'Fogão Consul 4 Bocas com Acendimento Automático', '499.00', 'Fog%C3%A3o_Consul.jpeg'),
(6, 'Máquina de Lavar Brastemp e Lavagem mais rápida', '1499.00', 'Lava_Roupa_Brastemp.jpeg'),
(7, 'Máquina de Lavar Philco e Enxágue rápido', '1999.00', 'Lava_Roupa_Philco.jpeg'),
(8, 'Máquina de Lavar 15kg Enxágue Anti-Alérgico', '1999.00', 'Lavadoura_Brastemp.jpeg'),
(9, 'Micro-ondas Electrolux MEF41 menoe radioativo', '499.00', 'Micro_ElectroLux.jpeg'),
(10, 'Micro-ondas Consul ainda menos radioativo', '699.00', 'Micro_Ondas_Consul.jpeg'),
(11, 'Micro-ondas Philco sem radiação 2020', '250.00', 'Micro_Philco.jpeg'),
(12, 'Freezer Electrolux FE26 Cycle Defrost - 203L', '999.00', 'Freezer_Electrolux.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idpedidos`),
  ADD UNIQUE KEY `idpedidos` (`idpedidos`);

--
-- Indexes for table `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`idproduto`),
  ADD UNIQUE KEY `idproduto` (`idproduto`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idpedidos` int(9) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `produtos`
--
ALTER TABLE `produtos`
  MODIFY `idproduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
