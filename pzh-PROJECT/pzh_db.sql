-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.5-10.0.14-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 project 的数据库结构
DROP DATABASE IF EXISTS `project`;
CREATE DATABASE IF NOT EXISTS `project` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_croatian_ci */;
USE `project`;


-- 导出  表 project.home 结构
DROP TABLE IF EXISTS `home`;
CREATE TABLE IF NOT EXISTS `home` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `part` varchar(50) COLLATE utf8_croatian_ci NOT NULL DEFAULT '0',
  `img` varchar(200) COLLATE utf8_croatian_ci NOT NULL DEFAULT '0',
  `h4` varchar(200) COLLATE utf8_croatian_ci NOT NULL DEFAULT '0',
  `p` varchar(200) COLLATE utf8_croatian_ci NOT NULL DEFAULT '0',
  `ban` varchar(50) COLLATE utf8_croatian_ci DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

-- 正在导出表  project.home 的数据：~20 rows (大约)
/*!40000 ALTER TABLE `home` DISABLE KEYS */;
REPLACE INTO `home` (`index`, `part`, `img`, `h4`, `p`, `ban`) VALUES
	(1, 'dog', 'img/gl1.jpg', '福摩狗粮', '搭配均衡 调理肠胃', 'img/b1.jpg'),
	(2, 'dog', 'img/gl2.jpg', '皇家狗粮', '精准营养 量身定制', 'img/b2.jpg'),
	(3, 'dog', 'img/gl3.jpg', '宝路狗粮', '一切只为爱宠', 'img/b3.jpg'),
	(4, 'dog', 'img/gl4.jpg', '冠能狗粮', '专注营养 全面保护', '0'),
	(5, 'cat', 'img/ml1.jpg', '渴望猫粮', '满足渴望的六种鱼', 'img/b4.jpg'),
	(6, 'cat', 'img/ml2.jpg', '皇家猫粮', '懂它才能更爱它', 'img/b5.jpg'),
	(7, 'cat', 'img/ml3.jpg', '伟嘉猫粮', '全面均衡营养 猫咪健康成长', 'img/b6.jpg'),
	(8, 'cat', 'img/ml4.jpg', '喜跃猫粮', '让爱猫乐享美味', '0'),
	(9, 'pet', 'img/p1.jpg', '迷你秀', '仓鼠专家', 'img/b7.jpg'),
	(10, 'pet', 'img/p2.jpg', '宠波尔boer仓鼠窝', '鼠鼠梦想的家', 'img/b8.jpg'),
	(11, 'pet', 'img/p3.jpg', '磨牙石', '磨牙又营养', 'img/b9.jpg'),
	(12, 'pet', 'img/p4.jpg', '仓鼠吸尿除臭厕砂', '超强除臭 超强吸水', '0'),
	(13, 'water', 'img/w1.jpg', '聚宝源鱼缸', '绿色 环保 生态', 'img/b10.jpg'),
	(14, 'water', 'img/w2.jpg', '海豚水族用品', '更专业 更全面', 'img/b11.jpg'),
	(15, 'water', 'img/w3.jpg', '松宝水族系列', '专业打造水族器械', 'img/b12.jpg'),
	(16, 'water', 'img/w4.jpg', '森森全系列', '内置/外置设备应有尽有', '0'),
	(17, 'insert', 'img/i1.jpg', '龟龟灯具', '取暖照明更出色', 'img/b13.jpg'),
	(18, 'insert', 'img/i2.jpg', '守宫取暖灯', '发热效果更佳', 'img/b14.jpg'),
	(19, 'insert', 'img/i3.jpg', '自动给水器', '水是生命之源', 'img/b15.jpg'),
	(20, 'insert', 'img/i4.jpg', '淡水小鱼干', '肉质肥美补钙佳', '0');
/*!40000 ALTER TABLE `home` ENABLE KEYS */;


