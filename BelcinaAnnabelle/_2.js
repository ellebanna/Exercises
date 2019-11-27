//Even Fibonacci numbers

function evenFibonacci(number){
    let list = [1,1];
    var even = [];
    var temp = 0;
    var sum = 0;
    for (let i = 2; i < number+1 ;i++){ 
        temp = list[i - 2] + list[i -1];
        list.push(temp)
        if(temp % 2 == 0){
            even.push(temp)
            sum += temp;
        }        
    } 
    console.log("Even Fibonacci of "+number);
    console.log(list);
    console.log(even);
    console.log("Sum");
    console.log(sum);
    return list;

}
evenFibonacci(10);