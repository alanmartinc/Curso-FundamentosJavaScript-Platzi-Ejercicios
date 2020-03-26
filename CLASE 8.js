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

function imprimirNombreEnMayusculas({ nombre }) {
	console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(alan)
imprimirNombreEnMayusculas(lucas)
imprimirNombreEnMayusculas({ nombre: 'Mauricio' })

function cumpleaños(persona) {
	return {
		...persona,
		edad: persona.edad + 1
	}
}

