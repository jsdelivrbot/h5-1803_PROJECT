<?php
    include "DBHelper.php";
    $limit = $_GET['limit'];

    $sql = "select * from list limit " .$limit .",8";
    
    $result = query_oop($sql);

    $lists = json_encode($result);

    echo "{status: true, data: $lists}";
?>