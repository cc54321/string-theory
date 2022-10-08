/**
 * xify -  a function that returns the same string, but with every character replaced by an 'x'
Examples:
xify('hello') -> 'xxxxx'
xify('hi there') -> 'xxxxxxxx' 

1. define a function called xify with one argument called "str" -done
2.  return the length of the inputted string in x's  
    -> we need create a new string to hold the x's  -done
    -> process the string character by character -done
    -> add x for each character in inputted string  -done 
    -> we need to return the string 


*/


function xify(str) {
    let newStr = "";
    let i = 0;

    // let's process the inputted string character by character
    while(i < str.length){
        newStr += "x";
        i++;
    }
    return newStr;
}

//alternate solution using for loop
function xify_for(str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        newStr += "x";
    }
    return newStr;
}

console.log(xify("hello"));
console.log(xify("hi there"));

console.log(xify_for("hello"));
console.log(xify_for("hi there"));


