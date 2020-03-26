let a: number = 1;
let b: number = 0;
let c: number = a + b;
let sum: number = 0;
while (c <= 4000000) {
    a = b;
    b = c;
    c = a + b;
    if (c % 2 == 0) {
        sum = sum + c;
    }
    // console.log(c);
}
console.log(sum);