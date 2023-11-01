

export function juegoTrivia(preguntas) {
  let puntaje = 0;

  for (let i = 0; i < preguntas.length; i++) {
    const respuestaUsuario = prompt(preguntas[i][0]);
    if (respuestaUsuario && respuestaUsuario.toLowerCase() === preguntas[i][1].toLowerCase()) {
      puntaje++;
      console.log('¡Respuesta correcta! tu puntaje es = ' + puntaje);
    } else {
      console.log('Respuesta incorrecta. , tu puntaje es = ' + puntaje);
    }
  }
  if (puntaje === 6){
  console.log(`Tu puntaje final es ${puntaje} de ${preguntas.length}. Ahora pasaras al nivel 2`);
  }
  return puntaje; 
}