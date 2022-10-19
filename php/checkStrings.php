
<?php


function checkStrings(string $phrase){
    $newArray = str_split($phrase);
    return $newArray;
}

echo checkStrings('ThaisMinasDaSilva');