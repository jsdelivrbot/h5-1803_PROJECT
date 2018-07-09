<?php
	// header('Access-Control-Allow-Origin: *');
 //    header('Access-Control-Allow-Methods: POST, GET');
 //    header('Accees-Control-Request-Headers: accpet,content-type');
	include 'DBHelper.php';
	
	$email = $_POST["email"];
	$password = $_POST["password"];
	$phone = $_POST["phone"];


	//判断当前 phone 是否已存在数据表中

	$check = "select * from user where phone = '$phone' || email = '$email'";

	$result = query_oop($check);

	//当前 phone 不存在，执行插入操作
	if(count($result) < 1){
		$sql = "insert into user(email, password, phone) values('$email', '$password', '$phone')";
		// echo $sql;
		$excute = excute($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '插入失败！！！'}";
		}
	} else {
		echo "{state: false, message: 'phone 或 email 已被注册！！！'}";
	}
	
?> 