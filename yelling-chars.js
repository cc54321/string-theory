

/*
yellingChars - write a function that returns the given string with an exclamation point after each character
Examples:
yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'

1. define a function with one argument -done
2. print a string where each letter is followed by an exclaimation point 
    -> create a new string to hold our new value (define new string) -done
    -> process the string character by character (use a for loop) -done
    -> insert character into new string then insert a "!" right after each character (concat to new string) -done
    -> return new string to function call  -done
 */


    function yellingChars(str){
        let newString = "";
        for (let index = 0; index < str.length; index++) {
            //access each character of the string 
            // newString = newString + str[index] short hand below
            newString += str[index];
            newString += "!";
    
        }
        return newString;
    
    }
    console.log(yellingChars('goodness'));
    console.log(yellingChars('oh hello') );
    
    
