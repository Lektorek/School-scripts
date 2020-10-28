function divisible(a){
    let arg = arguments;
    for(let i=0; i<arg.length; i++){
        if(a%arg[i]!==0) return false;
    }
    return true;
}