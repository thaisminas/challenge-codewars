function likeOrDislike(buttons) {

    let set = new Set(buttons)

    //se o tamanho do array for igual a um ele retorna o indice unico que e zero do array
    if(buttons.length === 1){
        return buttons[0]
    }

    //se o tamanho for igual a zero retorna nada
    if(buttons.length === 0){
        return "Nothing"
    }

    if(buttons.length == 2 && buttons[0] == buttons[buttons.length -1]){
        return "Nothing"
    }

    if(buttons.length == 2 && buttons[0] != buttons[buttons.length -1]){
        return buttons[1]
    }

    //se tiver apenas uma string dentro do set e porque pode ter valores iguais entao retorna nada
    if(set.size == 1){
        let temp = buttons.length

        if(temp % 2 == 0){
            return "Nothing"
        }

        return Array.from(set)
    }


    if(buttons.length != 0 && buttons.length != 1 && buttons.length != 2){

        if(buttons[buttons.length -1] !== buttons[buttons.length -2]){
            return buttons[buttons.length -1]
        }

        if(buttons[buttons.length -1] === buttons[buttons.length -2]){
            return buttons[buttons.length -1]

        }

        // if(buttons[buttons.length -1] === buttons[buttons.length -2]){
        //     return "Nothing"

        // }
    }

}

console.log(likeOrDislike(["Dislike"])) //dislike

console.log(likeOrDislike(['Like','Like'])) //Nothing

console.log(likeOrDislike(['Dislike','Like'])) //Like

console.log(likeOrDislike(['Like','Dislike','Dislike'])) //Nothing

console.log(likeOrDislike(['Dislike','Dislike'])); //Nothing

console.log(likeOrDislike(['Like','Like','Like'])); //Like

console.log(likeOrDislike(['Dislike','Dislike','Like','Like','Like','Like','Like'])); //Like

console.log(likeOrDislike(['Like','Dislike'])); // dislike

console.log(likeOrDislike(['Dislike','Like','Dislike'])); // dislike

console.log(likeOrDislike(['Like','Like','Dislike','Like','Like','Like','Like','Dislike'])); //dislike

console.log(likeOrDislike([])); // Nothing

console.log(likeOrDislike(['Dislike','Dislike','Dislike','Dislike'])); // Nothing

