//Number letter counts

var wordString = "";
var list = [];
var letters = /^[A-Za-z]+$/;
countWords = (numberWord) =>{
    wordString += numberWord;
    for (var i = 0; i < wordString.length;i++){
        if(wordString.charAt(i).match(letters)){
            list.push(i);           
        }
    }
    console.log(wordString);
    console.log(list.length)
}
countWords("three hundred and forty-two");