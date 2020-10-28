function strangeSum(a, b){
    if(a===b && typeof a == "number" && typeof b == "number" && a%1===0 && b%1===0) return (a+b)*3;
    if(a!==b && typeof a == "number" && typeof b == "number" && a%1===0 && b%1===0) return a+b;
    return null;
}