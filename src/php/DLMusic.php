<?php
/**
 * @package DLMusic
 * @author David E Luna M <davidlunamontilla@gmail.com>
 * @license MIT
 * @version 0.0.1b
 */
class DLMusic {
    private $base_dir;
    private $path;

    /**
     * @param string $base_dir Directorio base
     * a utilizar para listar archivos de música.
     */
    public function __construct(
        string $base_dir = "/../../",
        string $path = "multimedia/music"
    ) {
        $this->base_dir = (string) __DIR__ . "$base_dir";
        $this->path = (string) $path;
    }

    /**
     * Al ejecutar esta función se listarán un array de archivos
     * señalando la ruta relativa de los archivos de música.
     */
    public function init() {
        $path = $this->base_dir . $this->path;

        if (!is_dir($path)) {
            is_writable(dirname($this->path))
                ? mkdir($path, 0755, true)
                : ["No tiene permiso para escribir sobre este directorio"];
        }


        $dir = opendir($path);
        $files = [];

        while ($f = readdir($dir)) {
            $excluir = "/[^.]/";
            if (!preg_match($excluir, $f) || is_dir($path . $f)) continue;
            array_push($files, $this->path . $f);
        }

        closedir($dir);

        return $files;
    }
}

$music = new DLMusic;

header("content-type: application/json; charset=utf-8");
// print_r($music->init());
echo json_encode($music->init());
// $music->init();
