//iterators

//built in iterator for arrays
for(const val of [1,2,3,4,5,6]){
    console.log(val);
}

//but for traversing other data types like tree , linked list, etc we have to make our own iterator

//have to follow iterator protocols

function makeIterator(start =0 , end = Infinity , step = 1){
    let nextStart = start;
    let iterationCount = 0;

    return {
        next(){
            let result;
            if(iterationCount < end){
                result = {value:nextStart, done:false};
                nextStart += step;
                iterationCount++;
                return result;
            }
            return {value:iterationCount, done:true}
        },
    }
}

const myIterator = makeIterator(1,10,1);

let result = myIterator.next();

while(!result.done){
    console.log(result.value);
    result = myIterator.next();  
}

//by using the YEILD keyword, we can make use of for...of loop and yeild keyword can only be used in a generator function only

function* count(){
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
}

function* makeMyIteratorNew(start , end, stepSize= 1){
    for(let i =start ; i<= end; i += stepSize){
        yield i;
    }
}

const one = makeMyIteratorNew(1,20);

for(const val of one){
    console.log(val);
}

const btn = document.getElementById("next-button");

btn.addEventListener("click" , () =>{
    
    btn.innerText = one.next().value;

});



 