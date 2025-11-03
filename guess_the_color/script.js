const colorCodeConatiner = document.getElementById("color-red");
let randomColor = null;
const optionContainer = document.getElementById("options-container");
const scoreContainer = document.getElementById('score');

function generateRandomNumberBetween(min , max){
    return min + Math.floor(Math.random() * (max-min)+1);
}

function generateRandomColor(){
    const red = generateRandomNumberBetween(0,255);
    const green = generateRandomNumberBetween(0,255);
    const blue = generateRandomNumberBetween(0,255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function incrementScore(){
    score += 1;
    scoreContainer.innerText = score;
}

function validateTheResult(el){
    const selectedColor = el.target.style.backgroundColor;
    if(selectedColor === randomColor){
        incrementScore();
    }
    else{
        score = 0;
    }
    window.localStorage.setItem("score", score);
    startGame();
}
// console.log(generateRandomNumberBetween(0,255));

function startGame(){
    score = Number(window.localStorage.getItem("score")) ?? 0;
    scoreContainer.innerText = score;
    optionContainer.innerHTML = null;
    randomColor = generateRandomColor();
    colorCodeConatiner.innerText = randomColor;

    const ansInd = generateRandomNumberBetween(0,5);

    for(let i =0; i < 6 ; i++){
        const div = document.createElement('div');
        div.addEventListener("click" , validateTheResult)
        div.style.backgroundColor = i === ansInd ? randomColor : generateRandomColor();
        optionContainer.append(div);
    }

}

window.addEventListener("load" , () => startGame());

