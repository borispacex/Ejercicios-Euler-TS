let suma: number = 0;
let numero: number = 1000;
while (3 <= numero) {
    if (numero % 3 == 0 || numero % 5 == 0) {
        suma += numero;
    }
    numero--;
}
console.log(suma);