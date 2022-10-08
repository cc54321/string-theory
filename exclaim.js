

/*
exclaim - returns the given sentence with every question mark or period changed to an exclamation point
Examples:
exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
exclaim('This is fine.') -> 'This is fine!'

every question mark and period will change to !
create a function

*/

function exclaim(str1){

let newstr = "";

for(let i = 0; i < str1.length; i++){

    if(str1[i] === "?" || str1[i] === "."){
        
        newstr += "!";
    }else {
        newstr += str1[i];
    }
}
return newstr;
}

console.log(exclaim('What are you doing? Are you a fool?'));
console.log(exclaim('This is fine.'));

