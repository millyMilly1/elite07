let add = function(a, b){
    if (!Number.isInteger(a) || !Number.isInteger(b)){
         return NaN; 
    }
    else {
       return a + b;
    }
}

let multiply = function(a, b){
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        return NaN; 
   }
   else {
      return a * b;
   }
}

let sub = function (a, b){
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        return NaN; 
   }
   else {
      return a - b;
   }
}


//additions 
console.log(add(12, 12));
console.log(add(12, 8.99));

//subtarction
console.log(sub(12, 3));
console.log(sub(13.2, 5.3));

//multipy
console.log(multiply(12, 3));
console.log(multiply(13, 5.5));


let addition = (a, b) => {
    !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
}
console.log(add(12.2, 32.4));


