const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) {
  // Completar código

  let numArray= avengers.length; //6

  let n = 0;
  let i=0;
  while (n<numArray){
    
    let wordLength = avengers[n];
    let chiquitin = wordLength.length;

    if(i<chiquitin){
      i = chiquitin;
      j = avengers[n]  ;
    }
    n++; 
  }
 console.log (j);

}

findLongestWord(avengers);
