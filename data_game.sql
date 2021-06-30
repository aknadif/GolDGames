-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 29, 2021 at 05:51 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `goldgames`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_game`
--

CREATE TABLE `data_game` (
  `id` int(30) NOT NULL,
  `poster` varchar(200) NOT NULL,
  `title` varchar(40) NOT NULL,
  `genre` varchar(40) NOT NULL,
  `developer` varchar(40) NOT NULL,
  `publisher` varchar(40) NOT NULL,
  `realease_date` varchar(40) NOT NULL,
  `file_size` varchar(40) NOT NULL,
  `mirrors` varchar(40) NOT NULL,
  `desc` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_game`
--

INSERT INTO `data_game` (`id`, `poster`, `title`, `genre`, `developer`, `publisher`, `realease_date`, `file_size`, `mirrors`, `desc`) VALUES
(1, 'https://1.bp.blogspot.com/-3VSoSX9dtnA/XyXyZEcFBzI/AAAAAAAA3Lg/IiWDG7sTnMgucer5hFIe2eHQu5xeN_TNwCLcBGAsYHQ/s2560/valorant-2020-5k-game-e9-1080x1920.jpg', 'Valorant', 'Shooter', 'Riot Games', 'Riot Games', 'June 2, 2020', '14.4GB GB', 'Google Drive, Mediafire, Uptobox, Torren', 'Valorant is a team-based first-person hero shooter set in the near future. Players play as one of a set of agents, characters designed based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it.'),
(2, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.loIuxTDe_sLDbJvml6PCUgHaKc%26pid%3DApi&f=1', 'The Elder Scrolls V Skyrim Special Editi', 'Action, Adventure, RPG', 'Bethesda Game Studios', 'Bethesda Softworks', '28 Oct, 2016', '21.5 GB / Split 5 parts 4.90 GB Compress', 'Google Drive, Mediafire, Onedrive Live, ', 'Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more. Skyrim Special Edition also brings the full power of mods to the PC a'),
(3, 'https://www.mordeo.org/files/uploads/2021/02/Mass-Effect-Legendary-Edition-Game-Poster-4K-Ultra-HD-Mobile-Wallpaper-576x1024.jpg', 'Mass Effect Legendary Edition-FLT', 'Action, Adventure, RPG, Shooter', 'BioWare', 'Electronic Arts', '14 May, 2021', '88.46 GB / Split 18 parts 4.95 GB Compre', 'Google Drive, Mediafire, Onedrive Live, ', 'One person is all that stands between humanity and the greatest threat it’s ever faced. Relive the legend of Commander Shepard in the highly acclaimed Mass Effect trilogy with the Mass Effect™ Legendary Edition. Includes single-player base content and over 40 DLC from Mass Effect, Mass Effect 2, and Mass Effect 3 games, including promo weapons, armors and packs — remastered and optimized for 4K Ul'),
(4, 'https://www.empireposter.de/bilder/bilder_XL/818645.jpg', 'Days Gone-FLT', 'Action, Adventure, Horror, Shooter', 'Bend Studio', 'PlayStation Mobile, Inc.', '18 May, 2021', '51.33 GB / Split 11 parts 4.95 GB Compre', 'Google Drive, Mediafire, Pixeldrain, Upt', 'Days Gone is an open-world action-adventure game set in a harsh wilderness two years after a devastating global pandemic.\r\nStep into the dirt flecked shoes of former outlaw biker Deacon St. John, a bounty hunter trying to find a reason to live in a land surrounded by death. Scavenge through abandoned settlements for equipment to craft valuable items and weapons, or take your chances with other sur'),
(5, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sA3AKIk6rhd-D-5wGRX9dgHaLH%26pid%3DApi&f=1', 'Yakuza Like a Dragon Legendary Hero Edit', 'Action, Adventure, RPG', 'Ryu Ga Gotoku Studio', 'SEGA', '11 Nov, 2020', '34.90 GB / Split 8 parts 4.95 GB Compres', 'Google Drive, Mediafire, Pixeldrain, Upt', 'Yakuza: Like a Dragon’s Hero Edition includes a selection of the game’s DLC, Job Set, and Management Mode Set.\r\nYakuza: Like a Dragon’s Legendary Hero Edition includes ALL of the game’s DLC. This DLC adds a wide variety of in-game bonus content, including the Job Set, which unlocks the ‘Devil Rocker’ and ‘Matriarch’ Jobs, as well as the Management Mode Set, Crafting Set, Karaoke Set, Ultimate Cost'),
(6, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.w-B410pwAnnT3MVNgCtz8QHaKe%26pid%3DApi&f=1', 'Captain Tsubasa Rise of New Champions De', 'Action, Arcade, Casual, Sports', 'TAMSOFT CORPORATION', 'BANDAI NAMCO Entertainment', '28 Aug, 2020', '12.78 GB / Split 3 parts 4.95 GB Compres', 'Google Drive, Mediafire, Onedrive Live, ', 'Captain Tsubasa: Rise of New Champions is an arcade football game bringing a refreshing look to the football genre with the exhilarating action and over the top shots that made the license famous.\r\nThe worlds of Soccer and Anime converge in Captain Tsubasa: Rise of New Champions, based on the renowned Captain Tsubasa series. The game chronicles the athletic exploits of Tsubasa Ozora as he plays ou'),
(7, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TLiPSO9n19RJWWltYnhzWgHaHa%26pid%3DApi&f=1', 'JUMP FORCE v2.00-CODEX', 'Action, Arcade, Fighting', 'Spike Chunsoft', 'Bandai Namco', '15 Feb, 2019', '18.61 GB / Split 3 parts 4.90 GB Compres', 'Google Drive, Mediafire, Onedrive Live, ', 'The most famous Manga heroes are thrown into a whole new battleground: our world. Uniting to fight the most dangerous threat, the Jump Force will bear the fate of the entire humankind.\r\nCreate your own avatar and jump into an original Story Mode to fight alongside the most powerful Manga heroes from DRAGON BALL Z, ONE PIECE, NARUTO, BLEACH, HUNTER X HUNTER, YU-GI-OH!, YU YU HAKUSHO, SAINT SEIYA an'),
(8, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EQ6mFjTfXHVUmUL1pJUTrAHaI4%26pid%3DApi&f=1', 'NARUTO SHIPPUDEN Ultimate Ninja STORM 4 ', 'Action, Adventure', 'CyberConnect2 Co. Ltd.', 'BANDAI NAMCO Entertainment', '5 Feb, 2016', '36.11 GB / Split 8 parts 4.95 GB Compres', 'Google Drive, Mediafire, Onedrive Live, ', 'The latest opus in the acclaimed STORM series is taking you on a colourful and breathtaking ride. Take advantage of the totally revamped battle system and prepare to dive into the most epic fights you’ve ever seen in the NARUTO SHIPPUDEN: Ultimate Ninja STORM series!\r\nPrepare for the most awaited STORM game ever created!');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_game`
--
ALTER TABLE `data_game`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_game`
--
ALTER TABLE `data_game`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
