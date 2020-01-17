<?php 
$json = [
	"songs" => [
		"id" => 1,
		"name" => "beside you",
		"artist" => "5 Seconds fo Summer",
		"song" => "mp3/5 Seconds Of Summer-seside you.mp3"
	]
];

// echo json_encode( $json );
function ficheros ( $url = "../music", $enlace = false ) {
	// Lectura de directorios de archivos
	$dir = opendir($url);
	$ficheros = [];
	$ext = [];

	while ($fichero = readdir($dir)) {
		if ($fichero !== "." && $fichero !== "..") {
			// Separar las extensiones de los archivos y comprobar que se cumpla lo requerido
			$ext = explode(".", $fichero);
			$mp3 = is_array($ext) &&  count($ext) > 0 && strtolower($ext[count($ext) - 1]) == "mp3";

			if ( $mp3 ) {

				if ( $enlace ) {
					$ficheros[] = "\t<a href=\"../music/$fichero\"><span class=\"fas fa-file-audio fa-2x p10\"></span>$fichero</a>";
				}else {
					$ficheros[] = "../music/$fichero";
				}

			}

		}
	}

	closedir($dir);

	return $ficheros;
}

// Funciones de archivos
function archivos ( $archivos, $bool = false ) {
	$content = "";

	if ( is_array( $archivos ) && count( $archivos ) > 0 ) {
		sort($archivos);

		if ( $bool ) {
			foreach ( $archivos as $key => $value ) {
				$content = "$value";
				break;
			}

			return $content;
		}

		foreach ( $archivos as $key => $value ) {
			$content .= "<li>$value</li>\n";
		}

		return $content;

	}

}

// Obtner archivos del directorio
$fichero = ficheros ( "../music" );
$ficheros = ficheros ( "../music", true );

$enlaces = archivos ( $ficheros );
$enlace = archivos ( $fichero, true );

// $archivos = "<ul>\n$archivos</ul>";
?>