

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `department` (
  `DepartID` int(40) NOT NULL,
  `DepartName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `empID` int(40) NOT NULL,
  `empname` varchar(255) NOT NULL,
  `DepartID` int(40) NOT NULL,
  `PosID` int(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `positions`
--

CREATE TABLE `positions` (
  `PosID` int(40) NOT NULL,
  `PosName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`DepartID`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`empID`);

--
-- Indexes for table `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`PosID`);

-- make department and positions ids auto-increment and add foreign key constraints
ALTER TABLE `department`
  MODIFY `DepartID` int(40) NOT NULL AUTO_INCREMENT;

ALTER TABLE `positions`
  MODIFY `PosID` int(40) NOT NULL AUTO_INCREMENT;

-- add foreign key constraints from employees to department and positions
ALTER TABLE `employees`
  ADD CONSTRAINT `fk_employees_department` FOREIGN KEY (`DepartID`) REFERENCES `department` (`DepartID`) ON UPDATE CASCADE ON DELETE RESTRICT,
  ADD CONSTRAINT `fk_employees_positions` FOREIGN KEY (`PosID`) REFERENCES `positions` (`PosID`) ON UPDATE CASCADE ON DELETE RESTRICT;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `empID` int(40) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
