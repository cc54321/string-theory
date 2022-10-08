

/*
ciEmailify - creates an email from a two-part name
Examples:
ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'
create a functiom
create 2 students email accounts
from a two part name ('colin jaffe') ('Anthony DeRosa')
colin.jaffe@codeimmersives.com'
*/


function ciEmailify(str1){

    let newstr = "";

    for(let i = 0; i < str1.length; i++){
        if(str1[i] === " "){
            newstr += ".";

        } else {
            newstr += str1[i];
        }
    }

    return newstr.toLowerCase() + "@codeimmersives.com";
}

    
    console.log(ciEmailify('colin jaffe'));
    console.log(ciEmailify('Anthony Derosa') );
