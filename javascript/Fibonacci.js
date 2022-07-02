//0, 1, 1, 2, 3, 5, 8, 13, 21, 34… 


function finabonacci(num){
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;

    for (var i = 2; i <= num; i++) {
        console.log(fibonacci[i - 2])
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    console.log(fibonacci);
}

console.log(finabonacci(15))