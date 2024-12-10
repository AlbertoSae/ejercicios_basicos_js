const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  // Completar código

  let num= numbers.length; //7
  let n= 0;
  let number=0;
  let sum =0;

  while(n<num){
    number= numbers[n];
    sum=sum + number;
    n++;
  }
    
  console.log(sum);
}
sumNumbers(numbers);//151

