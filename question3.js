/*REDUCE
Write a function that takes a string and returns an total representing the character count for each letter of each
string in the sentence. Use .reduce to build this object. Hint: See .split()`` and string length``` property.
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5} */
var teststring= "Hi Bob and Jim";


let strArray=teststring.split("");

var countLetters = strArray.reduce(function(counter,newstring)
{

    console.log(counter +" ---- " + newstring);
    return ((newstring.length)+counter);
})

console.log(countLetters);
