const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(list) {
    // Completar
    const uniqueItems = [];
    for (const item of list) {
      // Si el elemento no está en el array auxiliar, lo añadimos
      if (!uniqueItems.includes(item)) {
        uniqueItems.push(item);
      }
    }
    return uniqueItems;
  }
  const uniqueItems = removeDuplicates(duplicates);
console.log(uniqueItems);