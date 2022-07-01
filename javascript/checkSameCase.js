function sameCase(a, b){

    let regexLetterCapital = /[A-Z]/
    let regexLetterlowercase = /[a-z]/
    let regex = /[A-Za-z]/

    if(!isNaN(a) || !isNaN(b)){
        return -1
    }

    if(regexLetterCapital.test(a) && regexLetterCapital.test(b)){ 
        return 1
    }

    if(regexLetterlowercase.test(a) && regexLetterlowercase.test(b)){ 
        return 1
    }

    if(regex.test(a) && regex.test(b)){
        return 0
    }

    return -1

}





console.log("teste numero um :" + sameCase("H",":"));// -1
console.log("teste numero dois :" +sameCase("W","["))// 0
console.log("teste numero tres :" +sameCase('A', 's', 0))
console.log("teste numero quatro :" +sameCase('c', 'B', 0))
console.log("teste numero cinco :" +sameCase('\t', 'Z', -1))
console.log("teste numero seis :" +sameCase('H', ':', -1))

