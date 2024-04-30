const chatContent = document.querySelector(".chat-content");

function appendBotMessage(messageText){
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
}

setTimeout(function() {flirtButton.style.display = "none";},0);
setTimeout(function() {appendBotMessage("hey!");}, 500);
setTimeout(function() {appendBotMessage("Ich bin der Flirt-Bot und ich bin hier, um dein Herz zu erobern.");}, 1500);
setTimeout(function() {appendBotMessage("Lass mich ein charmantes Kompliment für dich finden, das dir ein Lächeln ins Gesicht zaubert.");}, 2500);
setTimeout(function() {flirtButton.style.display = "inline";}, 3000);



function geschlecht(){
    appendUserMessage();
    setTimeout(function() {appendBotMessage("Bevor ich mein Verführungsspiel beginne, könntest du mir verraten, welches Geschlecht du bevorzugst?");}, 1000);
    setTimeout(function() {
        document.getElementById("geschlecht").classList.add("hidden");

        const div = document.querySelector(".user-input");
        
        const btnfrau = document.createElement("button");
        div.appendChild(btnfrau);
        btnfrau.innerHTML = "weiblich";

        const btnmann = document.createElement("button");
        div.appendChild(btnmann);
        btnmann.innerHTML = "männlich";

        const btnnon = document.createElement("button");
        div.appendChild(btnnon);
        btnnon.innerHTML = "non-binäry";

        const btnegal = document.createElement("button");
        div.appendChild(btnegal);
        btnegal.innerHTML = "egal";

        btnfrau.addEventListener("click", flirtfrau);
        btnmann.addEventListener("click", flirtmann);
        btnnon.addEventListener("click", flirtnon);
        btnegal.addEventListener("click", flirtegal);
    }, 2000);

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


/* function flirtfrauRomBot(){
    appendUserMessage();
  
    if(jokeIndex >= jokes.length){
      setTimeout(function() {appendBotMessage("Entschuldigung, aber ich habe momentan keine Witze mehr!");}, 1000);
      return;
    }
  
    setTimeout(function() {appendBotMessage(firstMessage[firstMessageIndex]);}, 1000);
    setTimeout(function() {appendBotMessage(flirt[flirtIndex][0]);}, 1500);
    setTimeout(function() {
      appendBotMessage(flirt[flirtIndex][1]);
      flirtButton.style.display = "inline";
      flirtIndex++;
      firstMessageIndex++;}, 5000);
  
    flirtButton.style.display = "none";
  } */