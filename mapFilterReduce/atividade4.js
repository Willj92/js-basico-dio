function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    }, 2);
}

const arr = [1,2];

console.log(somaNumeros(arr));
console.log(arr);
