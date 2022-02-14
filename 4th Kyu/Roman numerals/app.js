/*Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

    Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

    Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000
Help
Symbol	Value
I	1
IV	4
V	5
X	10
L	50
C	100
D	500
M	1000*/

String.prototype.repeat = function(times) {
    return (new Array(times + 1)).join(this);
 }

class RomanNumerals {
    static ROMAN_NUMBERS = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1  
    }
    
    static toRoman(arabicNumber){
        if(!isNaN(arabicNumber) && arabicNumber > 0 && arabicNumber < 4000){
            for(const key in this.ROMAN_NUMBERS){
                if(this.ROMAN_NUMBERS[key] === arabicNumber){
                    return key
                }
                if(arabicNumber > 0 && arabicNumber < 4000){
                    return this.transformUnits(this.getUnits(arabicNumber))
                }
            }
        }else throw new Error('Not a number or out of fucking bounds')
    }

    static getUnits(arabicNumber){
        const units = Array.from(String(arabicNumber)).map(num => +num)
        return units
    }

    static transformUnits(arabicNumberArr){
        const romanArr = []
        const keys = Object.keys(this.ROMAN_NUMBERS)
        if(arabicNumberArr.length === 4){
            arabicNumberArr.forEach((num,index) =>{
                if(index === 0){
                    romanArr.push(keys[0].repeat(num))
                }
                if(index === 1){
                    if(num < 4) romanArr.push(keys[2].repeat(num))
                    if(num === 4) romanArr.push(keys[2].concat(keys[1]))
                    if(num === 5) romanArr.push(keys[1])
                    if(num > 5 && num < 9) romanArr.push(keys[1].concat(keys[2].repeat(num - 5)))
                    if(num === 9) romanArr.push(keys[2].concat(keys[0]))
                }
                if(index === 2){
                    if(num < 4) romanArr.push(keys[4].repeat(num))
                    if(num === 4) romanArr.push(keys[4].concat(keys[3]))
                    if(num === 5) romanArr.push(keys[3])
                    if(num > 5 && num < 9) romanArr.push(keys[3].concat(keys[4].repeat(num - 5)))
                    if(num === 9) romanArr.push(keys[4].concat(keys[2]))
                }
                if(index === 3){
                    if(num < 4) romanArr.push(keys[6].repeat(num))
                    if(num === 4) romanArr.push(keys[6].concat(keys[5]))
                    if(num === 5) romanArr.push(keys[5])
                    if(num > 5 && num < 9) romanArr.push(keys[5].concat(keys[6].repeat(num - 5)))
                    if(num === 9) romanArr.push(keys[6].concat(keys[4]))
                }
            })
        }
        if(arabicNumberArr.length === 3){
            arabicNumberArr.forEach((num,index) =>{
                if(index === 0){
                    if(num < 4) romanArr.push(keys[2].repeat(num))
                    if(num === 4) romanArr.push(keys[2].concat(keys[1]))
                    if(num === 5) romanArr.push(keys[1])
                    if(num > 5 && num < 9) romanArr.push(keys[1].concat(keys[2].repeat(num - 5)))
                    if(num === 9) romanArr.push(keys[2].concat(keys[0]))
                }
                if(index === 1){
                    if(num < 4) romanArr.push(keys[4].repeat(num))
                    if(num === 4) romanArr.push(keys[4].concat(keys[3]))
                    if(num === 5) romanArr.push(keys[3])
                    if(num > 5 && num < 9) romanArr.push(keys[3].concat(keys[4].repeat(num - 5)))
                    if(num === 9) romanArr.push(keys[4].concat(keys[2]))
                }
                if(index === 2){
                    if(num < 4) romanArr.push(keys[6].repeat(num))
                    if(num === 4) romanArr.push(keys[6].concat(keys[5]))
                    if(num === 5) romanArr.push(keys[5])
                    if(num > 5 && num < 9) romanArr.push(keys[5].concat(keys[6].repeat(num - 5)))
                    if(num === 9) romanArr.push(keys[6].concat(keys[4]))
                }
            })
        }
        if(arabicNumberArr.length === 2){
            arabicNumberArr.forEach((num,index) =>{
                if(index === 0){
                    if(num < 4) romanArr.push(keys[4].repeat(num))
                    if(num === 4) romanArr.push(keys[4].concat(keys[3]))
                    if(num === 5) romanArr.push(keys[3])
                    if(num > 5 && num < 9) romanArr.push(keys[3].concat(keys[4].repeat(num - 5)))
                    if(num === 9) romanArr.push(keys[4].concat(keys[2]))
                }
                if(index === 1){
                    if(num < 4) romanArr.push(keys[6].repeat(num))
                    if(num === 4) romanArr.push(keys[6].concat(keys[5]))
                    if(num === 5) romanArr.push(keys[5])
                    if(num > 5 && num < 9) romanArr.push(keys[5].concat(keys[6].repeat(num - 5)))
                    if(num === 9) romanArr.push(keys[6].concat(keys[4]))
                }
            })
        }
        if(arabicNumberArr.length === 1){
            arabicNumberArr.forEach((num,index) =>{
                if(index === 0){
                    if(num < 4) romanArr.push(keys[6].repeat(num))
                    if(num === 4) romanArr.push(keys[6].concat(keys[5]))
                    if(num === 5) romanArr.push(keys[5])
                    if(num > 5 && num < 9) romanArr.push(keys[5].concat(keys[6].repeat(num - 5)))
                    if(num === 9) romanArr.push(keys[6].concat(keys[4]))
                }
            })
        }
        
        return romanArr
    }

    static fromRoman(romanNumber){
        
    }

}

console.log(RomanNumerals.toRoman(7)) //MMMDXLIX   ----- 3900 MMMCM 3800 MMMDCCC





