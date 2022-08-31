function typeValidation(variable, type) {
    return typeof(variable) == type ? true : false
}


console.log(typeValidation(42, "number"))//true
console.log(typeValidation("42", "number"))//false
console.log(typeValidation("42", "string"))//true
console.log(typeValidation(42, "string"))//false