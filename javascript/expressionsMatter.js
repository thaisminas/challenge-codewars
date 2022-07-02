/*
1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9

*/


function expressionMatter(a, b, c) {
    let result = []

    result.push(a * (b + c))
    result.push(a * b * c)
    result.push(a + b * c)
    result.push((a + b) * c)
    result.push(a + b + c)

    const max = Math.max.apply(null, result)

    // console.log(a * (b + c))
    // console.log(a * b * c)
    // console.log(a + b + c)
    // console.log(a + b * c)
    // console.log((a + b) * c)

    console.log(max)

}


// console.log(expressionMatter(2, 1, 2)) //6
// console.log(expressionMatter(2, 1, 1)) //4
console.log(expressionMatter(1, 1, 1)) //3
// console.log(expressionMatter(1, 2, 3)) //9
console.log(expressionMatter(1, 3, 1)) //5
// console.log(expressionMatter(2, 2, 2)) //8
