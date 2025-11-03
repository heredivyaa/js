function add(a, b) {
    return a + b;
}

function multiply(...args) {
    return args[0] * args[1];
}

let result = add(2, 3);
console.log(multiply(result));

//other way
function addThenSq(a, b) {
    return multiply(add(a, b));
}

console.log(addThenSq(2, 3));

//other way --> composition of functions 
function composeTwoFunc(fn1, fn2) {
    return function (a, b) {
        return fn2(fn1(a, b));
    };
}

const task = composeTwoFunc(add, multiply);
console.log(task(2, 3));

//write the abose in modern js
const c2f = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

//want to compose unlimited functions
function compose(...fns) {
    return function (...values) {
        fns.reduceRight(fn => fn)
    }
}

//in modern js
const composeAll = (...fns) => (...val) => fns.reduce((a, b) => b(a), val);


