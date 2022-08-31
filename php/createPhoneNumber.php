<?php

function createPhoneNumber(Array $numbersArray) {
    $countryCode = [];
    $numberPhone = [];

  for($i = 0; $i < count($numbersArray); $i++){
      if($i <= 2){
          array_push($countryCode, $numbersArray[$i]);
      }

      if($i >= 3){
          if($i == 6){
              array_push($numberPhone,"-");
          }
          array_push($numberPhone,$numbersArray[$i]);
      }
  }

  $convertCode = implode("",$countryCode);
  $convertPhone = implode("", $numberPhone);

  return "($convertCode) $convertPhone";
}

echo createPhoneNumber([1,2,3,4,5,6,7,8,9,0]) .PHP_EOL;
echo createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) .PHP_EOL;