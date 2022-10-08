

/*
truncate - shortens a long string to 15 characters plus an ellipsis (...)
Examples:
truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."

create function
that shortens a string to 15 characters
 strings one ('The fault, dear Brutus, is not in our stars, but in ourselves.')
 result 'The fault, dear...'
 string 2 ("Well, that's just, like, your opinion man.")
 result  "Well, that's ju..."
 for loop
 if statement
 else statement
*/


function Truncate (str1){
    let newstr = "";

    for( let i = 0; i < str1.length; i++){
         
        if(i === 15){
 
            
            newstr += "...";
	     break;
       } else {
        newstr += str1[i];
        
       }
  
    }
    return newstr
}
console.log(Truncate('The fault, dear Brutus, is not in our stars, but in ourselve.'));
console.log(Truncate("Well, that's just, like, your opinion man."));
