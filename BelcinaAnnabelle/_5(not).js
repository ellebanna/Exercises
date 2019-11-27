//Smallest multiple

var product = 0;
var list = [];
smallestMultiple = (num1,num2)=>{
    product = num1 * num2;
    for(var i = 1; i < product;i++){
        if(i % num1 == 0 && i % num2 == 0){
            list.push(i);
        }
    }
    console.log("Multiples of "+num1 +" and "+num2);
    console.log(list);
    console.log("Smallest multiple of "+num1 +" and "+num2);
    let smallest = list[0];
    console.log(smallest);

}

smallestMultiple(9,3);