/*
 Navicat MySQL Data Transfer

 Source Server         : dpwweb01
 Source Server Type    : MySQL
 Source Server Version : 50616
 Source Host           : 192.168.50.45
 Source Database       : bistroboss_dpw_01

 Target Server Type    : MySQL
 Target Server Version : 50616
 File Encoding         : utf-8

 Date: 03/19/2015 11:03:52 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `ChoiceGroupItems`
-- ----------------------------
DROP TABLE IF EXISTS `ChoiceGroupItems`;
CREATE TABLE `ChoiceGroupItems` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ChoiceGroup_id` int(4) unsigned NOT NULL DEFAULT '0',
  `ItemNumber` int(4) unsigned NOT NULL,
  `ChoiceItemName` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `choice_id_item_numer_ix` (`ChoiceGroup_id`,`ItemNumber`),
  CONSTRAINT `fk_ChoiceGroupItems_ChoiceGroups_Choicegroup_id` FOREIGN KEY (`ChoiceGroup_id`) REFERENCES `ChoiceGroups` (`ChoiceGroup_id`)
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `ChoiceGroupItems`
-- ----------------------------
BEGIN;
INSERT INTO `ChoiceGroupItems` VALUES ('1', '9240', '4052', 'White Chocolate'), ('2', '9250', '4012', ''), ('3', '9252', '4030', ''), ('5', '9240', '4050', ''), ('6', '9240', '4060', ''), ('7', '9250', '4010', null), ('8', '9250', '4014', null), ('9', '9250', '4016', null), ('10', '9252', '4028', null), ('11', '9252', '4032', null), ('12', '9252', '4034', null), ('13', '9012', '7012', null), ('14', '9012', '7112', null), ('15', '9012', '9999', null), ('16', '9030', '1010', null), ('17', '9030', '1012', null), ('18', '9030', '1014', null), ('19', '9008', '7008', null), ('20', '9008', '9999', null), ('21', '9004', '7004', ''), ('22', '9004', '9999', null), ('26', '9260', '4022', 'vvvvvvv'), ('27', '9008', '1714', ''), ('29', '9260', '4050', ''), ('32', '9240', '1510', 'tester'), ('33', '9252', '7004', ''), ('34', '9240', '1112', 'bnbnb'), ('35', '9240', '1524', 'bnbnb'), ('36', '9240', '4010', 'fgfgf'), ('37', '9252', '1720', 'xcxcxcx'), ('45', '9250', '1014', ''), ('48', '9252', '1012', 'test add'), ('53', '9252', '1110', 'TESTTEST'), ('54', '9800', '1155', 'condiment'), ('55', '9016', '7016', ''), ('56', '9016', '7116', ''), ('57', '9016', '9999', ''), ('58', '9020', '7020', ''), ('59', '9020', '7120', ''), ('60', '9020', '9999', ''), ('61', '9025', '1714', ''), ('62', '9025', '1712', ''), ('63', '9025', '1720', ''), ('64', '9025', '1750', ''), ('65', '9026', '9999', ''), ('66', '9026', '1714', ''), ('67', '9026', '1712', ''), ('68', '9026', '1710', ''), ('69', '9026', '1720', ''), ('70', '9112', '7012', ''), ('71', '9112', '7112', ''), ('72', '9112', '9999', ''), ('73', '9116', '7016', ''), ('74', '9116', '7116', ''), ('75', '9116', '9999', ''), ('76', '9120', '7020', ''), ('77', '9120', '7120', ''), ('78', '9120', '9999', ''), ('79', '9150', '1510', ''), ('80', '9150', '1512', ''), ('81', '9150', '1518', ''), ('82', '9150', '1520', ''), ('83', '9150', '1524', ''), ('84', '9150', '1526', ''), ('85', '9150', '1528', ''), ('86', '9150', '1530', ''), ('87', '9026', '1760', ''), ('88', '9025', '1760', ''), ('89', '9025', '9999', ''), ('90', '9160', '1110', ''), ('91', '9160', '1112', ''), ('93', '9180', '5010', ''), ('94', '9180', '5012', ''), ('95', '9180', '5014', ''), ('96', '9180', '5016', ''), ('97', '9180', '5018', ''), ('98', '9182', '5020', ''), ('99', '9182', '5022', ''), ('100', '9182', '5024', ''), ('101', '9182', '5026', ''), ('102', '9182', '5028', ''), ('103', '9182', '5030', ''), ('104', '9184', '5040', ''), ('105', '9184', '5042', ''), ('106', '9184', '5044', ''), ('107', '9186', '5050', ''), ('108', '9186', '5052', ''), ('109', '9186', '5054', ''), ('110', '9186', '5058', ''), ('111', '9188', '5070', ''), ('112', '9188', '5072', ''), ('113', '9188', '5074', ''), ('114', '9190', '5080', ''), ('115', '9190', '5082', ''), ('116', '9190', '5084', ''), ('119', '9194', '6030', ''), ('120', '9194', '6032', ''), ('121', '9194', '6034', ''), ('122', '9194', '6036', ''), ('123', '9194', '6038', ''), ('124', '9196', '6080', ''), ('125', '9197', '6070', ''), ('126', '9198', '6060', ''), ('127', '9001', '1010', 'tester'), ('129', '9001', '1110', 'jkjtuhh'), ('130', '9001', '1114', 'erererererere'), ('131', '9160', '1114', '');
COMMIT;

-- ----------------------------
--  Table structure for `ChoiceGroups`
-- ----------------------------
DROP TABLE IF EXISTS `ChoiceGroups`;
CREATE TABLE `ChoiceGroups` (
  `ChoiceGroup_id` int(4) unsigned NOT NULL,
  `ChoiceGroupName` varchar(50) NOT NULL,
  `ChoiceGroupType` char(1) DEFAULT NULL,
  `ChoiceGroupSalesUnit` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`ChoiceGroup_id`),
  KEY `cg01_ix` (`ChoiceGroup_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `ChoiceGroups`
-- ----------------------------
BEGIN;
INSERT INTO `ChoiceGroups` VALUES ('9001', 'Brian Choices', 'O', 'pump'), ('9004', '4oz Cup Choices', 'O', 'EA'), ('9008', '8oz Cup Choices', 'O', 'EA'), ('9012', '12oz  Cup - Hot', 'O', 'EA'), ('9016', '16oz  Cup - Hot', 'O', 'EA'), ('9020', '20oz  Cup - Hot', 'O', 'EA'), ('9025', 'Milk Choices ', 'O', 'oz'), ('9026', 'Milk Choices - FITNESS', 'O', 'oz'), ('9030', 'Espresso Beans  One Shot', 'O', 'shot'), ('9112', '12oz Cup - Cold', 'O', 'EA'), ('9116', '16oz Cup - Cold', 'O', 'EA'), ('9120', '20oz Cup - Cold', 'O', 'EA'), ('9150', 'Hot Tea Choices', 'O', 'scoop'), ('9160', 'Brewed Coffee Choices', 'O', 'oz'), ('9170', 'Coffee Pour-Over Choices', 'O', 'shot'), ('9180', 'Iced Coffee Frappe', 'O', 'half'), ('9182', 'Crème Frappe', 'O', 'half'), ('9184', 'Kidz Kreamz Frappe', 'O', 'half'), ('9186', 'Fit Frappe', 'O', 'half'), ('9188', 'Chai Mixes', 'O', 'half'), ('9190', 'Smoothies', 'O', 'oz'), ('9194', 'Oatmeal', 'O', 'EA'), ('9196', 'Soft Drink', 'O', 'EA'), ('9197', 'Salad', 'O', 'EA'), ('9198', 'Sandwich', 'O', 'EA'), ('9240', 'Syrup Choices One Pump', 'M', 'pump'), ('9250', 'Flavor Choices Group A', 'M', 'pump'), ('9252', 'Flavor Choices Group B', 'M', 'pump'), ('9260', 'Toppings', 'M', 'oz'), ('9800', 'Condiments', 'M', 'pump');
COMMIT;

-- ----------------------------
--  Table structure for `CompanyInfo`
-- ----------------------------
DROP TABLE IF EXISTS `CompanyInfo`;
CREATE TABLE `CompanyInfo` (
  `CompanyID` int(4) unsigned NOT NULL DEFAULT '0',
  `Company_Name` varchar(40) DEFAULT NULL,
  `Legal Name` varchar(40) DEFAULT NULL,
  `Addr1` varchar(40) DEFAULT NULL,
  `Addr2` varchar(40) DEFAULT NULL,
  `City` varchar(20) DEFAULT NULL,
  `State` varchar(2) DEFAULT NULL,
  `Zip` varchar(10) DEFAULT NULL,
  `Sales_Tax_id` varchar(20) DEFAULT NULL,
  `Fed_Tax_id` varchar(10) DEFAULT NULL,
  `Email` varchar(40) DEFAULT NULL,
  `WebSite` varchar(40) DEFAULT NULL,
  `Ship_Addr1` varchar(40) DEFAULT NULL,
  `Ship_Addr2` varchar(40) DEFAULT NULL,
  `Ship_City` varchar(20) DEFAULT NULL,
  `Ship_State` varchar(2) DEFAULT NULL,
  `Ship_Zip` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`CompanyID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `CompanyInfo`
-- ----------------------------
BEGIN;
INSERT INTO `CompanyInfo` VALUES ('1001', 'Fosko Coffee Barre', 'Fosko Coffee Barre, LLC', '8 S Palafox', '', 'Pensacola', 'FL', '32502', '1234567890', '9887654321', 'xxxx@foskocoffeebarre.com', 'http://www.foskocoffeebarre.com', '8 S Palafox', '', 'Pensacola', 'FL', '32502');
COMMIT;

-- ----------------------------
--  Table structure for `Customers`
-- ----------------------------
DROP TABLE IF EXISTS `Customers`;
CREATE TABLE `Customers` (
  `Customer_id` int(4) unsigned NOT NULL DEFAULT '0',
  `Name_Last` varchar(20) DEFAULT NULL,
  `Name_First` varchar(15) DEFAULT NULL,
  `Name_GoesBy` varchar(15) DEFAULT NULL,
  `Addr1` varchar(40) DEFAULT NULL,
  `Addr2` varchar(40) DEFAULT NULL,
  `City` varchar(20) DEFAULT NULL,
  `State` varchar(2) DEFAULT NULL,
  `Zip` varchar(10) DEFAULT NULL,
  `Phone` varchar(12) DEFAULT NULL,
  `Account_type` varchar(10) DEFAULT NULL,
  `LastMenuItem` int(4) unsigned DEFAULT NULL,
  `Email` varchar(40) DEFAULT NULL,
  `PrepayBalance` decimal(10,2) DEFAULT NULL,
  `DrinksSinceLastReward` int(11) DEFAULT NULL,
  `AmountSinceLastReward` decimal(10,2) DEFAULT NULL,
  `TotalDrinksPurchased` int(11) DEFAULT NULL,
  `TotalAmountSpent` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Customer_id`),
  KEY `CustomerNameIndex` (`Name_Last`),
  KEY `LastMenuItem` (`LastMenuItem`),
  CONSTRAINT `LastItemPurchased` FOREIGN KEY (`LastMenuItem`) REFERENCES `MenuItemList` (`MenuItem_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `Customers`
-- ----------------------------
BEGIN;
INSERT INTO `Customers` VALUES ('1050', 'Trout', 'Britney', '', '931 Scenic Hwy', '', 'Pensacola', 'AL', '32503', '850-292-0547', 'IN', '1010', 'britneylinn@gmail.com', '0.00', '3', '12.25', '17', '8.50'), ('1051', 'Harris', 'Heather', '', '590 Lander St', '', 'Cantonment', 'AL', '32533', '573-286-4443', 'IN', '1370', 'hak22@aol.com', '0.00', '0', '0.00', '0', '0.00'), ('1052', 'Thompson', 'Kimberly', 'Kimi', '5034 Faircloth St', '', 'Pace', 'FL', '32571', '850 723-0511', 'IN', '1141', 'kimithompson70@icloud.com', '0.00', '0', '0.00', '0', '0.00'), ('1053', 'Douby', 'Krystal', '', '1931 Bayberry Dr', '', 'Pembroke Pines', 'FL', '33024', '305-527-7839', 'IN', '1410', 'kd22@students.uwf.edu', '0.00', '0', '0.00', '0', '0.00'), ('1054', 'Russell', 'Meagan', '', '10 Azalea Dr.', '', 'Mary Esther', 'FL', '32564', '850 207-4638', 'IN', '1330', 'meagan.e.russell@gmail.com', '0.00', '0', '0.00', '0', '0.00'), ('1055', 'Hiekel', 'Rebecca', 'Becca', '4525 Hampton Bay Blvd', '', 'Milton', 'FL', '32583', '850-501-8503', 'IN', '1145', 'rebecca.hiekel@gmail.com', '0.00', '0', '0.00', '0', '0.00'), ('4444', 'Wilkins', 'Kevin', 'Kev-oh', '23 Hillcrest Rd', 'Apartment 17B', 'Mobile', 'AL', '36609', '809-443-9027', 'FA', '3055', 'kevin@kevin.com', '0.00', '0', '0.00', '0', '0.00'), ('5555', 'Jones', 'John', 'Johnny', '9876 Mudbrick Lane', '', 'Alpharetta', 'AL', '30045', '999-309-1212', 'GR', '2030', 'max@gmail.com', '0.00', '0', '50.00', '1', '4.56'), ('9999', 'Walk_In', 'Walk_In', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
COMMIT;

-- ----------------------------
--  Table structure for `EmployeeAccess`
-- ----------------------------
DROP TABLE IF EXISTS `EmployeeAccess`;
CREATE TABLE `EmployeeAccess` (
  `Employee_id` int(4) unsigned NOT NULL DEFAULT '0',
  `Register_Code` int(4) unsigned NOT NULL DEFAULT '0',
  `ManagerAccess` varchar(4) DEFAULT NULL,
  `CloudAccess` varchar(4) DEFAULT NULL,
  `Inventory_Code` int(4) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`Employee_id`),
  KEY `Register_Code` (`Register_Code`),
  CONSTRAINT `Employee_id` FOREIGN KEY (`Employee_id`) REFERENCES `Employees` (`Employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `EmployeeAccess`
-- ----------------------------
BEGIN;
INSERT INTO `EmployeeAccess` VALUES ('1050', '3333', 'N', 'N', '3333'), ('1051', '1051', 'N', 'N', '0'), ('1052', '1052', 'Y', 'Y', '4545'), ('1053', '1053', 'N', 'N', '0'), ('1054', '1054', 'Y', 'Y', '0'), ('1055', '1055', 'N', 'N', '0'), ('5555', '5555', 'N', 'N', '0');
COMMIT;

-- ----------------------------
--  Table structure for `Employees`
-- ----------------------------
DROP TABLE IF EXISTS `Employees`;
CREATE TABLE `Employees` (
  `Employee_id` int(4) unsigned NOT NULL DEFAULT '0',
  `Name_Last` varchar(30) DEFAULT NULL,
  `Name_First` varchar(30) DEFAULT NULL,
  `MiddleInitial` varchar(1) DEFAULT NULL,
  `SS_Num` varchar(10) DEFAULT NULL,
  `Addr1` varchar(40) DEFAULT NULL,
  `Addr2` varchar(40) DEFAULT NULL,
  `City` varchar(20) DEFAULT NULL,
  `State` varchar(2) DEFAULT NULL,
  `Zip` varchar(10) DEFAULT NULL,
  `Phone` varchar(12) DEFAULT NULL,
  `Email` varchar(40) DEFAULT NULL,
  `W4_Deductions` int(4) unsigned DEFAULT '0',
  `HireDate` date DEFAULT NULL,
  `Annual_Salary` decimal(10,2) DEFAULT NULL,
  `Hourly_Rate` decimal(10,2) DEFAULT NULL,
  `Commission` decimal(10,7) DEFAULT NULL,
  `MarriedOrSingle` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`Employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `Employees`
-- ----------------------------
BEGIN;
INSERT INTO `Employees` VALUES ('1050', 'Trout', 'Britney', '', '123457000', '931 Scenic Hwy', '', 'Pensacola', 'FL', '32503', '850-292-05', 'britneylinn@gmail.com', '0', '0000-00-00', '0.00', '12.00', '0.0000000', ''), ('1051', 'Harris', 'Heather', '', '123457000', '590 Lander St', '', 'Cantonment', 'FL', '32533', '573-286-44', 'hak22@aol.com', '0', '0000-00-00', '0.00', '12.00', '0.0000000', ''), ('1052', 'Thompson', 'Kimberly', '', '123457000', '5034 Faircloth St', '', 'Pace', 'FL', '32571', '850-723-0599', 'kimithompson70@icloud.com', '0', '2014-12-01', '25000.00', '12.00', '0.0000000', 'S'), ('1053', 'Bouby', 'Krystal', '', '123457000', '1931 Bayberry Dr', '', 'Pembroke Pines', 'AL', '33024', '305-527-7888', 'kd22@students.uwf.edu', '0', '2014-05-23', '0.00', '12.00', '0.0000000', 'M'), ('1054', 'Russell', 'Meagan', '', '123457000', '10 Azalea Dr.', '', 'Mary Esther', 'FL', '32564', '850 207-46', 'meagan.e.russell@gmail.com', '0', '0000-00-00', '0.00', '12.00', '0.0000000', ''), ('1055', 'Hiekel', 'Rebecca', '', '123457000', '4525 Hampton Bay Blvd', '', 'Milton', 'FL', '32583', '850-501-85', 'rebecca.hiekel@gmail.com', '0', '0000-00-00', '0.00', '12.00', '0.0000000', ''), ('4455', 'Test', 'Brian', '', '', '', '', '', 'AL', '', '543-987-0984', 'brian@test.com', '3', '2015-02-12', '40000.00', '8.75', '12.9999990', 'M'), ('5555', 'Tester', 'Test', 'T', '999999999', '', '', '', 'AL', '', '3334445555', 'test@test.com', '12', '2015-02-10', '25000.00', '4.00', '7.0000000', 'M'), ('9999', 'Specified', 'Not', '', '', '', '', '', 'AL', '', '5555555555', 'na', '0', '2014-01-01', '0.00', '0.00', '0.0000000', 'M');
COMMIT;

-- ----------------------------
--  Table structure for `GeneralLedger`
-- ----------------------------
DROP TABLE IF EXISTS `GeneralLedger`;
CREATE TABLE `GeneralLedger` (
  `AccountNumber` int(4) unsigned NOT NULL DEFAULT '0',
  `AccountName` varchar(40) DEFAULT NULL,
  `AccountType` varchar(20) DEFAULT NULL,
  `AllowJE` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`AccountNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `GeneralLedger`
-- ----------------------------
BEGIN;
INSERT INTO `GeneralLedger` VALUES ('1000', 'Checking - Wells Fargo', 'Bank', '0'), ('1005', 'Savings - Wells Fargo', 'Bank', '0'), ('1100', 'Cash in Drawer', '0', '0'), ('1110', 'Accounts Receivable', 'Bank', '0'), ('1120', 'Inventory Asset', '0', '0'), ('1200', 'Inventory - Everything But Food', '0', '0'), ('1210', 'Inventory - Food Concession', '0', '0'), ('1499', 'Undeposited Funds', '0', '0'), ('1500', 'Furniture and Equipment', '0', '0'), ('1550', 'Leasehold Improvements', '0', '0'), ('1600', 'Accumulated Depreciation', 'Bank', '0'), ('2000', 'Accounts Payable', '0', '0'), ('2050', 'Visa - Wells Fargo', '0', '0'), ('2100', 'Payroll Liabilities', '0', '0'), ('2200', 'Sales Tax Payable', 'Bank', '1'), ('2470', 'Taxes Collected', 'Credit Card', '0'), ('3000', 'Opening Balance Equity', '0', '0'), ('3090', 'Partner C Draws', '0', '0'), ('3100', 'Partner C Equity', '0', '0'), ('3110', 'Partner D Draws', '0', '0'), ('3120', 'Partner D Equity', '0', '0'), ('3200', 'Retained Earnings', '0', '0'), ('4100', 'Sales - Misc', 'Credit Card', '0'), ('4105', 'Sales - Espresso Based', '0', '0'), ('4110', 'Sales - Coffee Brewed', 'Bank', '0'), ('4120', 'Sales - Coffee PourOver', 'Bank', '1'), ('4125', 'Sales - Tea', 'Bank', '0'), ('4127', 'Sales - Blended Drinks', '0', '0'), ('4130', 'Sales - Food, Bakery', '0', '0'), ('4135', 'Sales - Food, Cold', '0', '0'), ('4600', 'Sales - Food Concession', '0', '0'), ('4610', 'Sales Discounts', '0', '0'), ('4700', 'Babysitting Services - PB', '0', '0'), ('4710', 'Babysitting Services - Non PB', '0', '0'), ('5100', 'COGS - Shipping & Misc', '0', '0'), ('5101', 'Merchant Account Fees', '0', '0'), ('5105', 'COGS - Espresso Based', '0', '0'), ('5110', 'COGS - Coffee Brewed', '0', '0'), ('5120', 'COGS - Coffee PourOver', '0', '0'), ('5125', 'COGS - Tea', '0', '0'), ('5127', 'COGS - Bkended Drinks', '0', '0'), ('5130', 'COGS - Food, Bakery', '0', '0'), ('5135', 'COGS - Food, Cold', '0', '0'), ('6000', 'Advertising and Promotion', '0', '0'), ('6040', 'Bank Service Charges', '0', '0'), ('6100', 'Business Licenses and Permits', '0', '0'), ('6130', 'Cash Over and Short', '0', '0'), ('6140', 'Charitable Contributions', '0', '0'), ('6170', 'Computer and Internet Expenses', '0', '0'), ('6175', 'TV Expense', '0', '0'), ('6240', 'Depreciation Expense', '0', '0'), ('6330', 'Insurance Expense', '0', '0'), ('6350', 'Janitorial Expense', '0', '0'), ('6360', 'Licenses and Permits', '0', '0'), ('6430', 'Meals and Entertainment', '0', '0'), ('6470', 'Miscellaneous Expense', '0', '0'), ('6490', 'Office Supplies', '0', '0'), ('6560', 'Payroll Expenses', '0', '0'), ('6650', 'Postage and Delivery', '0', '0'), ('6660', 'Printing and Reproduction', '0', '0'), ('6670', 'Professional Fees', '0', '0'), ('6710', 'Rent Expense', '0', '0'), ('6720', 'Repairs and Maintenance', '0', '0'), ('6730', 'Security Expense', '0', '0'), ('6810', 'Telephone Expense', 'Bank', '0'), ('6840', 'Travel Expense', '0', '0'), ('6850', 'Training and Certification', '0', '0'), ('6860', 'Utilities', '0', '0'), ('7020', 'Interest Income', '0', '0'), ('8844', 'TESTER', 'Bank', '0');
COMMIT;

-- ----------------------------
--  Table structure for `GeneralLedgerTransactions`
-- ----------------------------
DROP TABLE IF EXISTS `GeneralLedgerTransactions`;
CREATE TABLE `GeneralLedgerTransactions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `TransactionDate` datetime NOT NULL,
  `TransactionType` varchar(10) NOT NULL,
  `JournalCode` varchar(2) DEFAULT NULL,
  `TransactionReferenceNumber` varchar(10) NOT NULL,
  `AccountNumber` int(4) unsigned NOT NULL,
  `TransactionAmount` decimal(10,2) NOT NULL,
  `ReconciledDate` datetime DEFAULT NULL,
  `Memo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ix_gl_transactions_id` (`id`),
  UNIQUE KEY `ix_gl_transactions_unique_key` (`TransactionReferenceNumber`,`AccountNumber`),
  KEY `ix_gl_transactions_GL_Account` (`AccountNumber`),
  CONSTRAINT `fk_GL_AccountNumber` FOREIGN KEY (`AccountNumber`) REFERENCES `GeneralLedger` (`AccountNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=134 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `GeneralLedgerTransactions`
-- ----------------------------
BEGIN;
INSERT INTO `GeneralLedgerTransactions` VALUES ('1', '2015-02-26 13:11:16', 'manual', null, 'abcde12345', '1100', '100.00', null, 'TEST TEST TEST'), ('2', '2015-02-27 15:50:50', 'manual', null, '111111', '1005', '1.00', null, 'test'), ('3', '2015-02-27 17:09:02', 'manual', null, '111111', '1120', '122.00', null, 'test'), ('4', '2015-02-27 17:08:28', 'manual', null, '111111', '1110', '13.00', null, 'test'), ('5', '2015-02-27 16:07:26', 'manual', null, '666666', '1200', '165.00', null, 'test'), ('6', '2015-02-27 16:37:16', 'manual', null, '333333', '1005', '21.00', null, 'test'), ('7', '2015-02-27 16:44:18', 'manual', null, '654321', '1005', '99.00', null, 'test'), ('10', '2015-02-27 17:06:24', 'manual', null, 'awawa', '8844', '12.00', null, 'test'), ('12', '2015-02-27 17:08:51', 'manual', null, '11111155', '1110', '55.00', null, 'test'), ('13', '2015-03-04 23:00:47', 'manual', 'JE', 'AAAAAA', '3000', '100.00', '2015-03-04 23:00:47', 'test'), ('14', '2015-03-04 23:02:32', 'manual', 'JE', 'HHHHH', '1500', '150.00', '2015-03-04 23:02:32', 'test2'), ('15', '2015-03-05 16:30:44', 'manual', 'JE', 'eeeee', '1100', '120.00', '2015-03-05 16:30:44', 'test'), ('16', '2015-03-05 16:32:11', 'manual', 'JE', '32123', '2100', '12.70', '2015-03-05 16:32:11', 'test'), ('17', '2015-03-05 16:47:17', 'manual', 'JE', '987aaa', '2470', '99.00', '2015-03-05 16:47:17', 'test'), ('18', '2015-03-05 17:42:41', 'manual', 'JE', 'ffffff', '3000', '34.00', '2015-03-05 17:42:41', 'test'), ('19', '2015-03-05 18:00:53', 'manual', 'JE', 'aaaaAA', '1550', '1.00', '2015-03-05 18:00:53', 'test'), ('20', '2015-03-05 18:00:54', 'manual', 'JE', 'aaaaAA', '1005', '1.00', '2015-03-05 18:00:53', 'test'), ('21', '2015-03-05 21:16:06', 'manual', 'JE', 'sdsdsdsd', '1550', '22.00', '2015-03-05 21:16:06', 'test'), ('22', '2015-03-05 21:17:37', 'manual', 'JE', 'hhhhhh', '1110', '30.00', '2015-03-05 21:17:37', 'test'), ('23', '2015-03-05 21:32:34', 'manual', 'JE', 'LLLLLLL', '1500', '44.00', '2015-03-05 21:32:34', 'test'), ('24', '2015-03-05 21:34:55', 'manual', 'JE', 'GGGGGG', '2050', '65.00', '2015-03-05 21:34:55', 'test'), ('25', '2015-03-05 21:35:57', 'manual', 'JE', 'DDDDDDDD', '2050', '65.00', '2015-03-05 21:35:57', 'test'), ('26', '2015-03-05 21:37:09', 'manual', 'JE', 'UUUUUUU', '2050', '65.00', '2015-03-05 21:37:09', 'test'), ('27', '2015-03-05 21:38:21', 'manual', 'JE', 'QQQQQQQQ', '2050', '65.00', '2015-03-05 21:38:21', 'test'), ('28', '2015-03-05 21:39:51', 'manual', 'JE', 'WWWWWWW', '2050', '65.00', '2015-03-05 21:39:51', 'test'), ('29', '2015-03-05 21:41:17', 'manual', 'JE', 'RRRRRRR', '2050', '65.00', '2015-03-05 21:41:17', 'test'), ('30', '2015-03-05 21:41:57', 'manual', 'JE', 'JJJJJJJJJJ', '2050', '65.00', '2015-03-05 21:41:57', 'test'), ('38', '2015-03-05 21:48:08', 'manual', 'JE', 'XXXXXXX', '2050', '65.00', '2015-03-05 21:48:08', 'test'), ('39', '2015-03-05 21:48:08', 'manual', 'JE', 'XXXXXXX', '3000', '60.00', '2015-03-05 21:48:08', 'test'), ('40', '2015-03-05 21:48:08', 'manual', 'JE', 'XXXXXXX', '4110', '5.00', '2015-03-05 21:48:08', 'test'), ('62', '2015-03-06 16:45:52', 'manual', 'JE', 'SSSSSS', '1500', '50.00', '2015-03-06 16:45:52', 'test'), ('63', '2015-03-06 16:45:52', 'manual', 'JE', 'SSSSSS', '1005', '50.00', '2015-03-06 16:45:52', 'test'), ('70', '2015-03-06 19:54:54', 'manual', 'JE', 'JHGFDS', '1600', '1000.00', '2015-03-06 19:54:54', 'test'), ('71', '2015-03-06 19:54:54', 'manual', 'JE', 'JHGFDS', '1500', '900.00', '2015-03-06 19:54:54', 'test'), ('72', '2015-03-06 19:54:54', 'manual', 'JE', 'JHGFDS', '1000', '100.00', '2015-03-06 19:54:54', 'test'), ('80', '2015-03-06 20:52:29', 'manual', 'JE', 'DSEDS', '1600', '400.00', '2015-03-06 20:52:29', 'test'), ('81', '2015-03-06 20:52:29', 'manual', 'JE', 'DSEDS', '1200', '200.00', '2015-03-06 20:52:29', 'test'), ('82', '2015-03-06 20:52:29', 'manual', 'JE', 'DSEDS', '2470', '100.00', '2015-03-06 20:52:29', 'test'), ('83', '2015-03-06 20:52:29', 'manual', 'JE', 'DSEDS', '3100', '100.00', '2015-03-06 20:52:29', 'test'), ('84', '2015-03-06 21:28:34', 'manual', null, 'TESTER', '1120', '100.00', null, 'test'), ('85', '2015-03-06 21:29:57', 'manual', null, 'TESTER2', '2000', '333.00', null, 'test'), ('86', '2015-03-06 21:36:15', 'manual', 'JE', 'LEEBV', '1600', '9999.00', '2015-03-06 21:36:15', 'test'), ('87', '2015-03-06 21:36:15', 'manual', 'JE', 'LEEBV', '1005', '3333.00', '2015-03-06 21:36:15', 'test'), ('88', '2015-03-06 21:36:15', 'manual', 'JE', 'LEEBV', '1100', '3333.00', '2015-03-06 21:36:15', 'test'), ('89', '2015-03-06 21:36:15', 'manual', 'JE', 'LEEBV', '2050', '3333.00', '2015-03-06 21:36:15', 'test'), ('94', '2015-03-06 21:54:13', 'manual', 'JE', 'LSLSLSL', '1600', '9999.00', '2015-03-06 21:54:13', 'test'), ('95', '2015-03-06 21:54:13', 'manual', 'JE', 'LSLSLSL', '1005', '3333.00', '2015-03-06 21:54:13', 'test'), ('96', '2015-03-06 21:54:13', 'manual', 'JE', 'LSLSLSL', '1100', '3333.00', '2015-03-06 21:54:13', 'test'), ('97', '2015-03-06 21:54:13', 'manual', 'JE', 'LSLSLSL', '2050', '3333.00', '2015-03-06 21:54:13', 'test'), ('102', '2015-03-06 22:09:30', 'manual', 'JE', 'SWEWS', '3090', '343.00', '2015-03-06 22:09:30', 'test'), ('103', '2015-03-06 22:09:30', 'manual', 'JE', 'SWEWS', '1110', '343.00', '2015-03-06 22:09:30', 'test'), ('110', '2015-03-06 22:17:17', 'manual', 'JE', 'KDKSE', '4135', '343.00', '2015-03-06 22:17:17', 'test'), ('111', '2015-03-06 22:17:17', 'manual', 'JE', 'KDKSE', '2200', '343.00', '2015-03-06 22:17:17', 'test'), ('112', '2015-03-06 22:55:54', 'manual', 'JE', 'UURY', '2200', '321.00', '2015-03-06 22:55:54', 'test'), ('113', '2015-03-06 22:55:54', 'manual', 'JE', 'UURY', '1210', '321.00', '2015-03-06 22:55:54', 'test'), ('116', '2015-03-06 23:04:09', 'manual', 'JE', 'ZXSWER', '1120', '800.00', '2015-03-06 23:04:09', 'test'), ('117', '2015-03-06 23:04:09', 'manual', 'JE', 'ZXSWER', '1600', '400.00', '2015-03-06 23:04:09', 'test'), ('118', '2015-03-06 23:04:09', 'manual', 'JE', 'ZXSWER', '5130', '350.00', '2015-03-06 23:04:09', 'test'), ('119', '2015-03-06 23:04:09', 'manual', 'JE', 'ZXSWER', '6330', '50.00', '2015-03-06 23:04:09', 'test'), ('120', '2015-03-09 14:15:34', 'manual', 'JE', 'FFDDS', '1110', '400.00', '2015-03-09 14:15:34', 'test'), ('121', '2015-03-09 14:15:34', 'manual', 'JE', 'FFDDS', '1550', '300.00', '2015-03-09 14:15:34', 'test'), ('122', '2015-03-09 14:15:34', 'manual', 'JE', 'FFDDS', '2200', '88.00', '2015-03-09 14:15:34', 'test'), ('123', '2015-03-09 14:15:34', 'manual', 'JE', 'FFDDS', '3000', '12.00', '2015-03-09 14:15:34', 'test'), ('124', '2015-03-09 15:09:55', 'manual', 'JE', 'iiiiy', '1210', '400.00', '0000-00-00 00:00:00', 'test'), ('125', '2015-03-09 15:09:55', 'manual', 'JE', 'iiiiy', '1005', '-400.00', '0000-00-00 00:00:00', 'test');
COMMIT;

-- ----------------------------
--  Table structure for `Inventory`
-- ----------------------------
DROP TABLE IF EXISTS `Inventory`;
CREATE TABLE `Inventory` (
  `Store` smallint(2) unsigned DEFAULT NULL,
  `ItemNumber` int(4) unsigned NOT NULL DEFAULT '0',
  `ItemDescription` varchar(60) DEFAULT NULL,
  `GL_Account` int(4) unsigned DEFAULT NULL,
  `PurchaseUnit` varchar(10) DEFAULT NULL,
  `SalesUnit` varchar(10) DEFAULT NULL,
  `Conversion` float DEFAULT NULL,
  `ItemCost` decimal(10,4) DEFAULT NULL,
  `UPC` varchar(12) DEFAULT NULL,
  `Vendor1` int(4) unsigned DEFAULT '9999',
  `Vendor2` int(4) unsigned DEFAULT NULL,
  `QtyOnHand` float DEFAULT NULL,
  `LastUsedDate` date DEFAULT NULL,
  `OrderTrigger` float DEFAULT NULL,
  `NewOrderQty` float DEFAULT NULL,
  PRIMARY KEY (`ItemNumber`),
  KEY `ItemNameIndex` (`ItemDescription`),
  KEY `Vendor1` (`Vendor1`),
  KEY `Vendor2` (`Vendor2`),
  KEY `GL_Account` (`GL_Account`),
  CONSTRAINT `GL_IV_Account` FOREIGN KEY (`GL_Account`) REFERENCES `GeneralLedger` (`AccountNumber`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Supplier1` FOREIGN KEY (`Vendor1`) REFERENCES `Vendors` (`Vendor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Supplier2` FOREIGN KEY (`Vendor2`) REFERENCES `Vendors` (`Vendor_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `Inventory`
-- ----------------------------
BEGIN;
INSERT INTO `Inventory` VALUES ('0', '1000', 'COFFEE', '1200', '', '', '1', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '1010', 'Coffee Beans Espresso Sergios', '1200', 'lb', 'shot', '64', '8.0000', '', '1019', '9999', '150', '0000-00-00', '0', '0'), ('1', '1012', 'Coffee Beans Espresso Klatch FTO', '1200', 'lb', 'shot', '62', '1.8000', '', '1024', '9999', '19', '0000-00-00', '0', '0'), ('1', '1014', 'Coffee Beans Espresso Klatch DECAF', '1200', 'lb', 'shot', '64', '1.8000', '', '1024', '9999', '33', '0000-00-00', '0', '0'), ('1', '1110', 'Coffee Beans Brewe, Blue Thunder', '1200', 'lb', 'oz', '16', '8.0000', '', '1024', '9999', '125', '0000-00-00', '0', '0'), ('1', '1112', 'Coffee Beans Brewe, Klatch Medium Blend', '1200', 'lb', 'oz', '16', '8.0000', '', '1024', '9999', '0', '0000-00-00', '0', '0'), ('1', '1114', 'Coffee Beans Brewe, Klatch Breakfast Blend', '1200', 'lb', 'oz', '16', '8.0000', '', '1024', '9999', '300', '0000-00-00', '0', '0'), ('0', '1500', 'TEA', '1200', '', '', '1', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '1510', 'Tea, Black, Earl Gray', '1200', 'lb', 'scoop', '64', '19.0000', '', '1019', '9999', '10', '0000-00-00', '0', '0'), ('1', '1512', 'Tea, Black, Chinese Breakfast ', '1200', 'lb', 'scoop', '64', '18.0000', '', '1019', '9999', '10', '0000-00-00', '0', '0'), ('1', '1518', 'Tea, Green,  Jasmine Green', '1200', 'lb', 'scoop', '1', '18.0000', '234565456765', '1019', '9999', '10', '0000-00-00', '0', '0'), ('1', '1520', 'Tea, Green,  Gunpowder Green', '1200', 'lb', 'scoop', '64', '15.0000', '', '1019', '9999', '10', '0000-00-00', '0', '0'), ('1', '1524', 'Tea, White,  Orange Spice', '1200', 'lb', 'scoop', '64', '18.0000', '', '1019', '9999', '10', '0000-00-00', '0', '0'), ('1', '1526', 'Tea, Herbal, Chamomille Lemon', '1200', 'lb', 'scoop', '64', '15.0000', '', '1019', '9999', '10', '0000-00-00', '0', '0'), ('1', '1528', 'Tea, Herbal, Ruby Chai', '1200', 'lb', 'scoop', '64', '16.0000', '', '1019', '9999', '10', '0000-00-00', '0', '0'), ('1', '1530', 'Tea, Oolong, Ti Kuan Yin', '1200', 'lb', 'scoop', '64', '34.0000', '', '1019', '9999', '99', '0000-00-00', '0', '0'), ('0', '1700', 'HOT CHAI', '1200', '', '', '1', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '1705', 'Oregon Chai 1.5 Gal Foodservice Box', '1200', 'na', 'oz', '1', '24.0000', '111222333444', '1019', '9999', '0', '0000-00-00', '0', '5'), ('1', '1710', 'Milk, Skim', '1200', 'gal', 'oz', '128', '3.8000', '', '9999', '9999', '100', '0000-00-00', '0', '0'), ('1', '1712', 'Milk, 2%', '1200', 'gal', 'oz', '128', '3.8000', '', '9999', '9999', '5', '0000-00-00', '0', '0'), ('1', '1714', 'Milk, Whole', '1200', 'gal', 'oz', '128', '3.8000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '1720', 'Milk, Half & Half, Carton', '1200', 'qt', 'oz', '32', '2.1600', '', '9999', '9999', '66', '0000-00-00', '0', '0'), ('1', '1722', 'Milk, Heavy Cream', '1200', 'qt', 'oz', '32', '4.1200', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '1750', 'Milk, Almond', '1200', 'half-gal', 'oz', '64', '2.8600', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '1760', 'Milk, Soy', '1200', 'qt', 'oz', '32', '2.7900', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('0', '2000', 'DAIRY and SUBSTITUTES', '1200', '', '', '1', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('0', '3000', 'CONDIMENTS', '1200', '', '', '1', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '3010', 'Sugar, Granulated White, Bulk', '1200', 'lb', 'tsp', '1', '0.0000', '', '1030', '9999', '66', '0000-00-00', '0', '0'), ('1', '3020', 'Sugar, Confectioners, White', '1200', 'lb', 'tsp', '1', '0.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '3030', 'Sweetener, Pink Packets', '1200', 'case', 'packet', '2000', '14.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '3032', 'Sweetener, Blue Packets', '1200', 'case', 'packet', '2000', '11.0000', '', '1030', '9999', '5', '0000-00-00', '0', '0'), ('1', '3034', 'Sweetener, Yellow Packets', '1200', 'case', 'packet', '2000', '17.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '3036', 'Sweetener, Sugar, White Packets', '1200', 'case', 'packet', '2000', '6.0000', '', '1030', '9999', '2015', '0000-00-00', '0', '0'), ('1', '3050', 'Half & Half, Packets', '1200', 'case', 'packet', '360', '16.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '3060', 'Creamer Packets, Non-Dairy', '1200', 'case', 'packet', '1000', '14.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('0', '4000', 'SYRUPS and FLAVORS', '1200', '', '', '1', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '4010', 'Syrup, Amaretto', '1200', 'Liter', 'pump', '84', '6.9500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '4012', 'Syrup, Banana', '1200', 'Liter', 'pump', '84', '6.9500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '4014', 'Syrup, Blackberry', '1200', 'Liter', 'pump', '84', '6.9500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '4016', 'Syrup, Butterscotch', '1200', 'Liter', 'pump', '84', '6.9500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '4018', 'Syrup, Caramel', '1200', 'Liter', 'pump', '84', '6.9500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '4020', 'Syrup, Cinnamon Bun', '1200', 'Literx.75', 'pump', '63', '6.9500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '4022', 'Syrup, Chocolate', '1200', 'Liter', 'pump', '84', '6.9500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '4024', 'Syrup, Chocolate Mint', '1200', 'Literx.75', 'pump', '63', '6.9500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '4026', 'Syrup, Syrup, Coffee', '1200', 'Liter', 'pump', '84', '6.9500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '4028', 'Syrup, French Vanilla', '1200', 'Liter', 'pump', '84', '6.9500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '4030', 'Syrup, Hazelnut', '1200', 'Liter', 'pump', '84', '6.9500', '', '1019', '9999', '88', '0000-00-00', '0', '0'), ('1', '4032', 'Syrup, Pure Cane', '1200', 'Liter', 'pump', '84', '6.9500', '', '1019', '9999', '88', '0000-00-00', '0', '0'), ('1', '4034', 'Syrup, Raspberry', '1200', 'Liter', 'pump', '84', '6.9500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '4036', 'Syrup, Strawberry', '1200', 'Liter', 'pump', '84', '6.9500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '4038', 'Syrup, Vanilla', '1200', 'Liter', 'pump', '84', '6.9500', '', '1019', '9999', '88', '0000-00-00', '0', '0'), ('1', '4050', 'Chocolate, Sauce  Ghiradelli Black Label', '1200', 'half-gal', 'PUMP', '128', '12.5000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '4052', 'White Chocolate, Sauce Ghiradelli', '1200', 'half-gal', 'PUMP', '128', '14.5000', '', '1019', '9999', '199', '0000-00-00', '0', '0'), ('1', '4060', 'Caramel, Sauce', '1200', 'half-gal', 'PUMP', '128', '14.5000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '4062', 'Chocolate Powder, Ghiradelli', '1200', 'half-gal', 'TBSP', '128', '12.5000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('0', '5000', 'BASES and MIXES', '1200', '', '', '1', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '5010', 'Ice Coffee Mix, Caramel Latte', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5012', 'Ice Coffee Mix, Chocolate Peanut Butter', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5014', 'Ice Coffee Mix, Heath Mocha', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5016', 'Ice Coffee Mix, Coffee', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5018', 'Ice Coffee Mix, Kona Mocha', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5020', 'Crème Frappe Mix, Black Cherry', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5022', 'Crème Frappe Mix, Caramel Crème', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5024', 'Crème Frappe Mix, Cookies & Cream', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5026', 'Crème Frappe Mix, Dragonfly Coconut', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5028', 'Crème Frappe Mix, New York Cheesecake', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5030', 'Crème Frappe Mix, Peaches & Cream', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5040', 'Kidz Kreamz, Bubble Gum', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5042', 'Kidz Kreamz, Cotton Candy', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5044', 'Kidz Kreamz, Orange Cream', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5050', 'Fit Frappe, Chai', '1200', '3lb', 'half-cup', '96', '32.5000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5052', 'Fit Frappe, Chocolate', '1200', '3lb', 'half-cup', '96', '32.5000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5054', 'Fit Frappe, Mocha', '1200', '3lb', 'half-cup', '96', '32.5000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5058', 'Fit Frappe, Espresso', '1200', '3lb', 'half-cup', '96', '32.5000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5070', 'Big Train Chocolate Chai Mix', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5072', 'Big Train Vanilla Chai Mix', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5074', 'Big Train Spiced Chai Mix', '1200', '3.5lb', 'half-cup', '112', '17.7500', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5080', 'Smoothie, Monin Pina Colada', '1200', '46oz', 'oz', '46', '7.0000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5082', 'Smoothie, Monin Mango Manque', '1200', '46oz', 'oz', '46', '7.0000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '5084', 'Smoothie, Monin Strawberry Fraise', '1200', '46oz', 'oz', '46', '7.0000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('0', '6000', 'FOOD', '1200', '', '', '1', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '6010', 'Bakery, Brownie', '1210', 'case', 'ea', '24', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '6012', 'Bakery, Cookie', '1210', 'case', 'ea', '24', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '6014', 'Bakery, Croissant', '1210', 'case', 'ea', '24', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '6016', 'Bakery, Muffins', '1210', 'case', 'ea', '24', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '6018', 'Bakery, Scones', '1210', 'case', 'ea', '24', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '6030', 'Oatmeal,  Kick Start', '1200', 'case', 'ea', '12', '23.4000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '6032', 'Oatmeal,  Mostly Sunny', '1200', 'case', 'ea', '12', '23.4000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '6034', 'Oatmeal,  R U Nuts', '1200', 'case', 'ea', '12', '23.4000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '6036', 'Oatmeal,  Not Guilty', '1200', 'case', 'ea', '12', '23.4000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '6038', 'Oatmeal,  Old School', '1200', 'case', 'ea', '12', '23.4000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '6060', 'Cold Case, Sandwich ', '1210', 'ea', 'ea', '1', '6.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '6070', 'Cold Case, Salad ', '1210', 'ea', 'ea', '1', '7.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '6080', 'Soft Drink', '1210', 'ea', 'ea', '1', '1.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '6085', 'Bottled Water', '1210', 'ea', 'ea', '1', '1.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('0', '7000', 'PAPER and PLASTIC', '1200', '', '', '1', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '7004', 'Cup, Paper, 4 oz', '1200', 'case', 'ea', '1000', '30.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '7008', 'Cup, Paper, 8 oz', '1200', 'case', 'ea', '1000', '37.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '7012', 'Cup, Paper, 12 oz', '1200', 'case', 'ea', '1000', '50.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '7016', 'Cup, Paper, 16 oz', '1200', 'case', 'ea', '1000', '55.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '7020', 'Cup, Paper, 20 oz', '1200', 'case', 'ea', '600', '40.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '7025', 'Lid,  Black w SipHole', '1200', 'xase', 'ea', '1000', '36.0000', '', '1030', '9999', '100', '0000-00-00', '0', '0'), ('1', '7112', 'Cup, Plastic 12 oz', '1200', 'case', 'ea', '1000', '65.0000', '', '1030', '9999', '100', '0000-00-00', '0', '0'), ('1', '7116', 'Cup, Plastic 16 oz', '1200', 'case', 'ea', '1000', '80.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '7120', 'Cup, Plastic 20 oz', '1200', 'case', 'ea', '1000', '95.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '7125', 'Lid,  Clear, Flat w Straw Hole', '1200', 'case', 'ea', '1000', '40.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '7126', 'Lid,  Clear, Dome  w Straw Hole', '1200', 'case', 'ea', '1000', '53.0000', '', '1030', '9999', '1000', '0000-00-00', '0', '0'), ('1', '7210', 'Straws, Wrapped', '1200', 'case', 'ea', '12000', '35.0000', '', '1030', '9999', '10000', '0000-00-00', '0', '0'), ('1', '7212', 'Stir Plugs', '1200', 'case', 'ea', '2000', '60.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '7216', 'Sleeves', '1200', 'case', 'ea', '1000', '0.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '7218', 'Multi-Cup Holders', '1200', 'case', 'ea', '1000', '0.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '7220', 'Labels, Paper Oval', '1200', 'case', 'ea', '1000', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '7222', 'Labels, Clear, Oval', '1200', 'case', 'ea', '1000', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '7230', 'Bakery Paper', '1200', 'case', 'ea', '1000', '0.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '7232', 'Bags,  Whit, Small', '1200', 'case', 'ea', '1000', '0.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '7234', 'Bags, White, Medium', '1200', 'case', 'ea', '1000', '0.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '7310', 'Filters, Tea, T-Sac', '1200', 'case', 'ea', '1000', '12.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '7312', 'Filters, Coffee, Bunn', '1200', 'case', 'ea', '1000', '12.0000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '7314', 'Filters, Tea, Bunn', '1200', 'case', 'ea', '1000', '12.0000', '', '1019', '9999', '0', '0000-00-00', '0', '0'), ('1', '8214', 'Napkins', '1200', 'case', 'ea', '4000', '10.0000', '', '1030', '9999', '0', '0000-00-00', '0', '0'), ('1', '8877', 'Nestle Hot Chocolate', '1200', 'na', 'na', '1', '68.0000', '993421887555', '1030', '1031', '25', null, '10', '50'), ('0', '9000', 'CHOICE GROUPS', '1200', '', '', '1', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0'), ('1', '9999', 'NO ITEM', '1200', 'na', 'na', '1', '0.0000', '', '9999', '9999', '0', '0000-00-00', '0', '0');
COMMIT;

-- ----------------------------
--  Table structure for `InventoryTransactions`
-- ----------------------------
DROP TABLE IF EXISTS `InventoryTransactions`;
CREATE TABLE `InventoryTransactions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ItemNumber` int(4) unsigned NOT NULL DEFAULT '0',
  `Sales_DateTime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `Store_Num` int(2) unsigned NOT NULL DEFAULT '0',
  `Register_Num` int(2) unsigned NOT NULL DEFAULT '0',
  `Qty` float DEFAULT NULL,
  `SalesUnit` varchar(10) DEFAULT NULL,
  `TotalCostAtTime` decimal(10,2) DEFAULT NULL,
  `TransactionType` varchar(20) DEFAULT NULL,
  `Employee_id` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ix_primary` (`ItemNumber`,`Sales_DateTime`,`Store_Num`,`Register_Num`),
  CONSTRAINT `fk_InventoryTransactions_Inventory_ItemNumber` FOREIGN KEY (`ItemNumber`) REFERENCES `Inventory` (`ItemNumber`) ON DELETE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `InventoryTransactions`
-- ----------------------------
BEGIN;
INSERT INTO `InventoryTransactions` VALUES ('1', '1012', '2015-02-05 13:40:49', '1', '1', '50', 'shot', '99.99', null, null), ('2', '4010', '2014-12-25 17:30:22', '1', '1', '5', 'pump', '0.37', null, null), ('3', '7020', '2014-12-25 17:30:22', '1', '1', '2', 'ea', '0.16', null, null), ('7', '1014', '2015-02-05 11:33:08', '1', '1', '3', 'pump', '99.99', null, null), ('9', '1112', '2015-02-05 11:33:12', '1', '1', '4', 'pump', '99.99', null, null), ('10', '1110', '2015-02-04 16:04:11', '1', '1', '4', 'EA', '0.00', null, null), ('11', '1014', '2015-02-04 16:04:38', '1', '1', '111', 'shot', '0.00', null, null), ('12', '1012', '2015-02-05 13:40:35', '1', '1', '100', 'shot', '99.99', null, null), ('15', '1010', '2015-02-05 13:38:08', '1', '1', '10', 'EA', '99.99', null, null), ('16', '1110', '2015-02-04 16:13:29', '1', '1', '22', 'pump', '99.99', null, null), ('17', '1012', '2015-02-04 16:14:41', '1', '1', '88', 'shot', '99.99', null, null), ('18', '1518', '2015-02-05 10:42:35', '1', '1', '56', 'half', '99.99', null, null), ('19', '1012', '2015-02-05 11:08:34', '1', '1', '16', 'shot', '99.99', null, null), ('20', '1524', '2015-02-05 11:16:40', '1', '1', '5', 'scoop', '99.99', null, null), ('21', '1510', '2015-02-05 13:37:37', '1', '1', '44', 'scoop', '99.99', null, null), ('22', '1014', '2015-02-13 21:05:18', '1', '1', '76', 'oz', '99.99', null, null), ('23', '1014', '2015-02-13 21:06:10', '1', '1', '76', 'oz', '99.99', null, null), ('24', '1014', '2015-02-13 21:06:46', '1', '1', '76', 'oz', '99.99', null, null), ('25', '1014', '2015-02-13 21:06:59', '1', '1', '20', 'pump', '99.99', null, null), ('26', '1112', '2015-02-13 21:07:09', '1', '1', '4', 'scoop', '99.99', null, null), ('27', '1112', '2015-02-13 21:07:17', '1', '1', '121', 'EA', '99.99', null, null), ('28', '1524', '2015-02-13 21:07:31', '1', '1', '44', 'scoop', '99.99', null, null), ('29', '1524', '2015-02-13 21:07:41', '1', '1', '45', 'scoop', '99.99', null, null), ('30', '1510', '2015-02-13 21:07:56', '1', '1', '100', 'scoop', '99.99', null, null), ('31', '1712', '2015-02-13 21:18:53', '1', '1', '87', 'half', '99.99', null, null), ('32', '1712', '2015-02-13 21:32:59', '1', '1', '500', 'oz', '99.99', null, null), ('34', '1712', '2015-02-13 21:33:16', '1', '1', '2', 'EA', '99.99', null, null), ('35', '1010', '2015-02-20 22:16:32', '1', '1', '66', 'ea', '99.99', null, null), ('36', '1530', '2015-02-20 22:22:22', '1', '1', '200', 'ea', '99.99', null, null), ('37', '3032', '2015-02-20 22:22:22', '1', '1', '5', 'ea', '99.99', null, null), ('38', '3036', '2015-02-20 22:22:22', '1', '1', '2015', 'ea', '99.99', null, null), ('39', '1010', '2015-02-23 15:48:25', '1', '1', '19', 'ea', '99.99', null, null), ('40', '1010', '2015-02-23 15:48:49', '1', '1', '1', 'ea', '99.99', null, null), ('41', '1510', '2015-02-23 15:49:08', '1', '1', '5', 'ea', '99.99', null, null), ('42', '1512', '2015-02-23 15:49:08', '1', '1', '5', 'ea', '99.99', null, null), ('43', '1518', '2015-02-23 15:49:08', '1', '1', '5', 'ea', '99.99', null, null), ('44', '1520', '2015-02-23 15:49:08', '1', '1', '5', 'ea', '99.99', null, null), ('45', '1524', '2015-02-23 15:49:08', '1', '1', '5', 'ea', '99.99', null, null), ('46', '1526', '2015-02-23 15:49:08', '1', '1', '5', 'ea', '99.99', null, null), ('47', '1528', '2015-02-23 15:49:08', '1', '1', '5', 'ea', '99.99', null, null), ('48', '1530', '2015-02-23 15:49:08', '1', '1', '99', 'ea', '99.99', null, null), ('49', '1010', '2015-02-24 15:38:50', '1', '1', '25', 'ea', '99.99', null, null), ('50', '1012', '2015-02-24 16:44:08', '1', '1', '-1', 'ea', '99.99', null, null), ('51', '1012', '2015-02-24 16:44:23', '1', '1', '1', 'ea', '99.99', null, null), ('52', '1012', '2015-02-24 16:45:13', '1', '1', '-99', 'ea', '99.99', null, null), ('53', '1010', '2015-02-24 16:45:35', '1', '1', '-50', 'ea', '99.99', null, null), ('54', '1010', '2015-02-24 17:19:08', '1', '1', '150', 'ea', '99.99', 'HC', '1050'), ('55', '1110', '2015-02-24 20:40:35', '1', '1', '5', 'ea', '99.99', 'QA', '1050'), ('56', '1012', '2015-02-24 20:40:53', '1', '1', '18', 'ea', '99.99', 'QA', '1050'), ('57', '1010', '2015-02-26 19:20:04', '1', '1', '22', 'oz', '99.99', null, null), ('58', '1112', '2015-02-26 21:24:36', '1', '1', '2', 'oz', '99.99', null, null), ('59', '1012', '2015-02-26 22:58:27', '1', '1', '100', 'oz', '99.99', null, null), ('60', '1012', '2015-02-26 23:00:01', '1', '1', '11', 'oz', '99.99', null, null), ('61', '1014', '2015-03-04 16:37:36', '1', '1', '5', 'oz', '99.99', null, null), ('62', '1112', '2015-03-04 16:38:20', '1', '1', '669', 'pump', '99.99', null, null), ('63', '1114', '2015-03-09 14:25:14', '1', '1', '300', 'ea', '99.99', 'HC', '1050'), ('64', '1712', '2015-03-09 14:25:14', '1', '1', '5', 'ea', '99.99', 'QA', '1050');
COMMIT;

-- ----------------------------
--  Table structure for `MenuItemList`
-- ----------------------------
DROP TABLE IF EXISTS `MenuItemList`;
CREATE TABLE `MenuItemList` (
  `MenuItem_id` int(4) unsigned NOT NULL DEFAULT '0',
  `MenuItemName` varchar(40) NOT NULL,
  `GL_Sales_Account` int(4) unsigned NOT NULL,
  `GL_COGS_Account` int(4) unsigned NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `Cost` decimal(10,2) DEFAULT '0.00',
  PRIMARY KEY (`MenuItem_id`),
  KEY `MenuItemIndex` (`MenuItemName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `MenuItemList`
-- ----------------------------
BEGIN;
INSERT INTO `MenuItemList` VALUES ('1010', 'Espresso Single', '4105', '5105', '1.65', '0.00'), ('1020', 'Espresso Double', '4105', '5105', '2.15', '0.00'), ('1030', 'Espresso Con Panna Single', '4105', '5105', '2.05', '0.00'), ('1040', 'Espresso Con Panna Double', '4105', '5105', '2.55', '0.00'), ('1050', 'Espresso Macchiato Single', '4105', '5105', '2.05', '0.00'), ('1060', 'Espresso Macchiato Double', '4105', '5105', '2.55', '0.00'), ('1070', 'Americano 12', '4105', '5105', '2.45', '0.00'), ('1080', 'Americano 16 ', '4105', '5105', '2.95', '0.00'), ('1090', 'Americano 20', '4105', '5105', '3.45', '0.00'), ('1110', 'Latte 12', '4105', '5105', '2.85', '0.00'), ('1111', 'Latte 16', '4105', '5105', '3.40', '0.00'), ('1112', 'Latte 20', '4105', '5105', '3.90', '0.00'), ('1115', 'Mocha Latte 12', '4105', '5105', '2.85', '0.00'), ('1116', 'Mocha Latte 16', '4105', '5105', '3.40', '0.00'), ('1117', 'Mocha Latte 20', '4105', '5105', '3.90', '0.00'), ('1120', 'Caramel Macchiato  12', '4105', '5105', '2.85', '0.00'), ('1121', 'Caramel Macchiato 16', '4105', '5105', '3.40', '0.00'), ('1122', 'Caramel Macchiato 20', '4105', '5105', '3.90', '0.00'), ('1125', 'Breve\' Latte 12', '4105', '5105', '3.15', '0.00'), ('1126', 'Breve\' Latte 16', '4105', '5105', '4.50', '0.00'), ('1127', 'Breve\' Latte 20', '4105', '5105', '4.95', '0.00'), ('1130', 'Latte 12 Iced', '4105', '5105', '2.85', '0.00'), ('1131', 'Latte 16 Iced', '4105', '5105', '3.40', '0.00'), ('1132', 'Latte 20 Iced', '4105', '5105', '3.90', '0.00'), ('1140', 'Cappuccino 12', '4105', '5105', '2.85', '0.00'), ('1141', 'Cappuccino 16', '4105', '5105', '3.40', '0.00'), ('1142', 'Cappuccino 20', '4105', '5105', '3.90', '0.00'), ('1145', 'Chocolate Cappuccino 12', '4105', '5105', '2.85', '0.00'), ('1146', 'Chocolate Cappuccino 16', '4105', '5105', '3.40', '0.00'), ('1147', 'Chocolate Cappuccino 20', '4105', '5105', '3.90', '0.00'), ('1150', 'Cappuccino 12 Iced', '4105', '5105', '2.85', '0.00'), ('1151', 'Cappuccino 16 Iced', '4105', '5105', '3.40', '0.00'), ('1152', 'Cappuccino 20 iced', '4105', '5105', '3.90', '0.00'), ('1210', 'Coffee Brewed 12', '4110', '5110', '2.25', '0.00'), ('1220', 'Coffee Brewed 16', '4110', '5110', '2.45', '0.00'), ('1230', 'Coffee Brewed 20', '4110', '5110', '2.95', '0.00'), ('1240', 'Coffee Single-Pour 16', '4120', '5120', '2.95', '0.00'), ('1260', 'Cafe\' Au Lait 12', '4110', '5110', '3.00', '0.00'), ('1270', 'Cafe\' Au Lait 16', '4110', '5110', '0.00', '0.00'), ('1280', 'Cafe\' Au Lait 20', '4110', '5110', '3.45', '0.00'), ('1290', 'Iced Coffee 16', '4110', '5110', '2.45', '0.00'), ('1295', 'Iced Coffee 20', '4110', '5110', '2.95', '0.00'), ('1310', 'Chai Latte 12', '4125', '5125', '2.65', '0.00'), ('1320', 'Chai Latte 16', '4125', '5125', '2.95', '0.00'), ('1330', 'Chai Latte 20', '4125', '5125', '3.45', '0.00'), ('1350', 'Tea Single-Brew 16', '4125', '5125', '2.45', '0.00'), ('1360', 'Tea Single-Brew 20', '4125', '5125', '2.65', '0.00'), ('1370', 'Hot Chocolate 12', '4127', '5127', '2.85', '0.00'), ('1380', 'Hot Chocolate 16', '4127', '5127', '3.40', '0.00'), ('1390', 'Hot Chocolate 20', '4127', '5127', '3.95', '0.00'), ('1410', 'Iced Tea 16', '4125', '5125', '2.45', '0.00'), ('1420', 'Iced Tea 20', '4125', '5125', '2.95', '0.00'), ('1510', 'Iced Coffee Frappe ', '4127', '5127', '3.40', '0.00'), ('1520', 'Creme Frappe', '4127', '5127', '3.40', '0.00'), ('1530', 'Kidz Kreamz Frappe', '4127', '5127', '3.40', '0.00'), ('1540', 'Chai Mixes', '4127', '5127', '3.40', '0.00'), ('1550', 'Fitness Frappe', '4127', '5127', '3.40', '0.00'), ('1560', 'Custom Frappe', '4127', '5127', '3.40', '0.00'), ('1570', 'Smoothie', '4127', '5127', '3.40', '0.00'), ('2010', 'Bagel', '4130', '5130', '1.50', '0.00'), ('2015', 'Brownie', '4130', '5130', '1.00', '0.00'), ('2020', 'Cookie', '4130', '5130', '1.00', '0.00'), ('2025', 'Muffin', '4130', '5130', '1.50', '0.00'), ('2030', 'Scone', '4130', '5130', '1.50', '0.00'), ('2050', 'Oatmeal', '4130', '5130', '1.50', '0.00'), ('3010', 'Salad ', '4135', '5135', '3.50', '0.00'), ('3015', 'Sandwich', '4135', '5135', '2.50', '0.00'), ('3050', 'Soft Drink', '4135', '5135', '1.50', '0.00'), ('3055', 'Water', '4135', '5135', '1.50', '0.00'), ('4010', 'FoskoKids 1 hour', '4710', '5100', '10.00', '0.00'), ('4015', 'FoskoKids 30 minutes', '4710', '5100', '5.00', '0.00'), ('4020', 'PB-Kids 1 hour', '4700', '5100', '10.00', '0.00'), ('4026', 'PB-Kids 30 minutes', '4700', '5100', '5.00', '0.00'), ('5010', 'Misc Non-Taxable', '4100', '5100', '0.00', '0.00'), ('5030', 'Misc Taxable - 12', '4100', '5100', '0.00', '0.00'), ('5035', 'Misc Taxable - 16', '4100', '5100', '0.00', '0.00'), ('5040', 'Misc Taxable - 20', '4100', '5100', '0.00', '0.00'), ('5050', 'Gratuity', '4100', '5100', '0.00', '0.00'), ('9999', 'No Item', '4100', '5100', '0.00', '0.00');
COMMIT;

-- ----------------------------
--  Table structure for `MenuItemListIngredients`
-- ----------------------------
DROP TABLE IF EXISTS `MenuItemListIngredients`;
CREATE TABLE `MenuItemListIngredients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `MenuItem_id` int(4) unsigned NOT NULL,
  `Ingredient_id` int(4) unsigned NOT NULL,
  `Qty` decimal(12,6) unsigned NOT NULL DEFAULT '0.000000',
  `Unit` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ix_menuItemID_Ingredient` (`MenuItem_id`,`Ingredient_id`),
  CONSTRAINT `fk_MenuItemIngredients_MenuItemList_MenuItem_id` FOREIGN KEY (`MenuItem_id`) REFERENCES `MenuItemList` (`MenuItem_id`) ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=367 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `MenuItemListIngredients`
-- ----------------------------
BEGIN;
INSERT INTO `MenuItemListIngredients` VALUES ('1', '1010', '9004', '2.000000', 'EA'), ('2', '1010', '9030', '1.000000', 'shot'), ('3', '1020', '9004', '2.000000', 'EA'), ('4', '1020', '9030', '2.000000', 'shot'), ('5', '1030', '1722', '1.000000', 'oz'), ('6', '1030', '9008', '2.000000', 'EA'), ('7', '1030', '9030', '1.000000', 'shot'), ('8', '1040', '1722', '1.000000', 'oz'), ('9', '1040', '9008', '2.000000', 'EA'), ('10', '1040', '9030', '2.000000', 'shot'), ('11', '1050', '9008', '2.000000', 'EA'), ('12', '1050', '9025', '1.000000', 'oz'), ('13', '1050', '9030', '1.000000', 'shot'), ('14', '1060', '9008', '2.000000', 'EA'), ('15', '1060', '9025', '1.000000', 'oz'), ('16', '1060', '9030', '2.000000', 'shot'), ('17', '1070', '9012', '2.000000', 'EA'), ('18', '1070', '9030', '3.000000', 'shot'), ('19', '1070', '9240', '1.500000', 'PUMP'), ('20', '1070', '9250', '3.000000', 'pump'), ('21', '1070', '9252', '3.000000', 'pump'), ('22', '1070', '9260', '1.000000', 'oz'), ('23', '1080', '9016', '2.000000', 'EA'), ('24', '1080', '9030', '4.000000', 'shot'), ('25', '1080', '9240', '2.000000', 'PUMP'), ('26', '1080', '9250', '4.000000', 'pump'), ('27', '1080', '9252', '4.000000', 'pump'), ('28', '1080', '9260', '1.000000', 'oz'), ('29', '1090', '9020', '2.000000', 'EA'), ('30', '1090', '9030', '4.000000', 'shot'), ('31', '1090', '9240', '2.500000', 'PUMP'), ('32', '1090', '9250', '5.000000', 'pump'), ('33', '1090', '9252', '5.000000', 'pump'), ('34', '1090', '9260', '1.000000', 'oz'), ('35', '1110', '9012', '2.000000', 'EA'), ('36', '1110', '9025', '8.000000', 'oz'), ('37', '1110', '9030', '1.000000', 'shot'), ('38', '1110', '9240', '1.500000', 'pump'), ('39', '1110', '9250', '3.000000', 'pump'), ('40', '1110', '9252', '3.000000', 'pump'), ('41', '1110', '9260', '1.000000', 'oz'), ('42', '1111', '9016', '2.000000', 'EA'), ('43', '1111', '9025', '10.000000', 'oz'), ('44', '1111', '9030', '2.000000', 'shot'), ('45', '1111', '9240', '2.000000', 'pump'), ('46', '1111', '9250', '4.000000', 'pump'), ('47', '1111', '9252', '4.000000', 'pump'), ('48', '1111', '9260', '1.000000', 'oz'), ('49', '1112', '9020', '2.000000', 'EA'), ('50', '1112', '9025', '12.000000', 'oz'), ('51', '1112', '9030', '3.000000', 'shot'), ('52', '1112', '9240', '2.500000', 'PUMP'), ('53', '1112', '9250', '5.000000', 'pump'), ('54', '1112', '9252', '5.000000', 'pump'), ('55', '1112', '9260', '1.000000', 'oz'), ('56', '1115', '4062', '2.000000', 'TBSP'), ('57', '1115', '9012', '2.000000', 'EA'), ('58', '1115', '9025', '8.000000', 'oz'), ('59', '1115', '9030', '1.000000', 'shot'), ('60', '1115', '9240', '1.500000', 'PUMP'), ('61', '1115', '9250', '3.000000', 'pump'), ('62', '1115', '9252', '3.000000', 'pump'), ('63', '1115', '9260', '1.000000', 'oz'), ('64', '1116', '4062', '2.500000', 'TBSP'), ('65', '1116', '9016', '2.000000', 'EA'), ('66', '1116', '9025', '10.000000', 'oz'), ('67', '1116', '9030', '2.000000', 'shot'), ('68', '1116', '9240', '2.000000', 'PUMP'), ('69', '1116', '9250', '4.000000', 'pump'), ('70', '1116', '9252', '4.000000', 'pump'), ('71', '1116', '9260', '1.000000', 'oz'), ('72', '1117', '4062', '3.000000', 'TBSP'), ('73', '1117', '9020', '2.000000', 'EA'), ('74', '1117', '9025', '12.000000', 'oz'), ('75', '1117', '9030', '3.000000', 'shot'), ('76', '1117', '9240', '2.500000', 'PUMP'), ('77', '1117', '9250', '5.000000', 'pump'), ('78', '1117', '9252', '5.000000', 'pump'), ('79', '1117', '9260', '1.000000', 'oz'), ('80', '1120', '4028', '3.000000', 'pump'), ('81', '1120', '9012', '2.000000', 'EA'), ('82', '1120', '9025', '8.000000', 'oz'), ('83', '1120', '9030', '1.000000', 'shot'), ('84', '1120', '9240', '1.500000', 'pump'), ('85', '1120', '9250', '3.000000', 'pump'), ('86', '1120', '9252', '3.000000', 'pump'), ('87', '1120', '9260', '1.000000', 'oz'), ('88', '1121', '4028', '4.000000', 'pump'), ('89', '1121', '9016', '50.000000', 'EA'), ('90', '1121', '9025', '10.000000', 'oz'), ('91', '1121', '9030', '2.000000', 'shot'), ('92', '1121', '9240', '2.000000', 'pump'), ('93', '1121', '9250', '4.000000', 'pump'), ('94', '1121', '9252', '4.000000', 'pump'), ('95', '1121', '9260', '1.000000', 'oz'), ('96', '1122', '4028', '5.000000', 'pump'), ('97', '1122', '9020', '2.000000', 'EA'), ('98', '1122', '9025', '12.000000', 'oz'), ('99', '1122', '9030', '3.000000', 'shot'), ('100', '1122', '9240', '2.500000', 'PUMP'), ('101', '1122', '9250', '5.000000', 'pump'), ('102', '1122', '9252', '5.000000', 'pump'), ('103', '1122', '9260', '1.000000', 'oz'), ('104', '1125', '1720', '8.000000', 'oz'), ('105', '1125', '9012', '2.000000', 'EA'), ('106', '1125', '9030', '1.000000', 'shot'), ('107', '1125', '9240', '1.500000', 'PUMP'), ('108', '1125', '9250', '3.000000', 'pump'), ('109', '1125', '9252', '3.000000', 'pump'), ('110', '1125', '9260', '1.000000', 'oz'), ('111', '1126', '1720', '10.000000', 'oz'), ('112', '1126', '9016', '2.000000', 'EA'), ('113', '1126', '9030', '2.000000', 'shot'), ('114', '1126', '9240', '2.000000', 'PUMP'), ('115', '1126', '9250', '4.000000', 'pump'), ('116', '1126', '9252', '4.000000', 'pump'), ('117', '1126', '9260', '1.000000', 'oz'), ('118', '1127', '1720', '12.000000', 'oz'), ('119', '1127', '9020', '2.000000', 'EA'), ('120', '1127', '9030', '3.000000', 'shot'), ('121', '1127', '9240', '2.500000', 'PUMP'), ('122', '1127', '9250', '5.000000', 'pump'), ('123', '1127', '9252', '5.000000', 'pump'), ('124', '1127', '9260', '1.000000', 'oz'), ('125', '1130', '9025', '6.000000', 'oz'), ('126', '1130', '9030', '1.000000', 'shot'), ('127', '1130', '9112', '1.000000', 'EA'), ('128', '1130', '9240', '1.500000', 'PUMP'), ('129', '1130', '9250', '3.000000', 'pump'), ('130', '1130', '9252', '3.000000', 'pump'), ('131', '1130', '9260', '1.000000', 'oz'), ('132', '1131', '9025', '8.000000', 'oz'), ('133', '1131', '9030', '2.000000', 'shot'), ('134', '1131', '9116', '1.000000', 'EA'), ('135', '1131', '9240', '2.000000', 'PUMP'), ('136', '1131', '9250', '4.000000', 'pump'), ('137', '1131', '9252', '4.000000', 'pump'), ('138', '1131', '9260', '1.000000', 'oz'), ('139', '1132', '9025', '10.000000', 'oz'), ('140', '1132', '9030', '3.000000', 'shot'), ('141', '1132', '9120', '1.000000', 'EA'), ('142', '1132', '9240', '2.500000', 'PUMP'), ('143', '1132', '9250', '5.000000', 'pump'), ('144', '1132', '9252', '5.000000', 'pump'), ('145', '1132', '9260', '1.000000', 'oz'), ('146', '1140', '9012', '2.000000', 'EA'), ('147', '1140', '9025', '6.000000', 'oz'), ('148', '1140', '9030', '2.000000', 'shot'), ('149', '1140', '9240', '1.500000', 'PUMP'), ('150', '1140', '9250', '3.000000', 'pump'), ('151', '1140', '9252', '3.000000', 'pump'), ('152', '1140', '9260', '1.000000', 'oz'), ('153', '1141', '9016', '2.000000', 'EA'), ('154', '1141', '9025', '8.000000', 'oz'), ('155', '1141', '9030', '3.000000', 'shot'), ('156', '1141', '9240', '2.000000', 'PUMP'), ('157', '1141', '9250', '4.000000', 'pump'), ('158', '1141', '9252', '4.000000', 'pump'), ('159', '1141', '9260', '1.000000', 'oz'), ('160', '1142', '9020', '2.000000', 'EA'), ('161', '1142', '9025', '10.000000', 'oz'), ('162', '1142', '9030', '4.000000', 'shot'), ('163', '1142', '9240', '2.500000', 'PUMP'), ('164', '1142', '9250', '5.000000', 'pump'), ('165', '1142', '9252', '5.000000', 'pump'), ('166', '1142', '9260', '1.000000', 'oz'), ('167', '1145', '4062', '2.000000', 'TBSP'), ('168', '1145', '9012', '2.000000', 'EA'), ('169', '1145', '9025', '6.000000', 'oz'), ('170', '1145', '9030', '2.000000', 'shot'), ('171', '1145', '9240', '1.500000', 'PUMP'), ('172', '1145', '9250', '3.000000', 'pump'), ('173', '1145', '9252', '3.000000', 'pump'), ('174', '1145', '9260', '1.000000', 'oz'), ('175', '1146', '4062', '2.500000', 'TBSP'), ('176', '1146', '9016', '2.000000', 'EA'), ('177', '1146', '9025', '8.000000', 'oz'), ('178', '1146', '9030', '3.000000', 'shot'), ('179', '1146', '9240', '2.000000', 'PUMP'), ('180', '1146', '9250', '4.000000', 'pump'), ('181', '1146', '9252', '4.000000', 'pump'), ('182', '1146', '9260', '1.000000', 'oz'), ('183', '1147', '4062', '3.000000', 'TBSP'), ('184', '1147', '9020', '2.000000', 'EA'), ('185', '1147', '9025', '10.000000', 'oz'), ('186', '1147', '9030', '4.000000', 'shot'), ('187', '1147', '9240', '2.500000', 'PUMP'), ('188', '1147', '9250', '5.000000', 'pump'), ('189', '1147', '9252', '5.000000', 'pump'), ('190', '1147', '9260', '1.000000', 'oz'), ('191', '1150', '9025', '4.000000', 'oz'), ('192', '1150', '9030', '2.000000', 'shot'), ('193', '1150', '9112', '1.000000', 'EA'), ('194', '1150', '9240', '1.500000', 'PUMP'), ('195', '1150', '9250', '3.000000', 'pump'), ('196', '1150', '9252', '3.000000', 'pump'), ('197', '1150', '9260', '1.000000', 'oz'), ('198', '1151', '9025', '6.000000', 'oz'), ('199', '1151', '9030', '3.000000', 'shot'), ('200', '1151', '9116', '1.000000', 'EA'), ('201', '1151', '9240', '2.000000', 'PUMP'), ('202', '1151', '9250', '4.000000', 'pump'), ('203', '1151', '9252', '4.000000', 'pump'), ('204', '1151', '9260', '1.000000', 'oz'), ('205', '1152', '9025', '8.000000', 'oz'), ('206', '1152', '9030', '4.000000', 'shot'), ('207', '1152', '9120', '1.000000', 'EA'), ('208', '1152', '9240', '2.500000', 'PUMP'), ('209', '1152', '9250', '5.000000', 'pump'), ('210', '1152', '9252', '5.000000', 'pump'), ('211', '1152', '9260', '1.000000', 'oz'), ('212', '1210', '9012', '2.000000', 'EA'), ('213', '1210', '9160', '12.000000', 'oz'), ('214', '1210', '9240', '1.500000', 'PUMP'), ('215', '1210', '9250', '3.000000', 'pump'), ('216', '1210', '9252', '3.000000', 'pump'), ('217', '1210', '9260', '1.000000', 'oz'), ('218', '1220', '9016', '2.000000', 'EA'), ('219', '1220', '9160', '16.000000', 'oz'), ('220', '1220', '9240', '2.000000', 'PUMP'), ('221', '1220', '9250', '4.000000', 'pump'), ('222', '1220', '9252', '4.000000', 'pump'), ('223', '1220', '9260', '1.000000', 'oz'), ('224', '1230', '9020', '2.000000', 'EA'), ('225', '1230', '9160', '20.000000', 'oz'), ('226', '1230', '9240', '2.500000', 'PUMP'), ('227', '1230', '9250', '5.000000', 'pump'), ('228', '1230', '9252', '5.000000', 'pump'), ('229', '1230', '9260', '1.000000', 'oz'), ('230', '1240', '9016', '2.000000', 'EA'), ('231', '1240', '9240', '2.000000', 'PUMP'), ('232', '1240', '9250', '4.000000', 'pump'), ('233', '1240', '9252', '4.000000', 'pump'), ('234', '1240', '9260', '1.000000', 'oz'), ('235', '1240', '9270', '4.000000', 'shot'), ('236', '1260', '9012', '2.000000', 'EA'), ('237', '1260', '9025', '6.000000', 'oz'), ('238', '1260', '9160', '6.000000', 'oz'), ('239', '1260', '9240', '1.500000', 'PUMP'), ('240', '1260', '9250', '3.000000', 'pump'), ('241', '1260', '9252', '3.000000', 'pump'), ('242', '1260', '9260', '1.000000', 'oz'), ('243', '1270', '9016', '2.000000', 'EA'), ('244', '1270', '9025', '8.000000', 'oz'), ('245', '1270', '9160', '8.000000', 'oz'), ('246', '1270', '9240', '2.000000', 'PUMP'), ('247', '1270', '9250', '4.000000', 'pump'), ('248', '1270', '9252', '4.000000', 'pump'), ('249', '1270', '9260', '1.000000', 'oz'), ('250', '1280', '9020', '2.000000', 'EA'), ('251', '1280', '9025', '10.000000', 'oz'), ('252', '1280', '9160', '10.000000', 'oz'), ('253', '1280', '9240', '2.500000', 'PUMP'), ('254', '1280', '9250', '5.000000', 'pump'), ('255', '1280', '9252', '5.000000', 'pump'), ('256', '1280', '9260', '1.000000', 'oz'), ('257', '1290', '1110', '1.000000', 'oz'), ('258', '1290', '9116', '1.000000', 'EA'), ('259', '1290', '9240', '2.000000', 'PUMP'), ('260', '1290', '9250', '4.000000', 'pump'), ('261', '1290', '9252', '4.000000', 'pump'), ('262', '1290', '9260', '1.000000', 'oz'), ('263', '1295', '1110', '1.250000', 'oz'), ('264', '1295', '9120', '1.000000', 'EA'), ('265', '1295', '9240', '2.500000', 'PUMP'), ('266', '1295', '9250', '5.000000', 'pump'), ('267', '1295', '9252', '5.000000', 'pump'), ('268', '1295', '9260', '1.000000', 'oz'), ('269', '1310', '1710', '6.000000', 'oz'), ('270', '1310', '9012', '2.000000', 'EA'), ('271', '1310', '9025', '6.000000', 'oz'), ('272', '1310', '9240', '1.500000', 'PUMP'), ('273', '1310', '9250', '3.000000', 'pump'), ('274', '1310', '9252', '3.000000', 'pump'), ('275', '1310', '9260', '1.000000', 'oz'), ('276', '1320', '1710', '8.000000', 'oz'), ('277', '1320', '9016', '2.000000', 'EA'), ('278', '1320', '9025', '8.000000', 'oz'), ('279', '1320', '9240', '2.000000', 'PUMP'), ('280', '1320', '9250', '4.000000', 'pump'), ('281', '1320', '9252', '4.000000', 'pump'), ('282', '1320', '9260', '1.000000', 'oz'), ('283', '1330', '1710', '10.000000', 'oz'), ('284', '1330', '9020', '2.000000', 'EA'), ('285', '1330', '9025', '10.000000', 'oz'), ('286', '1330', '9240', '2.500000', 'PUMP'), ('287', '1330', '9250', '5.000000', 'pump'), ('288', '1330', '9252', '5.000000', 'pump'), ('289', '1330', '9260', '1.000000', 'oz'), ('290', '1350', '9016', '2.000000', 'EA'), ('291', '1350', '9150', '1.000000', 'scoop'), ('292', '1360', '9020', '2.000000', 'EA'), ('293', '1360', '9150', '1.000000', 'scoop'), ('294', '1370', '1722', '1.000000', 'oz'), ('295', '1370', '4050', '2.000000', 'PUMP'), ('296', '1370', '9012', '2.000000', 'EA'), ('297', '1370', '9025', '10.000000', 'oz'), ('298', '1370', '9240', '1.500000', 'PUMP'), ('299', '1370', '9250', '3.000000', 'pump'), ('300', '1370', '9252', '3.000000', 'pump'), ('301', '1370', '9260', '1.000000', 'oz'), ('302', '1380', '1722', '1.000000', 'oz'), ('303', '1380', '4050', '3.000000', 'PUMP'), ('304', '1380', '9016', '2.000000', 'EA'), ('305', '1380', '9025', '14.000000', 'oz'), ('306', '1380', '9240', '2.000000', 'PUMP'), ('307', '1380', '9250', '4.000000', 'pump'), ('308', '1380', '9252', '4.000000', 'pump'), ('309', '1380', '9260', '1.000000', 'oz'), ('310', '1390', '1722', '1.000000', 'oz'), ('311', '1390', '4050', '4.000000', 'PUMP'), ('312', '1390', '9020', '2.000000', 'EA'), ('313', '1390', '9025', '18.000000', 'oz'), ('314', '1390', '9240', '2.500000', 'PUMP'), ('315', '1390', '9250', '5.000000', 'pump'), ('316', '1390', '9252', '5.000000', 'pump'), ('317', '1390', '9260', '1.000000', 'oz'), ('318', '1410', '9116', '1.000000', 'EA'), ('319', '1420', '9120', '1.000000', 'EA'), ('320', '1510', '1722', '1.000000', 'oz'), ('321', '1510', '9025', '6.000000', 'oz'), ('322', '1510', '9116', '1.000000', 'EA'), ('323', '1510', '9180', '1.000000', 'half-cup'), ('324', '1520', '1722', '1.000000', 'oz'), ('325', '1520', '9025', '6.000000', 'oz'), ('326', '1520', '9116', '1.000000', 'EA'), ('327', '1520', '9182', '1.000000', 'half-cup'), ('328', '1530', '1722', '1.000000', 'oz'), ('329', '1530', '9025', '6.000000', 'oz'), ('330', '1530', '9116', '1.000000', 'EA'), ('331', '1530', '9184', '1.000000', 'half-cup'), ('332', '1540', '1722', '1.000000', 'oz'), ('333', '1540', '9025', '6.000000', 'oz'), ('334', '1540', '9116', '1.000000', 'EA'), ('335', '1540', '9186', '1.000000', 'half-cup'), ('336', '1550', '9026', '6.000000', 'oz'), ('337', '1550', '9116', '1.000000', 'EA'), ('338', '1550', '9188', '1.000000', 'half-cup'), ('339', '1560', '1722', '1.000000', 'oz'), ('340', '1560', '9025', '6.000000', 'oz'), ('341', '1560', '9116', '1.000000', 'EA'), ('342', '1570', '1722', '1.000000', 'oz'), ('343', '1570', '9116', '1.000000', 'EA'), ('344', '1570', '9190', '8.000000', 'oz'), ('345', '2010', '9116', '1.000000', 'EA'), ('346', '2015', '6010', '1.000000', 'EA'), ('347', '2020', '6012', '1.000000', 'EA'), ('348', '2025', '6016', '1.000000', 'EA'), ('349', '2030', '6018', '1.000000', 'EA'), ('350', '2050', '9194', '1.000000', 'EA'), ('351', '3010', '9197', '1.000000', 'EA'), ('352', '3015', '9198', '1.000000', 'EA'), ('353', '3050', '9196', '1.000000', 'EA'), ('355', '4010', '9999', '1.000000', 'hr'), ('356', '4015', '9999', '0.000000', ''), ('357', '4020', '9999', '0.000000', ''), ('358', '4026', '9999', '0.000000', ''), ('359', '5010', '9999', '0.000000', ''), ('360', '5030', '9999', '0.000000', ''), ('361', '5035', '9999', '0.000000', ''), ('362', '5040', '9999', '0.000000', ''), ('363', '5050', '9999', '0.000000', ''), ('364', '3055', '6085', '1.000000', 'EA'), ('366', '1111', '9800', '77.000000', 'pump');
COMMIT;

-- ----------------------------
--  Table structure for `RegisterSummary`
-- ----------------------------
DROP TABLE IF EXISTS `RegisterSummary`;
CREATE TABLE `RegisterSummary` (
  `Sales_DateTime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `Store_Num` int(2) unsigned NOT NULL DEFAULT '1',
  `Register_Num` int(2) unsigned NOT NULL DEFAULT '1',
  `Employee_Num` int(4) unsigned DEFAULT NULL,
  `TransactionType` varchar(10) DEFAULT NULL,
  `TotalPrice01` decimal(10,2) DEFAULT NULL,
  `TotalCost01` decimal(10,2) DEFAULT NULL,
  `TaxCode01` varchar(15) DEFAULT NULL,
  `TaxAmount01` decimal(10,2) DEFAULT NULL,
  `TaxCode02` varchar(15) DEFAULT NULL,
  `TaxAmount02` decimal(10,2) DEFAULT NULL,
  `DiscountCode` varchar(20) DEFAULT NULL,
  `DiscountAmount` decimal(10,2) DEFAULT NULL,
  `Customer` int(4) unsigned DEFAULT NULL,
  `PayMethod` varchar(15) DEFAULT NULL,
  `Card_Last_4` varchar(4) DEFAULT NULL,
  `Authorization_Code` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Sales_DateTime`,`Store_Num`,`Register_Num`),
  KEY `Employee_Num` (`Employee_Num`),
  KEY `Customer` (`Customer`),
  KEY `TaxCode01` (`TaxCode01`),
  KEY `TaxCode02` (`TaxCode02`),
  CONSTRAINT `Customer` FOREIGN KEY (`Customer`) REFERENCES `Customers` (`Customer_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Employee_Num` FOREIGN KEY (`Employee_Num`) REFERENCES `Employees` (`Employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `TaxCode1` FOREIGN KEY (`TaxCode01`) REFERENCES `SalesTaxCategories` (`SalesTaxCode`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `TaxCode2` FOREIGN KEY (`TaxCode02`) REFERENCES `SalesTaxCategories` (`SalesTaxCode`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `RegisterSummary`
-- ----------------------------
BEGIN;
INSERT INTO `RegisterSummary` VALUES ('2014-12-25 17:30:22', '1', '1', '9999', 'Sale', '4.50', '2.25', 'Pensacola_Tax', '0.34', 'NoTax', '0.00', '', '0.00', '9999', 'Cash', '', '');
COMMIT;

-- ----------------------------
--  Table structure for `RegisterTransactionDetail`
-- ----------------------------
DROP TABLE IF EXISTS `RegisterTransactionDetail`;
CREATE TABLE `RegisterTransactionDetail` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Sales_DateTime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `Store_Num` int(2) unsigned NOT NULL DEFAULT '1',
  `Register_Num` int(2) unsigned NOT NULL DEFAULT '1',
  `MenuItem` int(4) unsigned NOT NULL DEFAULT '0',
  `Qty` int(2) DEFAULT NULL,
  `MenuItemPrice` decimal(10,2) DEFAULT NULL,
  `GL_Sales_Account` int(4) unsigned DEFAULT NULL,
  `MenuItemCost` decimal(10,2) DEFAULT NULL,
  `GL_COGS_Account` int(4) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ix_primary_key` (`Sales_DateTime`,`Store_Num`,`Register_Num`,`MenuItem`),
  UNIQUE KEY `ix_id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Table structure for `RegisterTransactionDetailItems`
-- ----------------------------
DROP TABLE IF EXISTS `RegisterTransactionDetailItems`;
CREATE TABLE `RegisterTransactionDetailItems` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `RegisterTransactionDetail_id` int(10) unsigned DEFAULT NULL,
  `ItemNumber` int(4) unsigned DEFAULT NULL,
  `Qty` float DEFAULT NULL,
  `Unit` varchar(10) DEFAULT NULL,
  `Item_Cost` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ix_primary_key` (`RegisterTransactionDetail_id`,`ItemNumber`),
  CONSTRAINT `fk_RegisterTransactionDetail_id` FOREIGN KEY (`RegisterTransactionDetail_id`) REFERENCES `RegisterTransactionDetail` (`id`) ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Table structure for `Rewardprograms`
-- ----------------------------
DROP TABLE IF EXISTS `Rewardprograms`;
CREATE TABLE `Rewardprograms` (
  `PromoCode` varchar(20) NOT NULL DEFAULT '',
  `DrinksPurchasedToGetReward` int(11) DEFAULT NULL,
  `AmountSpentToGetReward` decimal(10,2) DEFAULT NULL,
  `DrinksGivenAsReward` int(11) DEFAULT NULL,
  `DollarsOffAsReward` decimal(10,2) DEFAULT NULL,
  `PercentOffAsReward` float DEFAULT NULL,
  PRIMARY KEY (`PromoCode`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `Rewardprograms`
-- ----------------------------
BEGIN;
INSERT INTO `Rewardprograms` VALUES ('$100_Gets_Half_Off', '0', '100.00', '0', '0.00', '50'), ('$50_Spent_Get_$5_Off', '0', '5.00', '0', '5.00', '0'), ('10_Drinks_Get_1_Free', '10', '0.00', '1', '0.00', '0');
COMMIT;

-- ----------------------------
--  Table structure for `SalesTaxCategories`
-- ----------------------------
DROP TABLE IF EXISTS `SalesTaxCategories`;
CREATE TABLE `SalesTaxCategories` (
  `SalesTaxCode` varchar(15) NOT NULL DEFAULT '',
  `SalesTaxPercent` float DEFAULT NULL,
  `VendorToPay` int(4) unsigned DEFAULT NULL,
  `GL_Liability_Account` int(4) unsigned DEFAULT NULL,
  PRIMARY KEY (`SalesTaxCode`),
  KEY `VendorToPay` (`VendorToPay`),
  KEY `GL_Liability_Account` (`GL_Liability_Account`),
  CONSTRAINT `GL_Liability` FOREIGN KEY (`GL_Liability_Account`) REFERENCES `GeneralLedger` (`AccountNumber`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `VendorForSalestax` FOREIGN KEY (`VendorToPay`) REFERENCES `Vendors` (`Vendor_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `SalesTaxCategories`
-- ----------------------------
BEGIN;
INSERT INTO `SalesTaxCategories` VALUES ('NoTax', '0', '9999', '2200'), ('Pensacola_Tax', '7.5', '1011', '2200');
COMMIT;

-- ----------------------------
--  Table structure for `ShiftSummary`
-- ----------------------------
DROP TABLE IF EXISTS `ShiftSummary`;
CREATE TABLE `ShiftSummary` (
  `ShiftOpen_DateTime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `Store_Num` int(2) unsigned NOT NULL DEFAULT '0',
  `Register_Num` int(2) unsigned NOT NULL DEFAULT '0',
  `ManagerOpenCode` int(4) unsigned DEFAULT NULL,
  `DrawerStartAmount` decimal(10,2) DEFAULT NULL,
  `NumberOfCashTrans` int(4) DEFAULT NULL,
  `CashTransAmount` decimal(10,2) DEFAULT NULL,
  `NumberOfCardTrans` int(4) DEFAULT NULL,
  `CardTransAmount` decimal(10,2) DEFAULT NULL,
  `NumberOtherTrans` int(4) DEFAULT NULL,
  `OtherTransAmount` decimal(10,2) DEFAULT NULL,
  `CashAddedOrRemoved` decimal(10,2) DEFAULT NULL,
  `ComputerTotal` decimal(10,2) DEFAULT NULL,
  `CountTotal` decimal(10,2) DEFAULT NULL,
  `ShiftClose_DateTime` datetime DEFAULT NULL,
  `ManagerCloseCode` int(4) unsigned DEFAULT NULL,
  `E_Signed_Code` varchar(255) DEFAULT NULL,
  `DepositAmount` decimal(10,2) DEFAULT NULL,
  `DepositDate` date DEFAULT NULL,
  `DepositSlipNum` varchar(20) DEFAULT NULL,
  `TaxCode01` varchar(15) DEFAULT NULL,
  `TaxAmount01` decimal(10,2) DEFAULT NULL,
  `TaxCode02` varchar(15) DEFAULT NULL,
  `TaxAmount02` decimal(10,2) DEFAULT NULL,
  `SalesAccount01` int(4) unsigned DEFAULT NULL,
  `SalesAmount01` decimal(10,2) DEFAULT NULL,
  `COG_Account01` int(4) unsigned DEFAULT NULL,
  `COG01_Cost` decimal(10,2) DEFAULT NULL,
  `SalesAccount02` int(4) unsigned DEFAULT NULL,
  `SalesAmount2` decimal(10,2) DEFAULT NULL,
  `COG_Account02` int(4) unsigned DEFAULT NULL,
  `COG02_Cost` decimal(10,2) DEFAULT NULL,
  `SalesAccount03` int(4) unsigned DEFAULT NULL,
  `SalesAmount03` decimal(10,2) DEFAULT NULL,
  `COG_Account03` int(4) unsigned DEFAULT NULL,
  `COG03_Cost` decimal(10,2) DEFAULT NULL,
  `SalesAccount04` int(4) unsigned DEFAULT NULL,
  `SalesAmount04` decimal(10,2) DEFAULT NULL,
  `COG_Account04` int(4) unsigned DEFAULT NULL,
  `COG04_cost` decimal(10,2) DEFAULT NULL,
  `SalesAccount05` int(4) unsigned DEFAULT NULL,
  `SalesAmount05` decimal(10,2) DEFAULT NULL,
  `COG_Account05` int(4) unsigned DEFAULT NULL,
  `COG05_Cost` decimal(10,2) DEFAULT NULL,
  `SalesAccount06` int(4) unsigned DEFAULT NULL,
  `SalesAmount06` decimal(10,2) DEFAULT NULL,
  `COG_Account06` int(4) unsigned DEFAULT NULL,
  `COG06_Cost` decimal(10,2) DEFAULT NULL,
  `SalesAccount07` int(4) unsigned DEFAULT NULL,
  `SalesAmount07` decimal(10,2) DEFAULT NULL,
  `COG_Account07` int(4) unsigned DEFAULT NULL,
  `COG07_Cost` decimal(10,2) DEFAULT NULL,
  `SalesAccount08` int(4) unsigned DEFAULT NULL,
  `SalesAmount08` decimal(10,2) DEFAULT NULL,
  `COG_Account08` int(4) unsigned DEFAULT NULL,
  `COG08_Cost` decimal(10,2) DEFAULT NULL,
  `SalesAccount09` int(4) unsigned DEFAULT NULL,
  `SalesAmount09` decimal(10,2) DEFAULT NULL,
  `COG_Account09` int(4) unsigned DEFAULT NULL,
  `COG09_Cost` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`ShiftOpen_DateTime`,`Store_Num`,`Register_Num`),
  KEY `ManagerOpenCode` (`ManagerOpenCode`),
  CONSTRAINT `ManagerOpen` FOREIGN KEY (`ManagerOpenCode`) REFERENCES `EmployeeAccess` (`Register_Code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `ShiftSummary`
-- ----------------------------
BEGIN;
INSERT INTO `ShiftSummary` VALUES ('2014-12-25 17:30:22', '1', '1', '1051', '250.00', '1', '4.50', '2', '8.45', '2', '3.25', '0.00', '266.20', '266.20', '0000-00-00 00:00:00', '0', '', '0.00', '0000-00-00', '', 'Pensacola_Tax', '0.34', 'NoTax', '0.00', '4105', '16.20', '5105', '0.16', '0', '0.00', '0', '0.00', '0', '0.00', '0', '0.00', '0', '0.00', '0', '0.00', '0', '0.00', '0', '0.00', '0', '0.00', '0', '0.00', '0', '0.00', '0', '0.00', '0', '0.00', '0', '0.00', '0', '0.00', '0', '0.00');
COMMIT;

-- ----------------------------
--  Table structure for `Vendors`
-- ----------------------------
DROP TABLE IF EXISTS `Vendors`;
CREATE TABLE `Vendors` (
  `Vendor_id` int(4) unsigned NOT NULL,
  `Name` varchar(40) DEFAULT NULL,
  `Addr1` varchar(40) DEFAULT NULL,
  `Addr2` varchar(40) DEFAULT NULL,
  `City` varchar(20) DEFAULT NULL,
  `State` varchar(2) DEFAULT NULL,
  `Zip` varchar(10) DEFAULT NULL,
  `Phone` varchar(12) DEFAULT NULL,
  `Account_type` varchar(2) DEFAULT NULL,
  `Email` varchar(40) DEFAULT NULL,
  `Website` varchar(40) DEFAULT NULL,
  `TaxEIN` varchar(10) DEFAULT NULL,
  `Resale_id` varchar(20) DEFAULT NULL,
  `Credit_type` varchar(10) DEFAULT NULL,
  `Misc_info` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`Vendor_id`),
  KEY `VebdorNameIndex` (`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `Vendors`
-- ----------------------------
BEGIN;
INSERT INTO `Vendors` VALUES ('1010', 'Biggs Construction Co', 'P O Box 1552', ' ', 'Pensacola', 'FL', '32591', '', 'Co', '', '', '', '', '', ''), ('1011', 'Florida Dept of Revenue, SalesTax', null, null, null, null, null, null, 'Co', null, null, null, null, null, null), ('1012', 'Carpe Diem Coffee & Tea Co', '4072 Old Shell Road', ' ', 'Mobile', 'AL', '36608', '', 'Co', '', '', '', '', '', ''), ('1013', 'Cat-Den', '7070 Bruns Dr.', '', 'Mobile', 'AL', '36695', '', 'Co', '', '', '46-5575430', '', '', ''), ('1014', 'Dalrymple Sallis Architecture', '213 South Baylen St.', ' ', 'Pensacola', 'FL', '32502', '', 'Co', '', '', '', '', '', ''), ('1015', 'Daniels Commercial Insurance', 'P O Box 12465', ' ', 'Pensacola', 'FL', '32591', '', 'Co', '', '', '', '', '', ''), ('1016', 'Division of Hotels and Restaurants', 'Bureau or revenue', '1940 N Monroe St', 'Tallahassee', 'FL', '32399-0783', '', 'Co', '', '', '', '', '', ''), ('1017', 'Emerald Coast Utilities Authority (ECUA)', '9255 Sturdevant St', ' ', 'Pensacola', 'FL', '32591', '', 'Co', '', '', '', '', '', ''), ('1018', 'Emmanuel Sheppard & Condon', 'P O Drawer 1271', ' ', 'Pensacola', 'FL', '32591', '', 'Co', '', '', '', '', '', ''), ('1019', 'Fortuna Enterprises', '6211 Chimney Center Blvd', '', 'Greensboro', 'NC', '27409', '', 'Co', '', '', '', '', '', ''), ('1020', 'Harland Clarke Checks', '', '', '', '', '', '', 'Co', '', '', '', '', '', ''), ('1022', 'KESCO Kitchen Eq. & Supply Co.', '4148 Barrancas Ave', '', 'Pensacola', 'FL', '32507', '', 'Co', '', '', '', '', '', ''), ('1024', 'Klatch', '', '', '', '', '', '', 'Co', '', '', '', '', '', ''), ('1027', 'MudBrick Media', '7070 Bruns Dr.', '', 'Mobile', 'AL', '36695', '', 'Co', '', '', '', '', '', ''), ('1028', 'Preble Sound Services', '5399 Ilex Ln.', '', 'Pensacola', 'FL', '32526', '', 'Co', '', '', '', '', '', ''), ('1030', 'Webstaurant', '', '', '', '', '', '', 'Co', '', 'http://www.webstaurantstore.com', '', '', '', ''), ('1031', 'ShopKeep', '', '', '', '', '', '', 'Co', '', '', '', '', '', ''), ('1032', 'Staples', '3250 Airport Blvd', '', 'Mobile', 'AL', '36606', '', 'Co', '', '', '', '', '', ''), ('1033', 'U S Assure Insurance Services of Florida', 'P O Box 10197', '', 'Jacksonville', 'FL', '32247', '', 'Co', '', '', '', '', '', ''), ('1050', 'Britney Trout', '931 Scenic Hwy', '', 'Pensacola', 'FL', '32503', '850-292-0547', 'em', 'britneylinn@gmail.com', '', '', '', '', ''), ('1051', 'Heather Harris', '590 Lander St', '', 'Cantonment', 'FL', '32533', '573-286-4443', 'em', 'hak22@aol.com', '', '', '', '', ''), ('1052', 'Kimberly Thompson', '5034 Faircloth St', '', 'Pace', 'FL', '32571', '850 723-0511', 'em', 'kimithompson70@icloud.com', '', '', '', '', ''), ('1053', 'Krystle Douby', '1931 Bayberry Dr', '', 'Pembroke Pines', 'FL', '33024', '305-527-7839', 'em', 'kd22@students.uwf.edu', '', '', '', '', ''), ('1054', 'Meagan Russell', '10 Azalea Dr.', '', 'Mary Esther', 'FL', '32564', '850 207-4638', 'em', 'meagan.e.russell@gmail.com', '', '', '', '', ''), ('1055', 'Rebecca Hiekel', '4525 Hampton Bay Blvd', '', 'Milton', 'FL', '32583', '850-501-8503', 'em', 'rebecca.hiekel@gmail.com', '', '', '', '', ''), ('3333', 'UPDATED!', 'sdsdsd', '', 'sdsdsd', 'AL', '33333', '3333333333', 'CO', 'sdsdsd', null, '2232323213', '4432356542', 'CO', ''), ('9987', 'WORKED!', 'wewewe', '', 'wewewe', 'AL', '33333', '1112233334', 'IN', 'wrrere', null, '4433221122', '4455667788', 'CO', ''), ('9999', 'Vendor Not Established', null, null, null, null, null, null, null, null, null, null, null, null, null);
COMMIT;

-- ----------------------------
--  Table structure for `account_type`
-- ----------------------------
DROP TABLE IF EXISTS `account_type`;
CREATE TABLE `account_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `account_type_code` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `account_type_description` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `account_type`
-- ----------------------------
BEGIN;
INSERT INTO `account_type` VALUES ('1', 'CO', 'Company'), ('2', 'IN', 'Individual');
COMMIT;

-- ----------------------------
--  Table structure for `bill_pay_method`
-- ----------------------------
DROP TABLE IF EXISTS `bill_pay_method`;
CREATE TABLE `bill_pay_method` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bill_pay_method_code` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `bill_pay_method_description` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `bill_pay_method`
-- ----------------------------
BEGIN;
INSERT INTO `bill_pay_method` VALUES ('1', 'CK', 'Check'), ('2', 'CC', 'Credit Card'), ('3', 'OL', 'Online'), ('4', 'DD', 'Direct Deposit');
COMMIT;

-- ----------------------------
--  Table structure for `customer_account_type`
-- ----------------------------
DROP TABLE IF EXISTS `customer_account_type`;
CREATE TABLE `customer_account_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `account_type_code` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `account_type_description` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `customer_account_type`
-- ----------------------------
BEGIN;
INSERT INTO `customer_account_type` VALUES ('1', 'IN', 'Individual'), ('2', 'GR', 'Group'), ('3', 'FA', 'Family');
COMMIT;

-- ----------------------------
--  Table structure for `inventory_transaction_type`
-- ----------------------------
DROP TABLE IF EXISTS `inventory_transaction_type`;
CREATE TABLE `inventory_transaction_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `transaction_type_code` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `transaction_type_description` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `transaction_type_note` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `inventory_transaction_type`
-- ----------------------------
BEGIN;
INSERT INTO `inventory_transaction_type` VALUES ('1', 'PS', 'Point of Sale', 'inventory adjustment from POS transaction.  Add or subtract from current total.'), ('2', 'HC', 'Hand Count', 'inventory adjustment based on hand count of items on-hand, replaces current system count'), ('3', 'QA', 'Quantity Adjust', 'inventory adjustment based on a manual adjustment.  Add or subtract from current total.  Ex. due to breakage or spoilage.'), ('4', 'OR', 'Order Received', 'inventory adjustment based on an order received.  Add or subtract from current total.');
COMMIT;

-- ----------------------------
--  Table structure for `pay_account_type`
-- ----------------------------
DROP TABLE IF EXISTS `pay_account_type`;
CREATE TABLE `pay_account_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pay_account_type_code` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `pay_account_type_description` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `pay_account_type`
-- ----------------------------
BEGIN;
INSERT INTO `pay_account_type` VALUES ('1', 'CC', 'CreditCard'), ('2', 'CO', 'CashOnly'), ('3', 'PP', 'PayPal');
COMMIT;

-- ----------------------------
--  Table structure for `states`
-- ----------------------------
DROP TABLE IF EXISTS `states`;
CREATE TABLE `states` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `state_name` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `state_abbr` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `states`
-- ----------------------------
BEGIN;
INSERT INTO `states` VALUES ('1', 'Alabama', 'AL'), ('2', 'Alaska', 'AK'), ('3', 'Arizona', 'AZ'), ('4', 'Arkansas', 'AR'), ('5', 'California', 'CA'), ('6', 'Colorado', 'CO'), ('7', 'Connecticut', 'CT'), ('8', 'Delaware', 'DE'), ('9', 'District of Columbia', 'DC'), ('10', 'Florida', 'FL'), ('11', 'Georgia', 'GA'), ('12', 'Hawaii', 'HI'), ('13', 'Idaho', 'ID'), ('14', 'Illinois', 'IL'), ('15', 'Indiana', 'IN'), ('16', 'Iowa', 'IA'), ('17', 'Kansas', 'KS'), ('18', 'Kentucky', 'KY'), ('19', 'Louisiana', 'LA'), ('20', 'Maine', 'ME'), ('21', 'Maryland', 'MD'), ('22', 'Massachusetts', 'MA'), ('23', 'Michigan', 'MI'), ('24', 'Minnesota', 'MN'), ('25', 'Mississippi', 'MS'), ('26', 'Missouri', 'MO'), ('27', 'Montana', 'MT'), ('28', 'Nebraska', 'NE'), ('29', 'Nevada', 'NV'), ('30', 'New Hampshire', 'NH'), ('31', 'New Jersey', 'NJ'), ('32', 'New Mexico', 'NM'), ('33', 'New York', 'NY'), ('34', 'North Carolina', 'NC'), ('35', 'North Dakota', 'ND'), ('36', 'Ohio', 'OH'), ('37', 'Oklahoma', 'OK'), ('38', 'Oregon', 'OR'), ('39', 'Pennsylvania', 'PA'), ('40', 'Rhode Island', 'RI'), ('41', 'South Carolina', 'SC'), ('42', 'South Dakota', 'SD'), ('43', 'Tennessee', 'TN'), ('44', 'Texas', 'TX'), ('45', 'Utah', 'UT'), ('46', 'Vermont', 'VT'), ('47', 'Virginia', 'VA'), ('48', 'Washington', 'WA'), ('49', 'West Virginia', 'WV'), ('50', 'Wisconsin', 'WI'), ('51', 'Wyoming', 'WY');
COMMIT;

-- ----------------------------
--  Table structure for `unit_conversion_factor`
-- ----------------------------
DROP TABLE IF EXISTS `unit_conversion_factor`;
CREATE TABLE `unit_conversion_factor` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `conversion_factor_code` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `conversion_factor_unit_from` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `conversion_factor_unit_to` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `conversion_factor` decimal(12,6) NOT NULL,
  `conversion_factor_description` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `unit_conversion_factor`
-- ----------------------------
BEGIN;
INSERT INTO `unit_conversion_factor` VALUES ('1', 'GO', 'gal', 'oz', '128.000000', 'gallons to liquid oz'), ('2', 'OG', 'oz', 'gal', '0.007813', 'liquid oz to gallons'), ('3', 'LO', 'l', 'oz', '33.814000', 'liters to liquid oz'), ('4', 'OL', 'oz', 'l', '0.029574', 'liquid oz to liters'), ('5', 'PO', 'lb', 'oz', '16.000000', 'pounds to oz'), ('6', 'OP', 'oz', 'lb', '0.062500', 'oz to pounds'), ('7', 'GG', 'gal', 'gal', '1.000000', 'gallons to gallons'), ('8', 'OO', 'oz', 'oz', '1.000000', 'liquid oz to liquid oz'), ('9', 'PP', 'lb', 'lb', '1.000000', 'lb to lb'), ('10', 'LL', 'l', 'l', '1.000000', 'liter to liter'), ('11', 'GP', 'gal', 'pump', '256.000000', 'gallons to pump');
COMMIT;

-- ----------------------------
--  Table structure for `unit_purchased_in`
-- ----------------------------
DROP TABLE IF EXISTS `unit_purchased_in`;
CREATE TABLE `unit_purchased_in` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `unit_purchased_in_code` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `unit_of_measure` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `unit_of_measure_description` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `unit_purchased_in`
-- ----------------------------
BEGIN;
INSERT INTO `unit_purchased_in` VALUES ('1', 'LG', 'gal', 'gallon'), ('2', 'LL', 'l', 'liter'), ('3', 'LO', 'oz', 'liquid oz'), ('4', 'SL', 'lb', 'pound'), ('5', 'SO', 'oz', 'oz');
COMMIT;

-- ----------------------------
--  Table structure for `unit_used_in`
-- ----------------------------
DROP TABLE IF EXISTS `unit_used_in`;
CREATE TABLE `unit_used_in` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `unit_used_in_code` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `unit_of_measure` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `unit_of_measure_description` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `unit_used_in`
-- ----------------------------
BEGIN;
INSERT INTO `unit_used_in` VALUES ('1', 'LO', 'oz', 'liquid oz'), ('2', 'LP', 'pump', 'pump'), ('3', 'PE', 'EA', 'each'), ('4', 'SO', 'oz', 'oz'), ('5', 'SH', 'shot', 'shot'), ('6', 'SC', 'scoop', 'scoop'), ('7', 'HC', 'half', 'half-cup'), ('8', 'TB', 'tbsp', 'tbsp'), ('9', 'TS', 'tsp', 'tsp');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
