
/*
reverse - reverses the given string
Examples:
reverse reverse('colin') -> 'niloc'
reverse('mesuara') -> 'arausem'

create function
reverse name reverse('colin') -> 'niloc'
reverse name ('mesuara') -> 'arausem
*/

function reverse(str1){

    let backstring = "";

    for(let i = str1.length -1; i >= 0; i--){
        backstring += str1[i];
    }
        return backstring;
}
console.log(reverse("mesuara"));
console.log(reverse("colin"));
