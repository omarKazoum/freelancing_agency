<?php
$products=[];
for($i=0;$i<10;$i++){
    $products[]="product ".$i;
}
header('Content-type:application/json');
$res=[];
$res['products']=$products;
echo json_encode($res);

