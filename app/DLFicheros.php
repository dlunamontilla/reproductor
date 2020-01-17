<?php
header("Content-Type: application/json; charset=utf-8");
/**
 * @package DLFicheros
 * @author David E Luna M <dlunamontilla@gmail.com>
 * @version 0.0.1
 * 
 */

 define("ALLFILES", "all");

 class DLFicheros {
  protected $basedir;
  protected $format;

  protected function dir() : array {
    
  }

  public function __construct( string $basedir = "/", $format = ALLFILES ) {
    $this -> basedir = (string) $basedir;
    $this -> format = (string) $format;
  }

  
 }
?>

[
  {
    "href": "https://www.google.com/",
    "target": "_blank"
  },

  {
    "href": "https://www.youtube.com/",
    "target": "_blank"
  }
]