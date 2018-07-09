<?php
	include "DBHelper.php";
	// include "format.php";

	// $sql = "select * from student";

	// $result = query($sql);
	// echo json_encode($result, JSON_UNESCAPED_UNICODE);
	//判断当前 email 是否已存在数据表中
	// $sql = format("select * from gz1610 where email='{0}' and password='{1}'", $_POST["email"], $_POST["password"]);
	
	$username = !isset($_POST["username"]) ? "" : $_POST["username"];
	$password = !isset($_POST["password"]) ? "" : $_POST["password"];
	$sql = "select * from user where email = '$username' and password = '$password'  || phone = '$username' and password = '$password'";
	$result = query_oop($sql);
	// echo json_encode($result, JSON_UNESCAPED_UNICODE);
	//当前 username 不存在，执行插入操作
	// echo count($result);
	if(count($result) > 0){
        echo "{status: true}";
    }else{
        echo "{status: false, message: '登录失败'}";
    }
?>