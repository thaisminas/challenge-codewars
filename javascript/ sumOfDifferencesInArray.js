function sumOfDifferences(arr) {

    let descending = arr.sort((a , b)=> b - a)
    let newArray = []

    for(let i = 0;i < descending.length;i++){
        let sum = descending[i] - descending[i+1]
        if(!isNaN(sum)){
            newArray.push(sum)
        }

    }

    const result = newArray.reduce((previousValue, currentValue) => 
        previousValue + currentValue,
    0);

    return result
  
}

console.log(sumOfDifferences([2, 1, 10]))