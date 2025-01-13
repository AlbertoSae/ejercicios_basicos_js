const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList, nameToFind) {
    // Completar

    //obtener posicion
    let position= nameList.indexOf(nameToFind);

    
    if (position !==-1){
        return{Existe:true, position: position};
    }else{
        return{Existe:false};
    }

  }

  console.log(nameFinder(names, 'Bruce'));
  console.log(nameFinder(names, 'Juan'));