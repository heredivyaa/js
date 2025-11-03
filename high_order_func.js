function add(a,b,cb) {
    let result = a+b;
    cb(result);
}

// add(2,5 , function(val) {
//     console.log(val);
// })

add(2,5, val => console.log(val));

function add1(a,b,cb) {
    let result = a+b;
    cb(result);

    // return function (){
    //     console.log(result);
    // }
    return () => console.log(result);
}

let res = add1(2,4,() => {});
res();

