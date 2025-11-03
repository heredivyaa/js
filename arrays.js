const students = ["Piyush" , "Jane" , "John" , "Sushant"];
// console.log(students.length);

//can mutate array's elements 
//we can't re-initialize the array again bcz it's a const array but we can chnage the elements of the array like we can delete uodate or add more elements in the array
students[0] = "Piyush garg";
// console.log(students[0]);

students.push('reema');

// console.log(students);

//in js, we can store multiple data type of values in a js array even a emoji and an object--> heterogenous array

students.push({name: "Pepe"})
// console.log(students);


//ADVANCE ARRAY CONCEPTS

// .foreach --> just use for looping, return nothing 
// .map return array

// function print(n){
//     console.log(n);
// }
// students.forEach(print);

// students.forEach((val) => console.log(val))

const numbers = [1,2,3,4,5,6];

function double(n){ 
    return (n * 2);
}

let newArr = numbers.map(double);
console.log(newArr);

let ans = numbers.findIndex((num) => num === 4);
console.log(ans);

const newArray = numbers.filter((num) => num%2 == 0)
console.log(newArray);



