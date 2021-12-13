<?php
/**
 * @param string $path Ingrese la ruta completa
 * para procesarla.
 * 
 * @return string Devuelve una ruta como un string.
 */
function processPATH(string $path): string {
    $pattern = "/\.\.\//";

    preg_match_all($pattern, $path, $found);
    $count = count($found[0]);
    $path = preg_replace($pattern, "", $path);
    $bars = preg_split("/\//", $path);
    $offset = count($bars) - (1 + $count);

    // Eliminar los últimos elementos del array en
    // función de la ruta elegida por el usuario, siempre
    // que sea posible:
    array_splice($bars, $offset, $count);

    // No continuar mientras no me devuelva un Array:
    if (!is_array($bars)) return "";

    return join("/", $bars);
}

$path = processPATH(__DIR__ . "/../") . "src/php/DLMusic.php";

include $path;

$music = new DLMusic;
$music->init();