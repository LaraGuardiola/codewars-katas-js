//?https://www.codewars.com/kata/54ff3102c1bad923760001f3

/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
    let vowelsCount = 0;
    const VOWELS = ['a','e','i','o','u']
    const arr = str.split('')
    arr.forEach(letter=>{
        for(let vowel of VOWELS){
            if(letter === vowel)
                vowelsCount++
        }
    })
    return vowelsCount;
}

console.log('murcielago')