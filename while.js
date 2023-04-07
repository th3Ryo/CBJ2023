var estudiantes = ["maria","pedro","jose","fabian"]

function saludo (estudiantes) {
    console.log(`hola, ${estudiantes}`)
}

while (estudiantes.length >0) {
    var estidiante = estudiantes.shift();
    saludo (estidiante)

}