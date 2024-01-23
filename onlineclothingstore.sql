-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2022 at 05:40 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onlineclothingstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `CartID` int(11) NOT NULL,
  `ProductID` int(11) NOT NULL,
  `Amount` int(11) DEFAULT NULL,
  `CustomerID` int(11) DEFAULT NULL,
  `VariationID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`CartID`, `ProductID`, `Amount`, `CustomerID`, `VariationID`) VALUES
(1, 1, 2, 2, 1),
(2, 1, 2, 2, 1),
(2, 3, 2, 2, 3),
(3, 3, 2, 2, 2),
(4, 1, 1, 2, 5),
(4, 2, 1, 2, 2),
(5, 1, 1, 2, 5),
(5, 2, 1, 2, 2),
(6, 1, 1, 7, 1),
(6, 2, 12, 7, 2);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `CategoryID` int(11) NOT NULL,
  `CategoryName` varchar(255) NOT NULL,
  `TargetID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`CategoryID`, `CategoryName`, `TargetID`) VALUES
(1, 'Half Sleeve Shirt', 1),
(2, 'Panjabi', 1),
(3, 'Saree', 2),
(6, 'T-Shirt', 1),
(7, 'Hijab', 2),
(8, 'Gloves', 1),
(9, 'Shoes', 1),
(10, 'Test Category', 1);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `CustomerID` int(11) NOT NULL,
  `DeliveryAddress` varchar(1023) NOT NULL,
  `UserID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`CustomerID`, `DeliveryAddress`, `UserID`) VALUES
(2, 'Bansree', 3),
(3, 'Dhaka', 20),
(4, 'Rajshahi', 21),
(5, 'Dhaka', 27),
(6, 'Dhaka', 30),
(7, 'Dhaka', 32);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `EmployeeID` int(11) NOT NULL,
  `Rank` varchar(255) NOT NULL,
  `UserID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`EmployeeID`, `Rank`, `UserID`) VALUES
(1, 'Admin', 24);

-- --------------------------------------------------------

--
-- Table structure for table `issues`
--

CREATE TABLE `issues` (
  `IssueID` int(11) NOT NULL,
  `Details` varchar(1023) NOT NULL,
  `Time` datetime DEFAULT current_timestamp(),
  `ResponseTime` datetime DEFAULT current_timestamp(),
  `Response` varchar(1023) DEFAULT NULL,
  `CustomerID` int(11) DEFAULT NULL,
  `EmployeeID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `mediacontent`
--

CREATE TABLE `mediacontent` (
  `MediaID` int(11) NOT NULL,
  `FileName` varchar(255) NOT NULL,
  `FileType` varchar(50) NOT NULL,
  `ProductID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mediacontent`
--

INSERT INTO `mediacontent` (`MediaID`, `FileName`, `FileType`, `ProductID`) VALUES
(1, '917544-716ed67243203d728ab8b0d7c66eb7e1.jpg', '', 1),
(2, '554290-6516c8d348f7306a0e4fcb2d2280dd41.jpg', '', 1),
(3, '787015-716ed67243203d728ab8b0d7c66eb7e1.jpg', '', 2),
(4, '184906-6516c8d348f7306a0e4fcb2d2280dd41.jpg', '', 2),
(5, '550725-716ed67243203d728ab8b0d7c66eb7e1.jpg', '', 3),
(6, '353012-6516c8d348f7306a0e4fcb2d2280dd41.jpg', '', 3),
(7, '201036-716ed67243203d728ab8b0d7c66eb7e1.jpg', '', 4),
(8, '993581-6516c8d348f7306a0e4fcb2d2280dd41.jpg', '', 4),
(9, '185222-istockphoto-488160041-612x612.jpg', '', 5),
(10, '429267-photo-1607345366928-199ea26cfe3e.jpg', '', 5),
(11, '926124-photo-1596755094514-f87e34085b2c.jpg', '', 6),
(12, '767946-photo-1607345366928-199ea26cfe3e.jpg', '', 6),
(13, '31931-dress-shirts-men-men-shirts-folded-pressed-business-wear-men-dress-shirts-men-cloth-159981593.jpg', '', 7),
(14, '963553-photo-1607345366928-199ea26cfe3e.jpg', '', 7);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `OrderID` int(11) NOT NULL,
  `Time` datetime DEFAULT current_timestamp(),
  `orderStatus` varchar(15) DEFAULT NULL,
  `CartID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`OrderID`, `Time`, `orderStatus`, `CartID`) VALUES
