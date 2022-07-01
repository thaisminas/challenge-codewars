function twiceAsOld(dadYearsOld, sonYearsOld) {
    const result = (sonYearsOld * 2) - dadYearsOld
    if(Math.sign(result) == -1){
        return result * -1
    }

    return result
}

console.log(twiceAsOld(36,7))
console.log(twiceAsOld(55,30))
console.log(twiceAsOld(42,21))