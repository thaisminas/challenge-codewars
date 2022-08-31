<?php

function oddCount($n) {
    $newArray = [];

    for($i = 0; $i < $n; $i++){
        if($i % 2 == 1){
            array_push($newArray, $i);
        }
    }

    return count($newArray);
}


print_r(oddCount(7));
print_r(oddCount(15));