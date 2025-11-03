function added(num){
    function add(b){
        console.log(num + b);
    }
    return add;
}

const addto5 = added(5);

addto5(2);
addto5(4);