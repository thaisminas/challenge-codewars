function squareSum(numbers){
    let result = []

    numbers.forEach(element => {
        result.push(Math.pow(element, 2)) 
    });

    const sumWithInitial = result.reduce((previousValue, currentValue) => previousValue + currentValue,
        0
    );

    return sumWithInitial;
}