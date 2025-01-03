function odd(num1, num2) {
    return num1*num2
}
console.log(odd(6,2));

function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multi = sum * diff;
    const result =  multi / 2;
    return result;
}
const result = doMath(12, 2)
console.log(result);
