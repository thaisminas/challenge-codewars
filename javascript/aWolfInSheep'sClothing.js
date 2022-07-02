function warnTheSheep(queue) {
    let position = queue.reverse()
    
    const index = position.findIndex(x => x === "wolf");

    if(index == 0){
        return "Pls go away and stop eating my sheep"
    }

    return `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`

}


console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"])) // "Oi! Sheep number 1! You are about to be eaten by a wolf!"
console.log(warnTheSheep(["sheep", "sheep", "wolf"])) // "Pls go away and stop eating my sheep"
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]))