//Multiples of 3 and 5

var sum = 0;
var list = [];

function multiplesOf3and5(number) {
  // Good luck!

  for(var i = 1; i < number; i++){
    if((i % 3 === 0 )||(i % 5 === 0)||(i % 3 === 0 && i % 5 === 0)){
        list.push(i);
        sum = sum + i;    
        }
    }
    console.log("List of Multiples of 3 and 5 from 1 - "+number );
    console.log(list);
    console.log("SUM")
    console.log(sum);
    return sum;   
}
multiplesOf3and5(1000);
