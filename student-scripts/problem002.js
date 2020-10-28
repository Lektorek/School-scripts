function stringRotate(a, b){
    if(isInputValid(a, b)){
        return a.substring(b)+a.substring(0, b);
    }
    else return "";

}

function isInputValid(a, b){
    if(typeof a !== 'string') return false;
    if(typeof b !== 'number') return false;
    if(b<0 || b>a.length) return false;
    return true;
}