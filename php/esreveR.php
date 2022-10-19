<?php

function reverse(array $a): array {
    $newArr = [];

    foreach ($a as $item){
        array_unshift($newArr, $item);
    }

    return $newArr;
}


print_r(reverse([1, 2, 3]));
print_r(reverse([1, null, 14, 'two']));