(1, '2022-09-06 03:47:29', 'DELIVERED', 4),
(2, '2022-09-06 03:52:32', 'NOT DELIVERED', 5);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `PaymentID` int(11) NOT NULL,
  `Method` varchar(50) NOT NULL,
  `Status` varchar(50) DEFAULT 'UNPAID',
  `Time` datetime DEFAULT NULL,
  `OrderID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `ProductID` int(11) NOT NULL,
  `ProductName` varchar(255) NOT NULL,
  `Description` varchar(1023) NOT NULL,
  `Price` int(11) DEFAULT NULL,
  `CategoryID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`ProductID`, `ProductName`, `Description`, `Price`, `CategoryID`) VALUES
(1, 'Poly Cotton Analog', 'Blue Half Sleeve Shirt', 400, 1),
(2, 'Poly Oyster Shirt', 'Good Shirt with good quality', 359, 1),
(3, 'Blue Shirt', 'New product!', 700, 1),
(4, 'Poly Cotton Digital', 'Just in stock, great in quality', 900, 1),
(5, 'Orange Shirt', 'Test Shirt', 300, 1),
(6, 'Oiled Shirt 1000', 'Demo Shirt', 900, 1),
(7, 'Nice Shirt', 'Good Shirt', 2000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `CustomerID` int(11) NOT NULL,
  `ProductID` int(11) NOT NULL,
  `Details` varchar(1023) DEFAULT NULL,
  `Rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`CustomerID`, `ProductID`, `Details`, `Rating`) VALUES
(2, 1, 'Test ', 3),
(5, 1, 'Test Review', 4),
(7, 1, 'Good quality T-shirt', 5);

-- --------------------------------------------------------

--
-- Table structure for table `targetaudience`
--

CREATE TABLE `targetaudience` (
  `TargetID` int(11) NOT NULL,
  `AudienceName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `targetaudience`
--

INSERT INTO `targetaudience` (`TargetID`, `AudienceName`) VALUES
(1, 'Men'),
(2, 'Women');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Phone` varchar(20) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserID`, `Name`, `Phone`, `Email`, `Password`) VALUES
(3, 'Kazi Toufique Elahi', '01771945746', 'ktoufiquee@gmail.com', 'Asd123@'),
(20, 'Kazi Toufique Elahi', '01771945757', '190104116@aust.edu', 'Asd123@'),
(21, 'Kite El', '01771188999', '190104113@aust.edu', 'Asd123@'),
(24, 'Tasnuva Binte Rahman', '0177777777', '190104101@aust.edu', 'Asd123@'),
(27, 'Kazi Toufique Elahi', '+8801745678917', 'kite@aust.edu', 'Asd123@'),
(30, 'Kazi Toufique Elahi', '01771945756', 'kiteLLL@gmail.com', 'Asd123@'),
(32, 'Test User', '01771945776', 'kitelll@outlook.com', 'Asd123@');

-- --------------------------------------------------------

--
-- Table structure for table `variation`
--

