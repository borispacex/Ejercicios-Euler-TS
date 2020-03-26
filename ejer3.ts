let numero: number = 600851475143;
let maximo: number = 2;
let divisor: number = 2;
while (1 < numero) {
    while (numero % divisor == 0) {
        maximo = divisor;
        numero = numero / divisor;
    }
    divisor += 1;
}
console.log(maximo);