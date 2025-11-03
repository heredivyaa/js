//Arrow function
const sayHello = () => {
    console.log("Hey!");
};

sayHello();

const add = (a,b) => {
    return a+b;
};

const addv2 = (a,b) => a+b

console.log(addv2(2,3));

//argumnet function is not available in arrow function
//we can use spread operator

const multiply = (...a) => {
    console.log(a);
}

multiply(2,4,5,2,2,1);

const obj = {
    value: 20,
    myfunc: function(){
        console.log("The value is: " , this.value);
    }
}

obj.myfunc();

const obj1 = {
    value : 2,
    myfunc: () => {
        console.log(this)
    },
}

obj1.myfunc();