const chatContent = document.querySelector(".chat-content");

function appendBotMessage(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";

  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";
  messageDiv.appendChild(avatar);

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;
  messageDiv.appendChild(contentDiv);

  const body = document.body;
  if (body.classList.contains("body-naughty")) {
    messageDiv.classList.add("bot-naughty");
  }else if(body.classList.contains("body-funny")){
    messageDiv.classList.add("bot-funny");
  }else if(body.classList.contains("body-romantic")){
    messageDiv.classList.add("bot-romantic");
  }

  chatContent.appendChild(messageDiv);

  return messageDiv;
}


function appendBotImg(link) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";
  chatContent.appendChild(messageDiv);

  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";
  messageDiv.appendChild(avatar);

  const contentDiv = document.createElement("div");
  contentDiv.className = "img-content";
  
  const img = document.createElement("img");
  contentDiv.appendChild(img)
  img.src = link;
  messageDiv.appendChild(contentDiv);

  return messageDiv;
}

function removeMessage(messageDiv) {
  messageDiv.remove();
}

function showNextMessage(messageText, delay) {
  const messageDiv = appendBotMessage("...");
  setTimeout(function() {
    removeMessage(messageDiv);
    appendBotMessage(messageText); 
  }, delay);
}

function showNextImg(link, delay) {
  const messageDiv = appendBotMessage("...");
  setTimeout(function() {
    removeMessage(messageDiv);
    appendBotImg(link); 
  }, delay);
}

//USER USER USER USER USER USER USER USER USER USER USER USER 

function appendUserMessage(message) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  if (message) {
    contentDiv.textContent = message;
  } else {
    contentDiv.textContent = "Flirt with me!";
  }
  messageDiv.appendChild(contentDiv);

  const body = document.body;
  if (body.classList.contains("body-naughty")) {
    messageDiv.classList.add("user-naughty");
  }else if(body.classList.contains("body-funny")){
    messageDiv.classList.add("user-funny");
  }else if(body.classList.contains("body-romantic")){
    messageDiv.classList.add("user-romantic");
  }

  chatContent.appendChild(messageDiv);
}

function appendUserImg(link){
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  chatContent.appendChild(messageDiv);

  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";
  /* messageDiv.appendChild(avatar); */

  const contentDiv = document.createElement("div");
  contentDiv.className = "img-content";
  
  const img = document.createElement("img");
  contentDiv.appendChild(img)
  img.src = link;
  messageDiv.appendChild(contentDiv);
}

function removeButtons(){
    document.querySelectorAll("button").forEach(button => {
        button.style.display = "none";
      });
}