-- 导出  表 project.list 结构
DROP TABLE IF EXISTS `list`;
CREATE TABLE IF NOT EXISTS `list` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `id` varchar(50) COLLATE utf8_croatian_ci NOT NULL DEFAULT '0',
  `pre` varchar(50) COLLATE utf8_croatian_ci NOT NULL DEFAULT '0',
  `price` varchar(50) COLLATE utf8_croatian_ci NOT NULL DEFAULT '0',
  `title` varchar(200) COLLATE utf8_croatian_ci NOT NULL DEFAULT '0',
  `weight` varchar(50) COLLATE utf8_croatian_ci NOT NULL DEFAULT '0',
  `buy` varchar(50) COLLATE utf8_croatian_ci NOT NULL DEFAULT '0',
  `talk` varchar(200) COLLATE utf8_croatian_ci NOT NULL DEFAULT '0',
  `img` varchar(200) COLLATE utf8_croatian_ci NOT NULL,
  `imgSta` varchar(50) COLLATE utf8_croatian_ci NOT NULL DEFAULT '0',
  `imgEnd` varchar(50) COLLATE utf8_croatian_ci NOT NULL DEFAULT '0',
  `weights` varchar(50) COLLATE utf8_croatian_ci NOT NULL,
  `hot` int(11) NOT NULL DEFAULT '0' COMMENT '0: cold  1: hot',
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

