const mff_array_01 = [
    ["Babe, merk dir meinen Namen"],
    ["Arbeitet dein Vater zufällig für die NASA? 🚀"],
    ["Ich bin neidisch auf dein Herz"],
    ["Ich bin Möbelpacker von Beruf."],
    ["Hallo, ich habe ein Kätzchen."]
  ];
  
  const mff_array_02 = [
    ["du wirst ihn später schreien 😩"],
    ["du siehst so aus, als wärst du ne echte Rakete im Bett"],
    ["weil es in dir pumpt und ich nicht"],
    ["soll ich dir beim Ausziehen helfen?"],
    ["du kannst meins streicheln, wenn ich deins streicheln kann."]
  ];

function appendBotMessageMann(messageText) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message bot-message";
    chatContent.appendChild(messageDiv);
  
    const avatar = document.createElement("div");
    avatar.className = "message-avatar";
    const img = document.createElement("img");
    img.src = "img/icon-man-whitesmoke.svg";
    img.classList.add("woman-avatar");
    avatar.appendChild(img);
    messageDiv.appendChild(avatar);
  
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = messageText;
    messageDiv.appendChild(contentDiv);
  
    return messageDiv;
  }
  
  function showNextMessageMann(messageText, delay) {
    const messageDiv = appendBotMessageMann("...");
    setTimeout(function() {
      removeMessage(messageDiv);
      appendBotMessageMann(messageText); 
    }, delay);
  }

function flirtmff(){
    appendUserMessage("ich möchtest von einem Mann geflirtert werden");
    removeButtons();
    setTimeout (function(){showNextMessageMann("🍆💦", 1000);}, 500);
    setTimeout (function(){showNextMessageMann("send nudes hehe", 1000);}, 2000);
    setTimeout (function(){showNextMessageMann("spaß 🌿👀🌿", 1000);}, 4000);
    setTimeout(function() {
        const div = document.querySelector(".user-input");
        const btnFlirt = document.createElement("button");
        div.appendChild(btnFlirt);
        btnFlirt.innerHTML = "Flirt mit mir!";
        btnFlirt.classList.add("mff");

        btnFlirt.addEventListener("click", mffBot);
    }, 6000);
}


function mffBot(){
  appendUserMessage();
  removeButtons();

  if (flirtIndex < 2) {
    setTimeout(function() {showNextMessageMann(mff_array_01[flirtIndex][0], 1500);}, 1000);
    setTimeout(function() {showNextMessageMann(mff_array_02[flirtIndex][0], 2500);}, 3000);
    setTimeout(function() {
      document.querySelector(".mff").style.display = "inline";
      flirtIndex++;
      firstMessageIndex++;
    }, 6500);
  } else {
    setTimeout(function() {showNextMessageMann("wie magst du den Flirt?", 1000);}, 1000);
    modus();
  }
}