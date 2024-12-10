const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
  // Completar
    let arrayLehgth= mixedElements.length;//9
    let n= 0;
    let sum= 0;
    while(n<arrayLehgth){
        
        let arrayElement= mixedElements[n];
        let elementType= typeof arrayElement;
        let number1;

        if(elementType == "string"){
            number1= arrayElement.length;
        }else{
            number1= arrayElement;
        }
        sum=sum+number1;
        n++;
    }
    console.log(sum);
}
averageWord(mixedElements);