function isNumber(str) {
    const count = str.length
    if (count % 2 ===0) {
        console.log("This Number is: Even,", str, count );
        return true
    }
    else{
        console.log("This Number is: Even,", str, count);
        return false
    }
}
// console.log(isNumber("Hello"));
// console.log(isNumber("Dhak"));

function doDoble(number, doTripple) {
    if (doTripple === true) {
        const sum = number * 2;
        return sum
    }
    else{
        const sum = number * 3;
        return sum
    }
}
console.log(doDoble(5, false));
console.log(doDoble(5, true));

// function getAge(person) {
//     const age = person.age;
//     return age;
// }

// console.log(getAge(25));


