const button = document.getElementById('my-button');
const text = document.getElementById('my-text');

function makeTextSizer(size){
    function changeSize(){
        text.style.fontSize = `${size}px`;
    }
    return changeSize;
}

const size34 = makeTextSizer(34);
const size56 = makeTextSizer(56);
const size12 = makeTextSizer(12);

button.addEventListener("click" , size56);
