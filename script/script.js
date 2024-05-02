const chatContent = document.querySelector(".chat-content");

function appendBotMessage(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";
  chatContent.appendChild(messageDiv);

  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";
  messageDiv.appendChild(avatar);

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;
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

setTimeout (function(){flirtButton.style.display = "none";}, 0);
setTimeout (function(){showNextMessage("Hey!", 500);}, 0);
setTimeout (function(){showNextMessage("Ich bin der Flirt-Bot und ich bin hier, um dein Herz zu erobern.", 1000);}, 1000);
setTimeout (function(){showNextMessage("Erlaubst du mir, mit dir zu flirten? 😏", 1000);}, 3000);

setTimeout (function(){flirtButton.style.display = "inline";}, 5000);



function geschlecht(){
  setTimeout (function(){appendUserMessage("ja klar!");}, 0);
  setTimeout (function(){appendUserMessage("du darfst mich anmachen");}, 1000);
  

  setTimeout (function(){showNextMessage("Bevor ich mein Verführungsspiel beginne, könntest du mir verraten, welches Geschlecht du für dich bevorzugst?", 2000);}, 3000);
  setTimeout(function() {
    document.getElementById("geschlecht").classList.add("hidden");
    const div = document.querySelector(".user-input");
        
    const btnfrau = document.createElement("button");
    div.appendChild(btnfrau);
    btnfrau.innerHTML = "weiblich";

    const btnmann = document.createElement("button");
    div.appendChild(btnmann);
    btnmann.innerHTML = "männlich";

    const btndivers = document.createElement("button");
    div.appendChild(btndivers);
    btndivers.innerHTML = "divers";

    btnfrau.addEventListener("click", flirtfrau);
    btnmann.addEventListener("click", flirtmann);
    btnnon.addEventListener("click", flirtdivers);
    }, 6000);

    flirtButton.style.display = "none";
}



function appendUserMessage(message){
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  chatContent.appendChild(messageDiv);

  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";
  messageDiv.appendChild(avatar);

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  if(message){
    contentDiv.textContent = message;
  } else {
    contentDiv.textContent = "Flirt with me!";
  }
  messageDiv.appendChild(contentDiv);
}

function removeButtons(){
    document.querySelectorAll("button").forEach(button => {
        button.style.display = "none";
      });
}

const flirtButton = document.querySelector(".hidden");