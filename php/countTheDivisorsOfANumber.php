<?php

function divisors($n) {
    $result = 1;

    for($i = 0; $i < $n; $i++){
        if(fmod($n, $i) == 0){
            $result += 1;
        }
    }
    return $result;
}


echo divisors(1) . PHP_EOL; // 1
echo divisors(4) . PHP_EOL; // 3
echo divisors(11) . PHP_EOL; // 2
echo divisors(64) . PHP_EOL; // 7