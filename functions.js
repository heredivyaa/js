function sayHello(){
    console.log("Hey Piyush")
}

sayHello()

//we can call it as many times as we want

//          arguments
function add(a,b){
    console.log(a+b);
}


add(2,3) //parameters
 
function multiply(a,b){
    return (a*b);
}

let a  = multiply(2,3);
console.log("The result is: ", a);

//unlimited arguments 
//1st way
function addNum(a,b){
    let ans = 0
    for(let i = 0 ; i< arguments.length ; i++){
        ans += arguments[i];
    }
    return ans;
}

let result = addNum(1,2,3,5,5);
console.log(result);

//2nd Way
//this is k/a spread operator
function addNumbers(...num){
    let ans = 0
    for(let i =0 ; i < num.length ; i++){
        ans += num[i];
    }
    return ans
}

let r = addNumbers(89,24,5,54,2);
console.log(r);

