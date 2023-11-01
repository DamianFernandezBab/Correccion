
export function juegoTriviaNivelDos(preguntas) {
  let puntaje = 0;

  console.log("Bienvenido al nivel 2");

  for (let i = 0; i < preguntas.length; i++) {
    const respuestaUsuario = prompt(preguntas[i][0]);
    if (respuestaUsuario && respuestaUsuario.toLowerCase() === preguntas[i][1].toLowerCase()) {
      puntaje++;
      console.log('¡Respuesta correcta! Tu puntaje es = ' + puntaje);
    } else {
      console.log('Respuesta incorrecta. Tu puntaje es = ' + puntaje);
    }
  }

  console.log(`Tu puntaje final es ${puntaje} de ${preguntas.length}. ¡Gracias por jugar!`);
  console.log("¡Juego terminado! Gracias por jugar.");
  return puntaje;
}