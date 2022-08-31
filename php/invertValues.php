<?php

function invert(array $a): array {
    $result = [];

    foreach ($a as $values){
        if($values <= 0){
            array_push($result, $values * -1);
        }

        if($values >= 1){
            array_push($result, $values * -1);
        }
    }

    return $result;
}

print_r(invert([1, 2, 3, 4, 5])) .PHP_EOL;
print_r(invert([1, -2, 3, -4, 5])) .PHP_EOL;
print_r(invert([0])) .PHP_EOL;