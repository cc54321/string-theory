

/*
onlyVowels - returns only the vowels from a word
Examples:
onlyVowels('Colin Jaffe') -> 'oiae'
onlyVowels('quickly') -> 'ui'
onlyVowels('Anthony DeRosa') -> 'Aoeoa'
CREATE FUNCTION
ONLY VOWS  AEIOU to show
create new string
for loop 
if state
return
console log three times as per above
*/




function onlyVows(str1){
   let newstr = "";
   
   for (let i = 0; i < str1.length; i++){

    if(str1[i] === "a" || str1[i] === "e" || str1[i] === "i" || str1[i] === "o" || str1[i] === "u"){

        newstr += str1[i]
    }
}
return newstr;
}
console.log(onlyVows('Colin Jaffe'))
console.log(onlyVows('quickly'))
console.log(onlyVows('Anthony DeRosa'))

