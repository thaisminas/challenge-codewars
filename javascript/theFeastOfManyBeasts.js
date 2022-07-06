function feast(beast, dish) {
    console.log(beast.length)

    if(beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]){
        return(true)
    }

    return false
}


console.log(feast("great blue heron", "garlic naan")) //true

console.log(feast("chickadee", "chocolate cake")) //true

console.log(feast("brown bear", "bear claw")) //true


