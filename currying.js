function add(a){
    return function (b){
        return function (c){
            return a+b+c;
        };
    };
}

const add = (a) => (b) => (c) => a+b+c;
console.log(add(2)(3)(1));


const sendAutoEmail = (to) => (subject) => (from) => `Sending email to ${to} with subject ${subject}: ${body}`;

let step1 = sendAutoEmail('divviw@gmail.com');
let step2 = step1('new order confirmation');
console.log(step2("Hey there, your order has arrived"));