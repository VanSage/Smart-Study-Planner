function checkAnswer(correct){
    if(correct){
        alert("Correct ✅");
    } else {
        alert("Wrong ❌");
    }
}

let tasks = [];

function addTask(){
    let subject = document.getElementById("subject").value;
    let hours = document.getElementById("hours").value;

    if(!subject || !hours){
        alert("Fill all fields");
        return;
    }

    let li = document.createElement("li");
    li.innerText = subject + " (" + hours + " hrs)";
    document.getElementById("list").appendChild(li);
}