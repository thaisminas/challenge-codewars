<?php

function square_sum($numbers) : int {
    $result = [];
    
    foreach ($numbers as $arr) {
      array_push($result, pow($arr, 2));
    };
      
    $total = array_sum($result);
      
    return $total;
  }