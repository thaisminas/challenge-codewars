/*

Anos de Gato
15anos de gato para o primeiro ano
+9anos de gato para o segundo ano
+4cat anos para cada ano depois disso

Anos do cão
15anos do cão para o primeiro ano
+9anos do cão para o segundo ano
+5anos de cachorro para cada ano depois disso

*/



var humanYearsCatYearsDogYears = function(humanYears) {
    let result = [humanYears]
    
    if(humanYears == 1){
        result.push(15)
        result.push(15)
    }

    if(humanYears == 2){
        result.push(15+9)
        result.push(15+9)
    }

    if(humanYears > 2){
        let countCat = ((humanYears - 2) * 4) + 15 + 9
        let countDog = ((humanYears - 2) * 5) + 15 + 9
        result.push(countCat)
        result.push(countDog)
    }

    return result;

}


console.log(humanYearsCatYearsDogYears(1)) // [1, 15, 15]

console.log(humanYearsCatYearsDogYears(2)) // [2, 24, 24]

console.log(humanYearsCatYearsDogYears(10)) // [10, 56, 64]