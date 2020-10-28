function findMax(a){
    let arg = arguments;
    let max = -Number.MAX_VALUE;
    for(let i=0; i<arg.length; i++){
        if(max < arg[i]){
            max = arg[i];
        }
    }
    return max;
}