//Find the difference between the sum of the squares of
// the first one hundred natural numbers and the square of the sum.

var list = []; 
var list2 = [];
var square = 0;
var sum1 = 0;
var sum = 0;
sumSquareDifference = (number) => {
    for(var i = 1; i < number+1; i++){
        square = i*i;
        list.push(square);
        sum1 += square;
    }

    for(var i = 1; i < number+1; i++){
        list2.push(i);
        sum += i;
        square = sum*sum;
    }
    console.log(list2);
    console.log(sum1)
    console.log(list);
    console.log(square);

    var difference = square - sum1;

    
    console.log(difference);
    
    return difference;
}
sumSquareDifference(10);