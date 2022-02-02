var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines[0])

function numeroFeliz(numberInt){
    const previuslySums = new Set();
    
    while (numberInt != 1){
        let currentSum = 0;
        while(numberInt > 0){
            currentSum += (numberInt % 10) * (numberInt % 10)
            numberInt = Math.floor(numberInt/10)
        }
        if(!previuslySums.has(currentSum)){
            previuslySums.add(currentSum)
            numberInt = currentSum
        } else{
            return false
        }
    }
    return true
}
module.exports = numeroFeliz;

console.log(numeroFeliz(n))
