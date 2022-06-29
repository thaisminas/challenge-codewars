<?php

function points(array $games): int {
    $count = 0;

    foreach ($games as $match){
        $resultLeft = strstr($match, ':', true);
        $resultRight = substr($match, -1, 1);

        if ($resultLeft > $resultRight){
            $count += 3;
        }
        if($resultLeft == $resultRight){
            $count += 1;
        }
    }

    return $count;

}

echo points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']);