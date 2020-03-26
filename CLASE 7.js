var alan = {
	nombre: 'Alan',
	apellido: 'Cabot',
	edad: 22
}

var lucas = {
	nombre: 'Lucas',
	apellido: 'Cabot',
	edad: 24
}

function imprimirNombreEdad(persona) {
	var { nombre, edad } = persona;
	console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreEdad(alan)
imprimirNombreEdad(lucas)
