//IIFE - immediately invoked function expression also k/a self-executing anonymous function

(function add(a,b){
    console.log(a+b);
})(2,3);

(function say() {
    console.log("hii")
;})();

(() => console.log("I am Es6"))();

const value = (() => 100)();
console.log(value);

const data = (async () => await fetch());

const atm = function (initialBal){
    let balance = initialBal;
    function withdraw(amt){
        if(amt>balance){
            return "Are you kidding?";
        }
        else{
            balance -= amt;
            return balance;
        }
    }
    return {withdraw};
};

const piyush = atm(1000);
console.log(piyush.withdraw(100));