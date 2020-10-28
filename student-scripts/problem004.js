function getTotalNumberOfNewYaersEveSundays(a, b){
    let count = 0;
    for(let i=a; i<=b; i++){
        let year = new Date(i,0,1);
        if(year.getDay()==0) count++;
    }
    return count;
}