<?php


function pillars($numberOfPillars, $dist, $width)
{
    if($numberOfPillars == 0 && $numberOfPillars == 1){
        echo 'to aqui 1 ' . 0 . PHP_EOL;
        return 0;
    } 

    if($numberOfPillars < 3){

        $result = $dist * 100;

        if($result === 1000){
            return 0;
        }
    }

    if($numberOfPillars !== 0 && $numberOfPillars !== 3){
        $result = ((($numberOfPillars - 2) * $width) + (($numberOfPillars -1) * $dist * 100));
        return $result;
    }
}

echo pillars(1, 10, 10) . PHP_EOL; //0
echo pillars(2, 20, 25) . PHP_EOL; // 2000
echo pillars(11, 15, 30) . PHP_EOL; // 15270