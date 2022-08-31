<?php

function countsheep($num){
    $result = [];
   for($i = 1; $i <= $num; $i++){
       array_push($result,"$i sheep...");
   }

   return implode($result);
}

echo countsheep(0);
echo countsheep(2);
//echo countsheep(3);
