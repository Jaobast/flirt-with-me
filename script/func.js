let flirtIndex = 0;
let firstMessageIndex = 0;

const chatContent = document.querySelector(".chat-content");

// BOTMESSAGE  BOTMESSAGE  BOTMESSAGE  BOTMESSAGE  BOTMESSAGE  BOTMESSAGE  

function appendBotMessage(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";

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

  const botMessageDivs = document.querySelectorAll(".message-content");
  if (botMessageDivs.length === 0 || botMessageDivs[0].childNodes[0] === messageDiv) {
    contentDiv.classList.add("first");
  }

  chatContent.appendChild(messageDiv);

  return messageDiv;
}

function showNextMessage(messageText, delay) {
  const messageDiv = appendBotMessage("...");
  setTimeout(function() {
    removeMessage(messageDiv);
    appendBotMessage(messageText); 
  }, delay);
}



// BOTIMAGE  BOTIMAGE  BOTIMAGE  BOTIMAGE  BOTIMAGE  BOTIMAGE  

function appendBotImg(link) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";
  chatContent.appendChild(messageDiv);

  const contentDiv = document.createElement("div");
  contentDiv.className = "img-content";
  
  const img = document.createElement("img");
  contentDiv.appendChild(img)
  img.src = link;
  messageDiv.appendChild(contentDiv);

  return messageDiv;
}

function showNextImg(link, delay) {
  const messageDiv = appendBotMessage("...");
  setTimeout(function() {
    removeMessage(messageDiv);
    appendBotImg(link); 
  }, delay);
}

function removeMessage(messageDiv) {
  messageDiv.remove();
}

// USER   USER   USER   USER   USER   USER   USER   USER   USER   USER   USER   USER   

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

// BOT   BOT   BOT   BOT   BOT   BOT   BOT   BOT   BOT   BOT   BOT   BOT   BOT   BOT   BOT   

function bot(caseName) {
  appendUserMessage();
  removeButtons();

  if (flirtIndex < 2) {
    setTimeout(function() { showNextMessage(eval(`${caseName}_array_01`)[flirtIndex][0], 1500); }, 1000);
    setTimeout(function() { showNextMessage(eval(`${caseName}_array_02`)[flirtIndex][0], 2500); }, 3000);
    
      setTimeout(function() {
          document.querySelector(`.${caseName}`).style.display = "inline";
          flirtIndex++;
          firstMessageIndex++;
      }, 6500);
  } else {
      setTimeout(function() { showNextMessage("wie magst du den Flirt?", 1000); }, 1000);
      modus();
  }
}


// AVATAR   AVATAR   AVATAR   AVATAR   AVATAR   AVATAR   AVATAR   AVATAR   AVATAR   

function avatarFrau(){
  document.querySelector(".avatar").src = "img/memoji-woman.png";
  document.querySelector(".avatar-name").innerHTML = "Flora";
  document.querySelector(".avatar-name").style.color = "salmon";
  document.querySelector(".avatar-container").style.backgroundColor = "dodgerblue";
}

function avatarMann(){
  document.querySelector(".avatar").src = "img/memoji-man.png";
  document.querySelector(".avatar-name").innerHTML = "Joe";
  document.querySelector(".avatar-name").style.color = "salmon";
  document.querySelector(".avatar-container").style.backgroundColor = "dodgerblue";
}

// COIN  COIN  COIN  COIN  COIN  COIN  COIN  COIN  COIN  COIN  COIN  COIN  COIN  COIN  

function coin(geschlecht) {
  const coinContainer = document.createElement("div");
  coinContainer.classList.add("coin-container");

  const coinBox = document.createElement("div");
  coinBox.classList.add("coin-box");

  const coin = document.createElement("div");
  coin.classList.add("coin");

  coinBox.appendChild(coin);
  coinContainer.appendChild(coinBox);

  const body = document.querySelector(".bigcontainer");
  body.appendChild(coinContainer);

  if (geschlecht === "man") {
      coin.classList.add('male-background');
  }

  setTimeout(function() {
    if (coinContainer) {
        coinContainer.remove();
    }
}, 3000);
}


// MODUS   MODUS   MODUS   MODUS   MODUS   MODUS   MODUS   MODUS   MODUS   MODUS   

function modus(){
  setTimeout(function() {
    const div = document.querySelector(".user-input");
        
    const btnFunny = document.createElement("button");
    div.appendChild(btnFunny);
    btnFunny.innerHTML = "funny";

    const btnNaughty = document.createElement("button");
    div.appendChild(btnNaughty);
    btnNaughty.innerHTML = "naughty";

    const btnRomantic = document.createElement("button");
    div.appendChild(btnRomantic);
    btnRomantic.innerHTML = "romantic";

    btnFunny.addEventListener("click", FlirtFunny);
    btnNaughty.addEventListener("click", FlirtNaughty);
    btnRomantic.addEventListener("click", FlirtRomantic);
    }, 3000);
}

function FlirtNaughty(){
  removeButtons();
  const body = document.body;
  body.classList.add("body-naughty");
  setTimeout(function(){
  const userMessages = document.querySelectorAll(".user-message");
  userMessages.forEach(message => {
    message.classList.add("user-naughty");
  });

  const botMessages = document.querySelectorAll(".bot-message");
  botMessages.forEach(message => {
    message.classList.add("bot-naughty");
  });
  document.getElementById("header").classList.add("header-naughty");

  document.querySelector(".avatar-container").style.backgroundColor = "rgb(141, 72, 72)";
  document.querySelector(".avatar-name").style.color = "rgb(179, 142, 142)";
  document.querySelector(".h2").style.color = "rgb(179, 142, 142)";
}, 1000);

  setTimeout(function(){appendUserMessage("du kannst naughty sein...");}, 4000);
}

function FlirtFunny(){
  removeButtons();
  const body = document.body;
  body.classList.add("body-funny");
  setTimeout(function(){
    const userMessages = document.querySelectorAll(".user-message");
    userMessages.forEach(message => {
      message.classList.add("user-funny");
    });
  
    const botMessages = document.querySelectorAll(".bot-message");
    botMessages.forEach(message => {
      message.classList.add("bot-funny");
    });

    document.getElementById("header").classList.add("header-funny");

    document.querySelector(".avatar-container").style.backgroundColor = "rgb(252, 154, 233)";
    document.querySelector(".avatar-name").style.color = "rgb(248, 239, 179)";
    document.querySelector(".h2").style.color = "rgb(248, 239, 179)";
  }, 1000);

  setTimeout(function(){appendUserMessage("bring mich zu lachen");}, 4000);
}

function FlirtRomantic(){
  removeButtons();
  const body = document.body;
  body.classList.add("body-romantic");
  setTimeout(function(){
    const userMessages = document.querySelectorAll(".user-message");
    userMessages.forEach(message => {
      message.classList.add("user-romantic");
    });
  
    const botMessages = document.querySelectorAll(".bot-message");
    botMessages.forEach(message => {
      message.classList.add("bot-romantic");
    });

    document.getElementById("header").classList.add("header-romantic");
  
    document.querySelector(".avatar-container").style.backgroundColor = "#937fbe";
    document.querySelector(".avatar-name").style.color = "white";
    document.querySelector(".h2").style.color = "white";
  }, 1000);

  setTimeout(function(){appendUserMessage("ich mag, wenn du romantisch bist");}, 4000);
}