let boxes=document.querySelectorAll(".box")
let reset=document.querySelector(".reset")
let turn=true
let msgdiv=document.querySelector(".msg")
let nbtn=document.querySelector("#newbtn")
let msgdivP=document.querySelector(".msgdis")

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ]

  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn)
        {
            box.innerText="O"
            turn=false
        }
        else{
            box.innerText="X"
            turn=true
        }
        box.disabled=true
        checkWinner();
    })
}
  )
const disableBox=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableBox=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const resetGame=()=>{
    turn=true;
    enableBox();
    msgdiv.classList.add("hide")
}
  const showWinner=(winner)=>
  {
    msgdivP.innerText=`Congrats Winner is ${winner}`
    msgdiv.classList.remove("hide");
    disableBox();
  }
  const checkWinner=()=>{
    for(let pattern of winPatterns)
    {
      let p1=  boxes[pattern[0]].innerText
      let p2=  boxes[pattern[1]].innerText
      let p3  = boxes[pattern[2]].innerText;
      if(p1 !=""&& p2 !="" && p3 !="")
      {
        if(p1==p2 && p2==p3)
        {
            console.log("Winner")
            showWinner(p1);
        }
      }
    }
  }
nbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame)
