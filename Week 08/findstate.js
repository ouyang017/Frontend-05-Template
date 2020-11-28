function findstate(string) {
    let state = start;
    for (const c of string) {
        state = state(c)
    }
    return state === end;
}

function start(str){
    if("a" === str)
        return findA;
    else    
        return start;
}

function findA(str){
    if("b" === str)
        return findB;
    else
        return start(str);
}

function findB(str){
    if("c" === str)
        return findC;
    else
        return start(str);
}

function findC(str){
    if("d" === str)
        return findD;
    else
        return start(str);
}

function findD(str){
    if("e" === str)
        return findE;
    else
        return start(str);
}

function findE(str){
    if("f" === str)
        return end;
    else
        return start(str);
}

function end(str){
   return end;
}

console.log(findstate("i ababcdefg"));