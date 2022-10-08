

/*
indexedChars - adds the index of each character before that character in the given string
Examples:
indexedChars('hello') -> '0h1e2l3l4o'
indexedChars('bye') -> '0b1y2e'
Hints:
We can add something BEFORE the current character as well!
create a function> done
create index >done
create for loop done 
create new string
return
consolelog twice


*/

function indexedChars(str1){

    let newsStr = "";

     for (let i = 0; i < str1.length; i++){

        newsStr += i;
        newsStr += str1[i];

     }
     return newsStr;
}

console.log(indexedChars("Hello"));
console.log(indexedChars("Bye"));
