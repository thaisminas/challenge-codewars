<?php

function replace_dots(string $str): string {
    return preg_replace('/\./', '-', $str); //remove todos os pontos da string
}

echo replace_dots('thais.silva');