const square = function (x){
    return x * x;
}

// const squareArrow = (x) => {
//     return x * x;
// }

const squareArrow = (x) => x*x;

// console.log(squareArrow(2));

const getFirstName = (firstName) => {
    return firstName.split(" ")[0];
}

const getFirstNameShort = (x) => x.split(' ')[0];

console.log(getFirstNameShort("ravi salunkhe"));