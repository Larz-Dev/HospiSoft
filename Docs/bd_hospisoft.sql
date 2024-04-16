-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:4400
-- Tiempo de generación: 16-04-2024 a las 23:56:25
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

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
-- Estructura de tabla para la tabla `hospisoft_cita`
--

CREATE TABLE `hospisoft_cita` (
  `idcita` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `idmedico` int(11) NOT NULL,
  `idpaciente` int(11) NOT NULL,
  `razon` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hospisoft_cita`
--

INSERT INTO `hospisoft_cita` (`idcita`, `fecha`, `idmedico`, `idpaciente`, `razon`) VALUES
(1, '2024-04-02', 2, 11, 'asdad'),
(2, '2024-04-02', 1, 7, 'afasd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospisoft_detalleformula`
--

CREATE TABLE `hospisoft_detalleformula` (
  `Iddetalle` int(11) NOT NULL,
  `iditem` int(11) NOT NULL,
  `cantidad` int(1) NOT NULL,
  `posologia` varchar(250) NOT NULL,
  `formula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hospisoft_detalleformula`
--

INSERT INTO `hospisoft_detalleformula` (`Iddetalle`, `iditem`, `cantidad`, `posologia`, `formula`) VALUES
(1, 2, 20, 'Hola mundosdsssssdasd', 1),
(5, 1, 1, 'ggssga', 10),
(6, 4, 2, 'adgsfh', 11),
(7, 2, 2, 'adgsfh', 12),
(8, 2, 2, 'adgsfh', 13),
(9, 2, 2, 'adgsfh', 14),
(10, 1, 1, 'ggssgaaaaaaaaaaaaaaaaaaaaaaaa', 15),
(11, 1, 677, 'fghdfhfgh', 16),
(12, 2, 2, 'a', 17),
(13, 3, 1, 'ffffffffffffffffff', 18),
(14, 2, 2, 'adgsfhdddddddddddddddd', 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospisoft_formula`
--

CREATE TABLE `hospisoft_formula` (
  `consecutivo` int(11) NOT NULL,
  `idMedico` int(11) NOT NULL,
  `idPaciente` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hospisoft_formula`
--

INSERT INTO `hospisoft_formula` (`consecutivo`, `idMedico`, `idPaciente`, `fecha`) VALUES
(1, 1, 1, '2024-03-11'),
(5, 1, 1, '2000-01-01'),
(6, 1, 1, '2000-01-01'),
(7, 1, 1, '2000-01-01'),
(8, 1, 1, '2000-01-01'),
(9, 1, 1, '2000-01-01'),
(10, 1, 1, '2000-01-01'),
(11, 1, 1, '2000-01-01'),
(12, 1, 1, '2024-04-03'),
(13, 2, 13, '2024-04-12'),
(14, 2, 11, '2024-04-17'),
(15, 1, 1, '2000-01-01'),
(16, 1, 1, '2024-02-28'),
(17, 1, 1, '2024-04-03'),
(18, 2, 13, '2024-04-12'),
(19, 2, 11, '2024-04-17');

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
(1, 'editado', 1),
(2, 'Bendaje', 20),
(3, 'agua', 123),
(4, 'ddhbeg', 323),
(5, 'a', 1),
(6, 'aaaaa', 12),
(7, 'editado', 1),
(8, 'aaaaa', 12),
(9, 'aaaaa', 12),
(10, 'aaaaa', 12),
(11, 'aaaaa', 12),
(12, 'dasdasd', 23),
(13, 'wawas', 123),
(14, 'asdddd', 4123),
(15, 'asd', 4123),
(16, 'HOLA MUNDO', 987654321),
(17, 'aaaaaaa', 1),
(18, 'o', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospisoft_medico`
--

CREATE TABLE `hospisoft_medico` (
  `IdMedico` int(11) NOT NULL,
  `nombreMedico` varchar(200) NOT NULL,
  `apellidosMedico` varchar(250) NOT NULL,
  `emailMedico` varchar(250) NOT NULL,
  `especialidadMedico` varchar(150) NOT NULL,
  `rolMedico` varchar(10) NOT NULL,
  `passwordMedico` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hospisoft_medico`
--

INSERT INTO `hospisoft_medico` (`IdMedico`, `nombreMedico`, `apellidosMedico`, `emailMedico`, `especialidadMedico`, `rolMedico`, `passwordMedico`) VALUES
(1, 'fdsf', 'safaws', 'a@gmail.com', 'Encargado', 'ROOT', '$2b$10$Cbc0nYiJNMKZrwei1vn0QOzsx2Oiymw4gEF31Vnc3ohMYWTB4v.XG'),
(2, 'asds', 'asfaf', 'q@gmail.com', 'Encargado', 'Planta', '$2b$10$8YThXuzJwDAlA.xkDyT/QOCHlz4GA/Z3lrYjv66zmQoEarPWkmmWO');

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

--
-- Volcado de datos para la tabla `hospisoft_paciente`
--

INSERT INTO `hospisoft_paciente` (`idPaciente`, `nombrePaciente`, `apellidosPaciente`, `emailPaciente`, `telefonoPaciente`, `movilPaciente`, `fechaNacimiento`, `epsPaciente`, `usuarioPaciente`, `passwordPaciente`) VALUES
(1, 'Alejos', 'Tobon', 'asdas@gmail.com', '423423', '134134', '2005-03-13', 'asd', 'hola', '$2b$10$nQ9hcD5J5eXEYf6ZCD4aieVhvWAWRWsbCnrD8quZL/JhSkN1pH8di'),
(7, 'Alguien', 'Mas', 'mundo@gmail.com', '123', '123', '2005-01-01', 'SOS', 'Objeto', '$2b$10$/WfG0YK5olZPAx4Ehv7TZ.eJt3CppgYXnhHsrmTbXy2QO/RlnZ8R2'),
(8, 'Alguien', 'Mas', 'mundo@gmail.com', '123', '123', '2005-01-01', 'SOS', 'Objeto', '$2b$10$UQW/fvfS7GKKU0udG8./xudpGfaPcro6kHEakXIhWHBxRDVdOiGua'),
(9, 'asdas', 'asdas', 'hola@gmail.com', '', '12313', '2024-02-28', 'fsdf', 'asd', '$2b$10$4IXgrS4X5bZrbK8I4Ixxj.JwM.r36UYX9uHmccgvQtliCbcayFiOe'),
(10, 'fdsf', 'asf', 'hola@gmail.com', '4564', '312', '2024-03-12', 'dwd', 'asd', '$2b$10$WwZLXSbFR9LbkUiZE2Ahb.CqPgBo.Tly70dA7Kb1chY7Egstza/ci'),
(11, 'dfsf', 'herth', 'asdasd@gmail.com', '', '1231', '2024-03-13', 'gfgre', 'fwrg', '$2b$10$cW4bMvNLjFp/4cuQHKs9Me50ET9gKEm1jVM3bTeW2Owa7oMnBrkQy'),
(12, 'dfsf', 'herth', 'asdadsd@gmail.com', '', '1231', '2024-03-13', 'gfgre', 'fswrg', '$2b$10$V9nNqsRJ8Xdi/uIx4eJbu.PmfTpOPC1p6SVFKRKVBWdVdC8jFM9FS'),
(13, 'gdfgdfhdh', 'faefwe', 'asdasd@gmail.comasdasd', '2132', '12314', '2024-03-31', 'dasd', 'dasd', '$2b$10$1ggQWfOVinZ6H4pP246RGOPXrluFBhbjx43Rz7zjfROqeOXBd2l5W');

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
-- Indices de la tabla `hospisoft_cita`
--
ALTER TABLE `hospisoft_cita`
  ADD PRIMARY KEY (`idcita`),
  ADD KEY `idmedico` (`idmedico`),
  ADD KEY `idpaciente` (`idpaciente`);

--
-- Indices de la tabla `hospisoft_detalleformula`
--
ALTER TABLE `hospisoft_detalleformula`
  ADD PRIMARY KEY (`Iddetalle`),
  ADD KEY `iditem` (`iditem`),
  ADD KEY `formula` (`formula`);

--
-- Indices de la tabla `hospisoft_formula`
--
ALTER TABLE `hospisoft_formula`
  ADD PRIMARY KEY (`consecutivo`),
  ADD KEY `idMedico` (`idMedico`),
  ADD KEY `idPaciente` (`idPaciente`);

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
-- AUTO_INCREMENT de la tabla `hospisoft_cita`
--
ALTER TABLE `hospisoft_cita`
  MODIFY `idcita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `hospisoft_detalleformula`
--
ALTER TABLE `hospisoft_detalleformula`
  MODIFY `Iddetalle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `hospisoft_formula`
--
ALTER TABLE `hospisoft_formula`
  MODIFY `consecutivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `hospisoft_item`
--
ALTER TABLE `hospisoft_item`
  MODIFY `Iditem` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `hospisoft_medico`
--
ALTER TABLE `hospisoft_medico`
  MODIFY `IdMedico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `hospisoft_paciente`
--
ALTER TABLE `hospisoft_paciente`
  MODIFY `idPaciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `hospisoft_users`
--
ALTER TABLE `hospisoft_users`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `hospisoft_cita`
--
ALTER TABLE `hospisoft_cita`
  ADD CONSTRAINT `hospisoft_cita_ibfk_1` FOREIGN KEY (`idmedico`) REFERENCES `hospisoft_medico` (`IdMedico`),
  ADD CONSTRAINT `hospisoft_cita_ibfk_2` FOREIGN KEY (`idpaciente`) REFERENCES `hospisoft_paciente` (`idPaciente`);

--
-- Filtros para la tabla `hospisoft_detalleformula`
--
ALTER TABLE `hospisoft_detalleformula`
  ADD CONSTRAINT `hospisoft_detalleformula_ibfk_1` FOREIGN KEY (`iditem`) REFERENCES `hospisoft_item` (`Iditem`),
  ADD CONSTRAINT `hospisoft_detalleformula_ibfk_2` FOREIGN KEY (`Iddetalle`) REFERENCES `hospisoft_formula` (`consecutivo`),
  ADD CONSTRAINT `hospisoft_detalleformula_ibfk_3` FOREIGN KEY (`formula`) REFERENCES `hospisoft_formula` (`consecutivo`);

--
-- Filtros para la tabla `hospisoft_formula`
--
ALTER TABLE `hospisoft_formula`
  ADD CONSTRAINT `hospisoft_formula_ibfk_1` FOREIGN KEY (`idMedico`) REFERENCES `hospisoft_medico` (`IdMedico`),
  ADD CONSTRAINT `hospisoft_formula_ibfk_2` FOREIGN KEY (`idPaciente`) REFERENCES `hospisoft_paciente` (`idPaciente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
