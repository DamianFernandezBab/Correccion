


export function ahorcado() {
    const palabras = ["perro", "gato", "mascota", "nube", "sol", "luna", "aplicacion", "pagina", "atomo", "licenciatura", "porton", "puerta", "mesa", "silla", "computadora", "variable", "ruleta", "documento", "video", "imagen", "sonido"];
    const palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    
    let palabraAdivinada = "";
    for (let i = 0; i < palabraSecreta.length; i++) {
      palabraAdivinada += "_";
    }
  
    let intentos = 0;
    const maxIntentos = 6;
  
    while (intentos < maxIntentos) {
      console.log("Palabra: " + palabraAdivinada);
      console.log("Intentos restantes: " + (maxIntentos - intentos));
  
      let letra = prompt("Ingresa una letra:").toLowerCase();
  
      let nuevaPalabraAdivinada = "";
      let acierto = false;
      for (let j = 0; j < palabraSecreta.length; j++) {
        if (palabraSecreta[j] === letra) {
          nuevaPalabraAdivinada += letra;
          acierto = true;
        } else {
          nuevaPalabraAdivinada += palabraAdivinada[j];
        }
      }
  
      if (acierto) {
        palabraAdivinada = nuevaPalabraAdivinada;
  
        if (palabraAdivinada === palabraSecreta) {
          console.log("¡Felicidades! ¡Has adivinado la palabra!");
          return;
        }
      } else {
        intentos++;
        console.log("Letra incorrecta. Intentos restantes: " + (maxIntentos - intentos));
      }
    }
  
    console.log("¡Has perdido! La palabra era: " + palabraSecreta);
  }