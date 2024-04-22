console.log("This is yopur TicTacToe game");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.wav");

let turn = "X";
let isgameover = false;

//Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Function to check if someone won\
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 3.5, 4.9, 0],
        [3, 4, 5, 3.5, 14.9, 0],
        [6, 7, 8, 3.5, 24.9, 0],
        [1, 4, 7, 3.5, 14.9, 90],
        [2, 5, 8, 13.5, 14.9, 90],
        [0, 3, 6, -6.5, 14.9, 90],
        [0, 4, 8, 3.5, 14.9, 45],
        [2, 4, 6, 3.5, 14.9, 135],

    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "210px"
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = '23vw'
        }
    })
}

//Game  Logic
// music.play();
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){

                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })
})

//add click listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext'); 
    Array.from(boxtexts).forEach(element =>{
        element.innerText=""
    });
    turn = "X"
    isgameover = false;
    document.querySelector('.line').style.width = '0vw'
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px" 
})


