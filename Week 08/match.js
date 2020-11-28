function match(input) {
    for(let c of input){
        if(c === "a")
            return true;
    }
    return false;
}

//console.log(match("I m pple!"));


function match2(string){
    let findA = false;
    for (const c of string) {
        if(c == "a")
            findA = true;
        else if(findA && c == "b")
            return true;
        else
            findA = false;
    }
    return false;
}

//console.log(match2("i abm ppp!"))


function matchmroe(string) {
    let findA = false;
    let findB = false;
    let findC = false;
    let findD = false;
    let findE = false;

    for (const c of string) {
        if(c == "a")
            findA = true;
        else if(findA && c == "b")
            findB = true;
        else if(findB && c == "c")
            findC = true;
        else if(findC && c == "d")
            findD = true;
        else if(findD && c == "e")
            findE = true;
        else if(findE && c == "f")
            return true;
        else{
            findA = false;
            findB = false;
            findC = false;
            findD = false;
            findE = false;
        } 
            
    }
    return false;
}

console.log(matchmroe("i abb abcdefg"));