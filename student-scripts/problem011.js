function deepFindAndCount(a, b){
    let count = 0;
    tempa = a.flat();
    for(let i=0; i<tempa.length; i++){
        if(tempa[i]==b) count++;
    }
    return count;
}