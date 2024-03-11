-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-03-2024 a las 14:12:16
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_hospisoft`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospisoft_detalleformula`
--

CREATE TABLE `hospisoft_detalleformula` (
  `Iddetalle` int(11) NOT NULL,
  `consecutivoformula` int(11) NOT NULL,
  `iditem` int(11) NOT NULL,
  `cantidad` int(1) NOT NULL,
  `posologia` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hospisoft_detalleformula`
--

INSERT INTO `hospisoft_detalleformula` (`Iddetalle`, `consecutivoformula`, `iditem`, `cantidad`, `posologia`) VALUES
(1, 1, 2, 20, 'asdqwdwdqwd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospisoft_formula`
--

CREATE TABLE `hospisoft_formula` (
  `consecutivo` int(11) NOT NULL,
  `consecutivoformula` int(11) NOT NULL,
  `idMedico` int(11) NOT NULL,
  `idPaciente` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hospisoft_formula`
--

INSERT INTO `hospisoft_formula` (`consecutivo`, `consecutivoformula`, `idMedico`, `idPaciente`, `fecha`) VALUES
(1, 1, 1, 1, '2024-03-11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospisoft_item`
--

CREATE TABLE `hospisoft_item` (
  `Iditem` int(11) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `existencia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hospisoft_item`
--

INSERT INTO `hospisoft_item` (`Iditem`, `descripcion`, `existencia`) VALUES
(1, 'Píldoras', 100),
(2, 'Bendaje', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospisoft_medico`
--

CREATE TABLE `hospisoft_medico` (
  `IdMedico` int(11) NOT NULL,
  `nombreMedico` varchar(200) NOT NULL,
  `apellidosMedico` varchar(250) NOT NULL,
  `emailMedico` varchar(250) NOT NULL,
  `especialidadMedico` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospisoft_paciente`
--

CREATE TABLE `hospisoft_paciente` (
  `idPaciente` int(11) NOT NULL,
  `nombrePaciente` varchar(200) NOT NULL,
  `apellidosPaciente` varchar(250) NOT NULL,
  `emailPaciente` varchar(150) NOT NULL,
  `telefonoPaciente` varchar(250) NOT NULL,
  `movilPaciente` varchar(250) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `epsPaciente` varchar(250) NOT NULL,
  `usuarioPaciente` varchar(250) NOT NULL,
  `passwordPaciente` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospisoft_users`
--

CREATE TABLE `hospisoft_users` (
  `iduser` int(11) NOT NULL,
  `email` varchar(250) NOT NULL,
  `userName` varchar(200) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `hospisoft_detalleformula`
--
ALTER TABLE `hospisoft_detalleformula`
  ADD PRIMARY KEY (`Iddetalle`),
  ADD KEY `iditem` (`iditem`);

--
-- Indices de la tabla `hospisoft_formula`
--
ALTER TABLE `hospisoft_formula`
  ADD PRIMARY KEY (`consecutivo`),
  ADD KEY `hospisoft_formula_ibfk_1` (`consecutivoformula`);

--
-- Indices de la tabla `hospisoft_item`
--
ALTER TABLE `hospisoft_item`
  ADD PRIMARY KEY (`Iditem`);

--
-- Indices de la tabla `hospisoft_medico`
--
ALTER TABLE `hospisoft_medico`
  ADD PRIMARY KEY (`IdMedico`);

--
-- Indices de la tabla `hospisoft_paciente`
--
ALTER TABLE `hospisoft_paciente`
  ADD PRIMARY KEY (`idPaciente`);

--
-- Indices de la tabla `hospisoft_users`
--
ALTER TABLE `hospisoft_users`
  ADD PRIMARY KEY (`iduser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `hospisoft_detalleformula`
--
ALTER TABLE `hospisoft_detalleformula`
  MODIFY `Iddetalle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `hospisoft_formula`
--
ALTER TABLE `hospisoft_formula`
  MODIFY `consecutivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `hospisoft_item`
--
ALTER TABLE `hospisoft_item`
  MODIFY `Iditem` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `hospisoft_medico`
--
ALTER TABLE `hospisoft_medico`
  MODIFY `IdMedico` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `hospisoft_paciente`
--
ALTER TABLE `hospisoft_paciente`
  MODIFY `idPaciente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `hospisoft_users`
--
ALTER TABLE `hospisoft_users`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `hospisoft_detalleformula`
--
ALTER TABLE `hospisoft_detalleformula`
  ADD CONSTRAINT `hospisoft_detalleformula_ibfk_1` FOREIGN KEY (`iditem`) REFERENCES `hospisoft_item` (`Iditem`);

--
-- Filtros para la tabla `hospisoft_formula`
--
ALTER TABLE `hospisoft_formula`
  ADD CONSTRAINT `hospisoft_formula_ibfk_1` FOREIGN KEY (`consecutivoformula`) REFERENCES `hospisoft_detalleformula` (`Iddetalle`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
