let inputBox=document.getElementById('inp')
let list_cont=document.querySelector(".list-container")
let butt=document.getElementById('add')
function addTask()
{
    if(inputBox.value==='')
    {
        alert('Write Something')
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=inputBox.value
        list_cont.appendChild(li)
        let span=document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value=''
    saveData()
}

butt.addEventListener('click',addTask)

list_cont.addEventListener('click', (e)=>
{
    if(e.target.tagName==='LI')
    {
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName==='SPAN')
    {
e.target.parentElement.remove();
saveData()
    }
})

// function saveData()
// {
// localStorage.setItem("data",list_cont)
// }
// function showData()
// {
    
//         list_cont.innerHTML=localStorage.getItem('data')
    
// }
function saveData() {
    // Store the HTML content of list_cont
    localStorage.setItem("data", list_cont.innerHTML);
}

function showData() {
    let savedData = localStorage.getItem('data');
    if (savedData !== null) {
        list_cont.innerHTML = savedData;
    } else {
        list_cont.innerHTML = '<li>No saved tasks</li>';
    }
}

showData(); // Call showData() to display saved data when the page loads


// showData();