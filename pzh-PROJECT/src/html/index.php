 <?php
    include "DBHelper.php";

    $sql = "select * from home";

    $result = query_oop($sql);

    $lists = json_encode($result);

    echo "{status: true, data: $lists}";
?>