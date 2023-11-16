const messages = [
  "Cree que puedes y estarás a mitad de camino.",
  "La única forma de hacer un gran trabajo es amar lo que haces.",
  "No mires el reloj; haz lo que hace. Sigue adelante.",
  "Tu tiempo es limitado, no lo malgastes viviendo la vida de otra persona.",
  "El futuro pertenece a aquellos que creen en la belleza de sus sueños.",
  "El éxito no es definitivo, el fracaso no es mortal: es el valor para continuar lo que cuenta.",
  "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
  "En medio de la dificultad yace la oportunidad.",
  "No dejes que te manipulen los miedos en tu mente. Déjate guiar por los sueños en tu corazón.",
  "El único límite para nuestra realización de mañana serán nuestras dudas de hoy.",
  "No cuentes los días, haz que los días cuenten.",
  "El camino hacia el éxito y el camino hacia el fracaso son casi exactamente iguales.",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };