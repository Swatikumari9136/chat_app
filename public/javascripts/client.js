// const { append } = require("express/lib/response");

var  socket = io();
let name;
let textarea = document.querySelector('textarea');
let messageArea = document.querySelector('.message_area1');
do{
  name = prompt('Enter your name : ')
}while(!name)

function sendMessage(message){
  let msg = {
    user: name,
    message : msg
  }
textarea.addEventListener('keyup', (e) => {
  if(e.key === "Enter"){
    console.log(sendMessage(e.target.value));
    sendMessage(e.target.value);
    
  }
})


  // append message
  appendMessage(msg, 'outgoing')

  socket.emit('message', msg)
}

function appendMessage(msg, type){
  let mainDiv = document.createElement('div')
  let className = type
  mainDiv.classList.add(className, 'message')

  let msgDetails = 
  `
 <h4> ${msg.user} </h4>
 <P> ${msg.message} </p>
  `
  mainDiv.innerHTML = msgDetails

  messageArea.appendChild(mainDiv)
}

// socket.emit("msg", "hello everyone")
// socket.on("msg", function(data){
//   console.log(data);
// });