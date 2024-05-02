let flirtIndex = 0;
let firstMessageIndex = 0;

const firstMessage = ["Okay, ich habe einen.", "Bereit für den zweiten Witz?", "Ich hoffe, dass du nicht vor Lachen kaputtgehst!"];

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

function flirtfrau(){
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
  
      btnBotFrau.addEventListener("click", flirtFrauFürFrau);
      btnBotMann.addEventListener("click", flirtMannFürFrau);
  
  }, 4000);
  }

function flirtFrauFürFrau(){
    appendUserMessage("ich möchtest von einer Frau geflirtert werden");
    removeButtons();
    setTimeout (function(){showNextMessage("🫦", 1000);}, 500);
    setTimeout (function(){showNextMessage("hahah so ist viel besser", 1000);}, 2000);
    setTimeout(function() {
        const div = document.querySelector(".user-input");
        const btnFlirt = document.createElement("button");
        div.appendChild(btnFlirt);
        btnFlirt.innerHTML = "Flirt mit mir!";
        btnFlirt.classList.add("frauFürFrau");

        btnFlirt.addEventListener("click", frauFürFrauBot);
    }, 4000);
}


function frauFürFrauBot(){
  appendUserMessage();
  removeButtons();

  setTimeout (function(){showNextMessage(fff_array_01[flirtIndex][0], 1500);}, 1000);
  setTimeout (function(){showNextMessage(fff_array_02[flirtIndex][0], 2500);}, 3000);
  setTimeout(function() {
    document.querySelector(".frauFürFrau").style.display = "inline";
    flirtIndex++;
    firstMessageIndex++;}, 6500);
}



function flirtMannFürFrau(){
    appendUserMessage("ich möchtest von einem Mann geflirtert werden");
    removeButtons();
    setTimeout (function(){showNextMessage("🍆 💦", 1000);}, 500);
    setTimeout (function(){showNextMessage("send nudes", 1000);}, 2000);
    setTimeout (function(){showNextMessage("heheh spaß 🌿👀🌿", 1000);}, 3500);
    setTimeout(function() {
        const div = document.querySelector(".user-input");
        const btnFlirt = document.createElement("button");
        div.appendChild(btnFlirt);
        btnFlirt.innerHTML = "Flirt mit mir!";
        btnFlirt.classList.add("mannFürFrau");

        btnFlirt.addEventListener("click", mannFürFrauBot);
    }, 5500);
}


function mannFürFrauBot(){
  appendUserMessage();
  removeButtons();

  setTimeout (function(){showNextMessage(mff_array_01[flirtIndex][0], 1500);}, 1000);
  setTimeout (function(){showNextMessage(mff_array_02[flirtIndex][0], 2500);}, 3000);
  setTimeout(function() {
    document.querySelector(".mannFürFrau").style.display = "inline";
    flirtIndex++;
    firstMessageIndex++;}, 6500);
}