function sumStr(a,b) {
    a = a === "" ? 0 : a
    b = b === "" ? 0 : b
    return result = (Number(a) + Number(b)).toString()
}

console.log(sumStr("4","5"))// 9
console.log(sumStr("34","5")) //39
console.log(sumStr("4","")) //4
console.log(sumStr("","")) 
console.log(sumStr("-5","3")) 