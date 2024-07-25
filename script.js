const msgBox = document.createElement('div');
const input = document.createElement('input');
const button = document.createElement('button');

msgBox.className = 'box';
input.className = 'input';
button.className = "btn";

// msgBox.style.border = "2px solid red";
msgBox.style.height = "500px";
button.innerText = 'send';

document.body.append(msgBox);
document.body.append(input);
document.body.append(button);

function sendMsg() {
    const msgDiv = document.createElement('div');
    msgDiv.className = "msgdiv";
    msgDiv.innerText = input.value;
    msgBox.append(msgDiv);
};

button.onclick = sendMsg

input.onkeyup = function handinput(event) {
    if (event.key === "Enter") {
     sendMsg()
    }
};