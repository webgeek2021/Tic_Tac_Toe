
// display X O symbols when clicked on cell and reset the grid when clicked on reset button
const boxes = document.querySelectorAll(".box")
const resetBtn = document.getElementById("resetbtn")
const h2 = document.getElementById("win")

let isGameOver = false;
let turn = "X"
function changeTurn() {
    return turn === "X" ? "O" : "X"
}

boxes.forEach((element) => {
    element.addEventListener("click", (event) => {
        console.log(event.target.innerText)
        if(!isGameOver && element.innerText === "")
        {
            element.innerText = turn
            checkWin()
            turn = changeTurn()
        }
    })
}
)

resetBtn.addEventListener("click", () => {
    boxes.forEach((element) => {
        element.innerText = ""
        h2.innerText =""
        isGameOver = false
        turn = "X"
    })
})

// winning logic
function checkWin(){
    let winCondition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    winCondition.forEach(e =>{
        // console.log(e[0])
        // console.log(boxes)
        if((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[1]].innerText === boxes[e[2]].innerText) && (boxes[e[2]].innerText === boxes[e[0]].innerText) && (boxes[e[0]].innerText != "") )
        {
            isGameOver = true;
            h2.innerText = `Winner is ${turn}`   
        }
    })
   
}






