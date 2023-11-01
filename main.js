import { juegoTrivia } from "./nivel1.js";
import { juegoTriviaNivelDos } from "./nivel2.js";
import { ahorcado } from "./ahorcado.js";

const decision = prompt("¿A qué juego quieres jugar? 'trivia' o 'ahorcado'. Responde con 'trivia' o 'ahorcado'.");
const decisionMinusculas = decision.toLowerCase();

if (decisionMinusculas === 'trivia') {
  const nombreUsuario = prompt("Por favor, ingresa tu nombre:");
  const preguntasNivel1 = [
    ['¿Que musico reconocido tiene como apodo "El principe de las tinieblas"? Ozzy Osbourne // Roger Waters // Marilyn Manson ', 'Ozzy Osbourne'],
    ['¿A que banda pertenece la cancion "Another brick in the wall"? 30 Seconds to mars //Pink Floyd //Rammstein  ', 'Pink Floyd'],
    ['¿En que año murio Gustavo Cerati? 2012 // 2013 // 2014 ', '2014'],
    ['¿Quien fue el lider de la banda Pescado rabioso? Spinetta // Cerati // Charly Garcia  ', 'Spinetta'],
    ['¿Que famosa artista pop se rapo la cabeza en los 2000 para evitar que le hagan un analisis de droga? Amy lee // Britney spears // Lady Gaga  ', 'Britney spears'],
    ['¿De que artista se trata la pelicula "8 Miles"? Eminem // 2pac // Biggie ', 'Eminem'],
    ['¿A quien se le adjudica el mito de sacarse una costilla? Marilyn manson // Till Lidenman // Justin Bieber ', 'Marilyn manson'],
    ['¿El vocalista de que banda murio en un accidente en motocicleta? Rammstein // Cannibal Corpse // Suicide Silence ', 'Suicide Silence'],
    ['¿Que artista argentino se tiro de un 7mo piso a la pileta? Pity Alvares // Charly Garcia // Indio Solari ', 'Charly Garcia'],
    ['¿Que conocido actor tambien forma parte de la banda 30 Seconds to mars? Jared leto // Chester Bennington //Justin Timberlake ', 'Jared leto']
  ];

  const puntajeNivel1 = juegoTrivia(preguntasNivel1);

  if (puntajeNivel1 >= 6) {
    const preguntasNivel2 = [
      ['¿A qué edad murió Juice Wrld?', '21 años'],
      ['¿Qué banda creó la canción "Bohemian Rhapsody"?', 'Queen'],
      ['¿Quién de estos artistas se dedica al género Trap?', 'Lil Xan'],
      ['¿En qué año se estrenó la canción "Someone like you" de Adele?', '2011'],
      ['Actualmente, ¿qué artista tiene el mayor número de premios Grammy?', 'Beyonce'],
      ['¿Qué famoso músico es conocido como "The Boss"? Bruce Springsteen // Mick Jagger // Elton John', 'Bruce Springsteen'],
      ['¿Cuál es el nombre real del vocalista de la banda U2, Bono? Paul David Hewson // David Howell Evans // Adam Charles Clayton', 'Paul David Hewson'],
      ['¿Qué banda se hizo famosa con la canción "Wonderwall"? Oasis // Radiohead // Coldplay', 'Oasis'],
      ['¿Cuál es el nombre real del rapero conocido como 50 Cent? Curtis James Jackson // Calvin Cordozar Broadus Jr. // Marshall Mathers', 'Curtis James Jackson'],
      ['¿A qué banda pertenece el famoso guitarrista Slash? Guns N\' Roses // AC/DC // Metallica', 'Guns N\' Roses']
    ];
    juegoTriviaNivelDos(preguntasNivel2);
  } else {
    console.log(`${nombreUsuario}, no has obtenido suficientes puntos para pasar al nivel 2.`);
  }
} else if (decisionMinusculas === 'ahorcado') {
  ahorcado();
} else {
  console.log("Juego no reconocido. Por favor, elige 'trivia' o 'ahorcado'.");
}
