const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  // Completar

  let num= numbers.length; //7

  let n= 0;
  let number=0;
  let sum =0;

  while(n<num){
    number= numbers[n];
    sum=sum + number;
    n++;
  }
    
  let result= sum/num;

  console.log(result);

}
average(numbers);