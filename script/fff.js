let flirtIndex = 0;
let firstMessageIndex = 0;

const fff_array_01 = [
  ["In deinen Augen sehe ich Sterne"],
  ["Tun dir nicht die Füße weh?"],
  ["Glaubst du an Liebe auf den ersten Blick?"],
  ["Wenn Schönheit ein Verbrechen wäre..."],
  ["Kannst du mir deinen Vornamen verraten?"]
];

const fff_array_02 = [
  ["aber in deinem Lächeln sehe ich den ganzen Himmel."],
  ["seit ich dich kenne, gehst du mir nur noch durch den Kopf!"],
  ["oder soll ich nochmal reinkommen?"],
  ["müsstest du lebenslänglich im Gefängnis sein."],
  ["ich würde gerne wissen, wie meine nächste Freundin heißt!"]
];

function appendBotMessageFrau(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";
  chatContent.appendChild(messageDiv);

  const avatar = document.createElement("div");
  avatar.className = "message-avatar";
  const img = document.createElement("img");
  img.src = "img/icon-woman-whitesmoke.svg";
  img.classList.add("woman-avatar");
  avatar.appendChild(img);
  messageDiv.appendChild(avatar);

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;
  messageDiv.appendChild(contentDiv);

  return messageDiv;
}

function showNextMessageFrau(messageText, delay) {
  const messageDiv = appendBotMessageFrau("...");
  setTimeout(function() {
    removeMessage(messageDiv);
    appendBotMessageFrau(messageText); 
  }, delay);
}


function flirtFrau(){
    appendUserMessage("ich bin weiblich");
    removeButtons();
    setTimeout (function(){showNextMessage("😏", 1000);}, 500);
    setTimeout (function(){showNextMessage("und welches Geschlecht bevorzugst du für mich?", 1000);}, 2000);

    setTimeout(function() {
  
      const div = document.querySelector(".user-input");
      
      const btnBotFrau = document.createElement("button");
      div.appendChild(btnBotFrau);
      btnBotFrau.innerHTML = "weiblich";
  
      const btnBotMann = document.createElement("button");
      div.appendChild(btnBotMann);
      btnBotMann.innerHTML = "männlich";
  
      btnBotFrau.addEventListener("click", flirtfff);
      btnBotMann.addEventListener("click", flirtmff);
  
  }, 4000);
  }

function flirtfff(){
    appendUserMessage("ich möchtest von einer anderer Frau geflirtert werden");
    removeButtons();
    setTimeout (function(){showNextMessageFrau("✨lesb✨", 1000);}, 500);
    setTimeout (function(){showNextMessageFrau("🫦", 1000);}, 500);
    setTimeout (function(){showNextMessageFrau("hahah so ist viel besser", 1000);}, 2000);
    setTimeout(function() {
        const div = document.querySelector(".user-input");
        const btnFlirt = document.createElement("button");
        div.appendChild(btnFlirt);
        btnFlirt.innerHTML = "Flirt mit mir!";
        btnFlirt.classList.add("fff");

        btnFlirt.addEventListener("click", fffBot);
    }, 4000);
}


function fffBot() {
  appendUserMessage();
  removeButtons();

  if (flirtIndex < 2) {
    setTimeout(function() {showNextMessageFrau(fff_array_01[flirtIndex][0], 1500);}, 1000);
    setTimeout(function() {showNextMessageFrau(fff_array_02[flirtIndex][0], 2500);}, 3000);
    setTimeout(function() {
      document.querySelector(".fff").style.display = "inline";
      flirtIndex++;
      firstMessageIndex++;
    }, 6500);
  } else {
    setTimeout(function() {showNextMessageFrau("wie magst du den Flirt?", 1000);}, 1000);
    modus();
  }
}

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
}, 500);

  setTimeout(function(){appendUserMessage("TESTE");}, 4000);
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
  }, 500);

  setTimeout(function(){appendUserMessage("TESTE");}, 4000);
}