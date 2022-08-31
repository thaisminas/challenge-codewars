<?php

function centuryFromYear($year)
{
    return ceil($year / 100);
}

echo centuryFromYear(1705) .PHP_EOL;
echo centuryFromYear(1900) .PHP_EOL;
echo centuryFromYear(1601) .PHP_EOL;
echo centuryFromYear(2000) .PHP_EOL;