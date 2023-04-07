var estudiantes = ["maria","pedro","jose","fabian"]

function saludo (estudiantes) {
    console.log(`hola, ${estudiantes}`)
}

for (var i = 0; i < estudiantes.length; i++) {
    saludo[i]
}
//otra forma bastente interesante
for ( var est of estudiantes){
    saludo(est)
}