CREATE TABLE `variation` (
  `VariationID` int(11) NOT NULL,
  `Color` varchar(1023) NOT NULL,
  `Size` varchar(255) NOT NULL,
  `Stock` int(11) DEFAULT NULL,
  `ProductID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `variation`
--

INSERT INTO `variation` (`VariationID`, `Color`, `Size`, `Stock`, `ProductID`) VALUES
(1, '#000000', 'M', 2, 1),
(2, '#000000', 'M', 2, 2),
(3, '#000000', 'M', 2, 3),
(4, '#000000', 'M', 2, 4),
(5, '#ff6699', 'XL', 1, 1),
(6, '#9c27b0', 'XS', 3, 5),
(7, '#ff9800', 'M', 2, 5),
(8, '#9c27b0', 'XS', 3, 6),
(9, '#ff5722', 'L', 0, 6),
(10, '#9c27b0', 'SM', 3, 7),
(11, '#03a9f4', 'L', 0, 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`CartID`,`ProductID`),
  ADD KEY `ProductID` (`ProductID`),
  ADD KEY `CustomerID` (`CustomerID`),
  ADD KEY `VariationID` (`VariationID`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`CategoryID`),
  ADD UNIQUE KEY `INDEX_CategoryID` (`CategoryID`) USING BTREE,
  ADD KEY `TargetID` (`TargetID`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`CustomerID`),
  ADD UNIQUE KEY `INDEX_CustomerID` (`CustomerID`) USING BTREE,
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`EmployeeID`),
  ADD UNIQUE KEY `INDEX_EmployeeID` (`EmployeeID`) USING BTREE,
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `issues`
--
ALTER TABLE `issues`
  ADD PRIMARY KEY (`IssueID`),
  ADD UNIQUE KEY `INDEX_IssueID` (`IssueID`) USING BTREE,
  ADD KEY `CustomerID` (`CustomerID`),
  ADD KEY `EmployeeID` (`EmployeeID`);

--
-- Indexes for table `mediacontent`
--
ALTER TABLE `mediacontent`
  ADD PRIMARY KEY (`MediaID`),
  ADD UNIQUE KEY `INDEX_MediaID` (`MediaID`) USING BTREE,
  ADD KEY `ProductID` (`ProductID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`OrderID`),
  ADD UNIQUE KEY `INDEX_OrderID` (`OrderID`) USING BTREE,
  ADD KEY `CartID` (`CartID`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`PaymentID`),
  ADD UNIQUE KEY `INDEX_PaymentID` (`PaymentID`) USING BTREE,
  ADD KEY `OrderID` (`OrderID`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`ProductID`),
  ADD UNIQUE KEY `INDEX_ProductID` (`ProductID`) USING BTREE,
  ADD KEY `CategoryID` (`CategoryID`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`CustomerID`,`ProductID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Indexes for table `targetaudience`
--
ALTER TABLE `targetaudience`
  ADD PRIMARY KEY (`TargetID`),
  ADD UNIQUE KEY `INDEX_TargetID` (`TargetID`) USING BTREE;

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `INDEX_UserID` (`UserID`) USING BTREE,
  ADD UNIQUE KEY `Phone` (`Phone`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indexes for table `variation`
--
ALTER TABLE `variation`
  ADD PRIMARY KEY (`VariationID`),
  ADD UNIQUE KEY `INDEX_VariationID` (`VariationID`) USING BTREE,
  ADD KEY `ProductID` (`ProductID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `CartID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `CategoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `CustomerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `EmployeeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `issues`
--
ALTER TABLE `issues`
  MODIFY `IssueID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mediacontent`
--
ALTER TABLE `mediacontent`
  MODIFY `MediaID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `OrderID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `PaymentID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `ProductID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `targetaudience`
--
ALTER TABLE `targetaudience`
  MODIFY `TargetID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `variation`
--
ALTER TABLE `variation`
  MODIFY `VariationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`CustomerID`) REFERENCES `customer` (`CustomerID`),
  ADD CONSTRAINT `cart_ibfk_3` FOREIGN KEY (`VariationID`) REFERENCES `variation` (`VariationID`);

--
-- Constraints for table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`TargetID`) REFERENCES `targetaudience` (`TargetID`);

--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`);

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`);

--
-- Constraints for table `issues`
--
ALTER TABLE `issues`
  ADD CONSTRAINT `issues_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `customer` (`CustomerID`),
  ADD CONSTRAINT `issues_ibfk_2` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`);

--
-- Constraints for table `mediacontent`
--
ALTER TABLE `mediacontent`
  ADD CONSTRAINT `mediacontent_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`CartID`) REFERENCES `cart` (`CartID`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`OrderID`) REFERENCES `orders` (`OrderID`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`CategoryID`) REFERENCES `category` (`CategoryID`);

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`);

--
-- Constraints for table `variation`
--
ALTER TABLE `variation`
  ADD CONSTRAINT `variation_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
