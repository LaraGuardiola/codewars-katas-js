//?https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

/*This time we want to write calculations using consts and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));*/

let hasOperated = false
const res = []
let reduced
const zero = () => setNum(0)
const one = () => setNum(1)
const two = () => setNum(2)
const three = () => setNum(3)
const four = () => setNum(4)
const five = () => setNum(5)
const six = () => setNum(6)
const seven = () => setNum(7)
const eight = () => setNum(8)
const nine = () => setNum(9)
const plus = () => res.push('+')
const minus = () => res.push('-')
const times = () => res.push('*')
const dividedBy = () => res.push('/')

function setNum(num){
    if(!hasOperated){
        res.push(num)
        hasOperated = true
    }else{
        res.push(num)
        resolver(res[1])
        hasOperated = false
        res.length = 0
        return reduced
    }
}

Array.prototype.swapItems = function(a, b){
    this[a] = this.splice(b, 1, this[a])[0]
    return this
}

const resolver = (symbol) =>{
    switch(symbol){
        case '+':
            reduced = res.filter(num => !isNaN(num))
                        .reduce((prev,curr) => prev + curr)        
            break
        case '-':
            reduced = res.filter(num => !isNaN(num))
                        .swapItems(0,1)
                        .reduce((prev,curr) => prev - curr)
            break
        case '*':
            reduced = res.filter(num => !isNaN(num))
                        .reduce((prev,curr) => prev * curr)   
            break
        case '/':
            reduced = Math.floor(res.filter(num => !isNaN(num))
                                    .swapItems(0,1)
                                    .reduce((prev,curr) => prev / curr))
            break
    }
}

console.log(one(plus(nine())))
console.log(nine(minus(one())))
console.log(nine(times(two())))
console.log(nine(dividedBy(three())))