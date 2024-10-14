let boxes = document.querySelectorAll(".BOX");
let resetbtn = document.querySelector(".reset-btn")
let winmsg = document.querySelector(".win-msg")
let msgContainer = document.querySelector(".msg-container")

//player1
let trunx = true

const checkwin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(trunx){
        box.innerHTML = "X";
        (box as HTMLElement).style.color = 'rgb(59, 59, 116)' 
        trunx = false
    }else{
        box.innerHTML = "O";
        (box as HTMLElement).style.color = 'rgb(218, 62, 62)'
        trunx = true
    };
    box.setAttribute('disabled' , 'true')
    winpattern()
    })
})

const disabledbtn = () => {
    for(let box of boxes){
    box.setAttribute('disabled' , 'true')
}
}
let showWinner = (winner:string)=>{
    winmsg!.innerHTML = `CONGRATULATIONS, ${winner} is winner`
    msgContainer!.classList.remove("hide")
    // console.log(winmsg)
    // console.log(msgContainer)
    disabledbtn()
}



const winpattern = ()=> {
    for(let pattern of checkwin){
        let val1 = boxes[pattern[0]].innerHTML
        let val2 = boxes[pattern[1]].innerHTML
        let val3 = boxes[pattern[2]].innerHTML
    
 if (val1 != "" && val2 != "" && val3 != ""){
    if(val1 === val2 && val2 === val3){
        console.log("winner" , val1)
        showWinner(val1)
    }
 }
}
}

const enablebtn = () => {
    for(let box of boxes){
    box.removeAttribute('disabled')
    box.innerHTML = ""
}
}

const resetGame = ()=>{
    trunx = true
    enablebtn()
    msgContainer?.classList.add("hide")
}

resetbtn!.addEventListener('click' , resetGame)