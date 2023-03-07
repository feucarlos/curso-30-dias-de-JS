// 30 días de JavaScript
// playground Triángulo

function printTriangle(size, character) {
    let triangulo = '';
    for (let i = 1; i <= size; i++){
        for (let j = 1; j <= size; j++){
            (j<=(size-i)) ? triangulo+= ' ' : triangulo+=character
        }
        if (i<size) {
            triangulo+='\n'
        }
    }
    return triangulo
}

console.log(printTriangle(5,'*'));
console.log(printTriangle(6,'$'));
console.log(printTriangle(3,'%'));


