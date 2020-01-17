sass = scss
parametros = -w -t expanded
rutas = sass:css

interprete = php
flags = -S
servidor = localhost
puerto = 1200

# Ejecutar programa:
code = ${interprete} ${flags} ${servidor}:${puerto}

main:
	${sass} ${parametros} ${rutas}

servidor:
	${code} && ${sass} ${parametros} ${rutas} &

terminar:
	sudo killall -9 ${code} ${sass}