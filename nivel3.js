export function juegoTriviaNivelTres(preguntas) {
    let puntaje = 0;
  
    console.log("Bienvenido al nivel 3");
  
    for (let i = 0; i < preguntas.length; i++) {
      const respuestaUsuario = prompt(preguntas[i].pregunta);
      if (respuestaUsuario && respuestaUsuario.toLowerCase() === preguntas[i].respuesta.toLowerCase()) {
        puntaje++;
        console.log('¡Respuesta correcta! Tu puntaje es = ' + puntaje);
      } else {
        console.log('Respuesta incorrecta. Tu puntaje es = ' + puntaje);
      }
    }
  
    console.log(`Tu puntaje final es ${puntaje} de ${preguntas.length}. ¡Gracias por jugar!`);
  }
  
  // Definir las preguntas y respuestas como objetos
  const preguntasNivel3 = [
    { pregunta: '¿Cuál es el nombre real de la cantante Lady Gaga?', respuesta: 'Stefani Germanotta' },
    { pregunta: '¿Qué famoso rapero se conoce como "Slim Shady"?', respuesta: 'Eminem' },
    { pregunta: '¿Quién es conocido como el "Rey del Pop"?', respuesta: 'Michael Jackson' },
    { pregunta: '¿Qué banda se hizo famosa con la canción "Stairway to Heaven"?', respuesta: 'Led Zeppelin' },
    { pregunta: '¿Cuál es el nombre real del cantante de Nirvana, Kurt Cobain?', respuesta: 'Kurt Donald Cobain' },
    { pregunta: '¿A qué banda pertenecía el legendario guitarrista Jimi Hendrix?', respuesta: 'The Jimi Hendrix Experience' },
    { pregunta: '¿Quién es conocido como el "Rey del Reggaetón"?', respuesta: 'Daddy Yankee' },
    { pregunta: '¿Qué famoso cantante es conocido por su apodo "The Boss"?', respuesta: 'Bruce Springsteen' },
    { pregunta: '¿Qué famoso rapero es conocido por su álbum "Good Kid, M.A.A.D City"?', respuesta: 'Kendrick Lamar' },
    { pregunta: '¿Cuál es el nombre real del rapero conocido como Snoop Dogg?', respuesta: 'Calvin Cordozar Broadus Jr.' }
  ];
  
  export { preguntasNivel3 };