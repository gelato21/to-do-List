const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const btn=document.querySelector(".btn");

btn.addEventListener('click', function(){
    if(inputBox.value === ''){
        alert("Please enter your task first");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let a=document.createElement("a");
        a.classList.add("close");
        li.appendChild(a)
    }
    inputBox.value="";
    saveData();
})

inputBox.addEventListener('keypress', function(e){
    if(e.key=='Enter'){
        btn.click();
    }
})

listContainer.addEventListener('click', function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==='A'){
        e.target.parentElement.remove();
        saveData();
    }
}, false)


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();