-- 正在导出表  project.list 的数据：~32 rows (大约)
/*!40000 ALTER TABLE `list` DISABLE KEYS */;
REPLACE INTO `list` (`index`, `id`, `pre`, `price`, `title`, `weight`, `buy`, `talk`, `img`, `imgSta`, `imgEnd`, `weights`, `hot`) VALUES
	(1, '001', '¥85.20', '¥71.00', '法国皇家ROYAL CANIN 小型犬离乳期奶糕1kg MIS30', '35.5元/斤', '已售489355 ', '2248', '../img/ls1.jpg', '1', '5', '1.00kg', 1),
	(2, '002', '¥249.60', '¥208.00', '法国皇家ROYAL CANIN 泰迪贵宾成犬粮专用狗粮3kg PD30', '34.67元/斤', '已售452243 ', '2958', '../img/ls2.jpg', '6', '9', '3.00kg', 0),
	(3, '003', '¥133.20', '¥111.00', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮2kg PR27', '27.75元/斤', '已售301176', '1419', '../img/ls3.jpg', '10', '13', '2.00kg', 1),
	(4, '004', '¥162.00', '¥135.00', '法国皇家ROYAL CANIN 12月以下及怀孕期母猫幼猫粮2kg K36', '33.75元/斤', '已售577916', '2788', '../img/ls9.jpg', '36', '40', '2.00kg', 1),
	(5, '005', '¥41.40', '¥37.30', '宝路 幼犬粮肉类奶蔬菜谷物配方狗粮1.3kg', '14.35元/斤', '已售176550', '841', '../img/ls5.jpg', '17', '20', '1.30kg', 0),
	(6, '006', '¥140.40', '¥117.00', '法国皇家ROYAL CANIN 小型犬幼犬粮专用狗粮2kg MIJ31', '29.25元/斤', '已售144975 ', '1313', '../img/ls6.jpg', '21', '25', '2.00kg', 1),
	(7, '007', '¥249.60\r\n', '¥208.00', '法国皇家ROYAL CANIN A3优选幼犬粮哺乳期母犬及幼犬适用 8kg', '13元/斤', '已售138093', '3355', '../img/ls7.jpg', '26', '29', '8.00kg', 0),
	(8, '008', '¥230.40\r\n', '¥192.00 ', '法国皇家ROYAL CANIN 成犬粮狗粮8kg CC', '12元/斤', '已售116333', '2413', '../img/ls8.jpg', '30', '35', '8.00kg', 0),
	(9, '009', '¥282.20\r\n', '¥279.00', '伟嘉 成猫粮精选海洋鱼味猫粮10kg', '13.95元/斤', '已售58696  ', '677', '../img/ls10.jpg', '41', '45', '10.00kg', 0),
	(10, '010', '¥249.60', '¥208.00', '法国皇家ROYAL CANIN 泰迪贵宾成犬粮专用狗粮3kg PD30', '34.67元/斤', '已售452243 ', '2958', '../img/ls2.jpg', '6', '9', '3.00kg', 0),
	(11, '011', '¥133.20', '¥111.00', '法国皇家ROYAL CANIN 10个月-8岁小型成犬粮2kg PR27', '27.75元/斤', '已售301176', '1419', '../img/ls3.jpg', '10', '13', '2.00kg', 0),
	(12, '012', '¥53.50', '¥48.00', '宝路 中小型成犬粮牛肉肝蔬菜及谷物狗粮1.8kg', '13.33元/斤', '已售282046', '740', '../img/ls4.jpg', '14', '16', '1.80kg', 0),
	(13, '013', '¥304.80\r\n', '¥254.00', '法国皇家ROYAL CANIN 室内成猫猫粮2kg*2 i27', '31.75元/斤', '已售12826', '43', '../img/ls12.jpg', '49', '53', '2.00kg', 0),
	(14, '014', '¥47.40\r\n', '¥42.90', '伟嘉 成猫粮精选海鲜味猫粮1.3kg', '16.5元/斤', '\r\n已售18694 ', '77', '../img/ls11.jpg', '46', '48', '1.30kg', 0),
	(15, '015', '¥230.40\r\n', '¥192.00 ', '法国皇家ROYAL CANIN 成犬粮狗粮8kg CC', '12元/斤', '已售116333', '2413', '../img/ls8.jpg', '26', '29', '8.00kg', 0),
	(16, '016', '¥51.90\r\n', '¥42.90', '喜跃 成猫粮海鲜味全价猫粮1.3kg', '16.5元/斤', '\r\n已售5272', '44', '../img/ls13.jpg', '54', '57', '1.30kg', 0),
	(17, '017', '¥249.60', '¥208.00', '法国皇家ROYAL CANIN 泰迪贵宾成犬粮专用狗粮3kg PD30', '34.67元/斤', '已售452243 ', '2958', '../img/ls2.jpg', '6', '9', '3.00kg', 0),
	(18, '018', '¥140.40\r\n', '¥117.00', '法国皇家ROYAL CANIN 小型犬幼犬粮专用狗粮2kg MIJ31', '29.25元/斤', '已售144975 ', '1313', '../img/ls6.jpg', '21', '25', '2.00kg', 0),
	(19, '019', '¥195.00\r\n', '¥159.00', '冠能PRO PLAN 小型犬成犬挑食及美毛配方全价狗粮2.4kg(800g*3)', '33.13元/斤\r\n\r\n', '\r\n已售7835', '57', '../img/ls14.jpg', '58', '62', '2.40kg', 0),
	(20, '020', '¥41.40', '¥37.30', '宝路 幼犬粮肉类奶蔬菜谷物配方狗粮1.3kg', '14.35元/斤', '已售176550', '841', '../img/ls5.jpg', '17', '20', '1.30kg', 0),
	(21, '021', '¥249.60', '¥208.00', '法国皇家ROYAL CANIN 泰迪贵宾成犬粮专用狗粮3kg PD30', '34.67元/斤', '已售452243 ', '2958', '../img/ls2.jpg', '6', '9', '3.00kg', 0),
	(22, '022', '¥85.20', '¥71.00', '法国皇家ROYAL CANIN 小型犬离乳期奶糕1kg MIS30', '35.5元/斤', '已售489355 ', '2248', '../img/ls1.jpg', '1', '5', '1.00kg', 0),
	(23, '023', '¥249.60\r\n', '¥208.00', '法国皇家ROYAL CANIN A3优选幼犬粮哺乳期母犬及幼犬适用 8kg', '13元/斤', '已售138093', '3355', '../img/ls7.jpg', '26', '29', '8.00kg', 0),
	(24, '024', '¥249.60', '¥208.00', '法国皇家ROYAL CANIN 泰迪贵宾成犬粮专用狗粮3kg PD30', '34.67元/斤', '已售452243 ', '2958', '../img/ls2.jpg', '6', '9', '3.00kg', 0),
	(25, '025', '¥174.90\r\n', '¥159.00', '冠能PRO PLAN 中型犬成犬粮全价狗粮2.5kg', '31.8元/斤', '已售1388  ', '17', '../img/ls15.jpg', '63', '65', '2.50kg', 0),
	(26, '026', '¥53.50', '¥48.00', '宝路 中小型成犬粮牛肉肝蔬菜及谷物狗粮1.8kg', '13.33元/斤', '已售282046', '740', '../img/ls4.jpg', '14', '16', '1.80kg', 0),
	(27, '027', '¥85.20', '¥71.00', '法国皇家ROYAL CANIN 小型犬离乳期奶糕1kg MIS30', '35.5元/斤', '已售489355 ', '2248', '../img/ls1.jpg', '1', '5', '1.00kg', 0),
	(28, '028', '¥41.40', '¥37.30', '宝路 幼犬粮肉类奶蔬菜谷物配方狗粮1.3kg', '14.35元/斤', '已售176550', '841', '../img/ls5.jpg', '17', '20', '1.30kg', 0),
	(29, '029', '¥140.40\r\n', '¥117.00', '法国皇家ROYAL CANIN 小型犬幼犬粮专用狗粮2kg MIJ31', '29.25元/斤', '已售144975 ', '1313', '../img/ls6.jpg', '21', '25', '2.00kg', 0),
	(30, '030', '¥51.90\r\n', '¥42.90', '喜跃 成猫粮海鲜味全价猫粮1.3kg', '16.5元/斤', '\r\n已售5272', '44', '../img/ls13.jpg', '54', '57', '1.30kg', 0),
	(31, '031', '¥249.60', '¥208.00', '法国皇家ROYAL CANIN 泰迪贵宾成犬粮专用狗粮3kg PD30', '34.67元/斤', '已售452243 ', '2958', '../img/ls2.jpg', '6', '9', '3.00kg', 0),
	(32, '032', '¥53.50', '¥48.00', '宝路 中小型成犬粮牛肉肝蔬菜及谷物狗粮1.8kg', '13.33元/斤', '已售282046', '740', '../img/ls4.jpg', '14', '16', '1.80kg', 0);
/*!40000 ALTER TABLE `list` ENABLE KEYS */;


-- 导出  表 project.user 结构
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(200) COLLATE utf8_croatian_ci NOT NULL DEFAULT '0',
  `phone` varchar(50) COLLATE utf8_croatian_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_croatian_ci NOT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

-- 正在导出表  project.user 的数据：~20 rows (大约)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
REPLACE INTO `user` (`index`, `email`, `phone`, `password`) VALUES
	(1, '1', '', '1'),
	(2, '', '2', '2'),
	(3, '', '13413617095', '123456'),
	(4, '', '11', '11'),
	(5, '', '111', '11'),
	(6, '', '1111', '11'),
	(7, '', '22', '22'),
	(8, '', '222', '22'),
	(9, '', '13333333333', '123456'),
	(10, '', '13333333335', '123123'),
	(11, '', '4', '4'),
	(12, '', '13444444444', '123123'),
	(13, '', '13413617094', '123123'),
	(14, '', '13413617098', '123123'),
	(15, '', '14333333333', '123123'),
	(16, '313275818@qq.COM', '13413617099', '123123'),
	(17, '', '14131231231', '123123'),
	(18, '3132@qq.com', '14131231233', '123123'),
	(19, '31321@qq.com', '3', '111111'),
	(20, '313211@qq.com', '13443617095', '121212');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
