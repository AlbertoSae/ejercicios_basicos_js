const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  function repeatCounter(list) {
    // Completar
    const wordCount = {};

  // Contamos las repeticiones de cada palabra
  for (const word of list) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  // Creamos el resultado en formato 'word: count'
  let result = '';
  for (const word in wordCount) {
    if (result) result += ', '; // Añadimos coma si ya hay algo en el resultado
    result += `${word}: ${wordCount[word]}`;
  }

  return result;
}

// Ejemplo de uso
const result = repeatCounter(words);
console.log(result); // code: 4, repeat: 1, eat: 1, sleep: 3, enjoy: 2