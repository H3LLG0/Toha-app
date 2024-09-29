-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 29 2024 г., 17:26
-- Версия сервера: 5.7.39
-- Версия PHP: 8.0.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `Atelie`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Client_orders`
--

CREATE TABLE `Client_orders` (
  `id` int(8) NOT NULL,
  `name` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pathronumic` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `Client_orders`
--

INSERT INTO `Client_orders` (`id`, `name`, `surname`, `pathronumic`, `phone`, `email`) VALUES
(5, 'Константин', 'Савельев', 'Олегович', '+7 920 125-80-17', 'hgtcpvshc@gmail.com');

-- --------------------------------------------------------

--
-- Структура таблицы `PriceList`
--

CREATE TABLE `PriceList` (
  `id` int(8) NOT NULL,
  `naming` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `PriceList`
--

INSERT INTO `PriceList` (`id`, `naming`, `price`) VALUES
(1, 'Пошив юбки', 2000),
(2, 'Пошив юбки на подкладке', 2500),
(3, 'Пошив брюк', 2800),
(4, 'Пошив брюк на подкладке', 3200),
(5, 'Пошив блузки', 2500),
(6, 'Пошив топика', 1000),
(7, 'Пошив платья', 3000),
(8, 'Пошив женского пиджака без подкладки', 4000),
(9, 'Пошив женского пиджака на подкладке', 6000),
(10, 'Пошив вечернего платья', 4500),
(11, 'Пошив мужских брюк', 2800),
(12, 'Пошив мужской рубашки', 2800),
(13, 'Пошив куртки', 5000),
(14, 'Пошив плаща', 5000),
(15, 'Пошив пальто (демисезон)', 7000),
(16, 'Пошив пальто (зимнее)', 9000),
(17, 'Пошив куртки (зимняя)', 9000);

-- --------------------------------------------------------

--
-- Структура таблицы `rate`
--

CREATE TABLE `rate` (
  `id_rate` int(8) NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rate_mark` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rate_text` longtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Client_orders`
--
ALTER TABLE `Client_orders`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `PriceList`
--
ALTER TABLE `PriceList`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `rate`
--
ALTER TABLE `rate`
  ADD PRIMARY KEY (`id_rate`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Client_orders`
--
ALTER TABLE `Client_orders`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `PriceList`
--
ALTER TABLE `PriceList`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT для таблицы `rate`
--
ALTER TABLE `rate`
  MODIFY `id_rate` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
