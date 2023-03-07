function isLeapYear(year){
    let divx4;
    let divx100;
    let divx400;

    if (year < 0) { return false; };

    ( (year % 4) == 0 ) ? divx4  = true : divx4  = false;
    ( (year % 100) == 0 ) ? divx100  = true : divx100  = false;
    ( (year % 400) == 0 ) ? divx400  = true : divx400  = false;

    if ( (divx4 && !divx100) || (divx100 && divx400) ){
        return true
    };
    return false;
}

console.log(isLeapYear(2000)); 
console.log(isLeapYear(-2024));
console.log(isLeapYear(1984.25));
console.log(isLeapYear(1900));


