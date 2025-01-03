// function findEven(numbres) {
//     const even= []
//     for(const num of numbres){
//         if (num % 2 === 0) {
//             even.push(num)
//         }
//     }
//     return even
// }
// const even = findEven([12, 32, 13, 52, 45, 41, 74 ,47]);
// console.log(even);

// function sumEven(numbres) {
//     let sum = 0;
//     for(const num of numbres){
//         if (num % 2 ===0) {
//            sum = num + sum 
//         }
//     }
//     return sum
// }
// const sum = sumEven([14, 15, 23, 24, 16, 78])
// console.log(sum);

function addEven(numbres) {
    let sum = 0;
    for(const num of numbres){
        if (num % 2 === 0) {
            sum = num + sum
        }
    }
    return sum
}
const sum = addEven([12, 15, 19, 18, 42, 45, 31])
console.log(sum);




