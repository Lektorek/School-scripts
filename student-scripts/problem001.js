function triangleArea(a, b, c){
    if(isInputValid(a, b, c)){
        let circut = a+b+c;
        let p = circut/2;
        return Math.round(Math.sqrt(p*(p-a)*(p-b)*(p-c))*100)/100;
    }
    else{
        return -1;
    }
}

function isInputValid(a, b, c){
    if(isNaN(a) || isNaN(b) || isNaN(c)) return false;
    if(a<=0 || b<=0 || c<=0) return false;
    if(!(a<b+c && b<a+c && c<b+a)) return false;
    return true;
}