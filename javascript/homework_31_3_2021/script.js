/* Write a loop that goes from 1 to 100

for every number that is divisible by 3 and 5, console log "FizzBuzz".
For every number that is divisible by only 3 and not 5, console log "Fizz".
For every number that is divisible by only 5 and not 3, console .log "Buzz".
You will have to check logical operators to do that. Find the link here: https://javascript.info/logical-operators#:~:text=There%20are%20four%20logical%20operators,%2C%20%3F%3F%20(Nullish%20Coalescing).

*/

for (let i = 0; i < 100; i++) {

if (i % 3 === 0 && i % 5 === 0) {
console.log(i + " Fizzbuzz")
}

else if (i % 3 === 0 && i % 5 !== 0) {
console.log(i + " Fizz")
}

else if (i % 5 === 0 && i % 3 !== 0) {
console.log(i + " Buzz")
}

}


