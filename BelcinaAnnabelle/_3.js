//Largest prime factor
var counter = 2;
var list = [];
largestPrimeFactor =(number) =>{
    while(number != 1){
        if (number % counter == 0){
            number /= counter;
            list.push(counter);
        }
        else{
            counter++;
        }
    }
    console.log(list);
    console.log(counter);
}
largestPrimeFactor(600851475143);