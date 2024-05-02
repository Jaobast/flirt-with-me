let flirtIndex = 0;
let firstMessageIndex = 0;

const firstMessage = ["Okay, ich habe einen.", "Bereit für den zweiten Witz?", "Ich hoffe, dass du nicht vor Lachen kaputtgehst!"];

const ffr_array = [
  ["In deinen Augen sehe ich Sterne", "aber in deinem Lächeln sehe ich den ganzen Himmel."],
  ["Tun dir nicht die Füße weh?", "Seit ich dich kenne, gehst du mir nur noch durch den Kopf!"],
  ["Glaubst du an Liebe auf den ersten Blick?", "oder soll ich nochmal reinkommen?"],
  ["Wenn Schönheit ein Verbrechen wäre...", "müsstest du lebenslänglich im Gefängnis sein."],
  ["Kannst du mir deinen Vornamen verraten?", "Ich würde gerne wissen, wie meine nächste Freundin heißt!"]
];

const ffd_array = [
  ["Babe, merk dir meinen Namen", "du wirst ihn später schreien 😩"],
  ["Arbeitet dein Vater zufällig für die NASA? 🚀", "Du siehst so aus, als wärst du ne echte Rakete im Bett"],
  ["Ich bin neidisch auf dein Herz", "weil es in dir pumpt und ich nicht"],
  ["Ich bin Möbelpacker von Beruf.", "Soll ich dir beim Ausziehen helfen?"],
  ["Hallo, ich habe ein Kätzchen.", "Du kannst meins streicheln, wenn ich deins streicheln kann."]
];

function flirtfrau(){
    appendUserMessage("ich bin weiblich");
    removeButtons();
    setTimeout(function() {appendBotMessage("...");setTimeout(function() {document.querySelector(".bot-message:last-of-type").remove();}, 1000);}, 500);
    setTimeout(function() {appendBotMessage("😏");}, 1510);

    setTimeout(function() {appendBotMessage("...");setTimeout(function() {document.querySelector(".bot-message:last-of-type").remove();}, 1500);}, 2000);
    setTimeout(function() {appendBotMessage("wie soll ich mit dir flirten?");}, 3510);
    setTimeout(function() {
  
      const div = document.querySelector(".user-input");
      
      const btnRom = document.createElement("button");
      div.appendChild(btnRom);
      btnRom.innerHTML = "romantisch";
  
      const btnDirty = document.createElement("button");
      div.appendChild(btnDirty);
      btnDirty.innerHTML = "dirty";
  
      btnRom.addEventListener("click", flirtfrauRom);
      btnDirty.addEventListener("click", flirtfrauDirty);
  
  }, 4000);
  }

function flirtfrauRom(){
    appendUserMessage("sei bitte romantisch");
    removeButtons();
    setTimeout(function() {appendBotMessage("🌹");}, 500);
    setTimeout(function() {appendBotMessage("ok honey");}, 1500);
    setTimeout(function() {appendBotMessage("*ich küsse deine Hand");}, 2500);
    setTimeout(function() {
        const div = document.querySelector(".user-input");
        const btnFlirt = document.createElement("button");
        div.appendChild(btnFlirt);
        btnFlirt.innerHTML = "Flirt mit mir!";
        btnFlirt.classList.add("flirtfrauRom");

        btnFlirt.addEventListener("click", flirtfrauRomBot);
    }, 3000);
}


function flirtfrauRomBot(){
  appendUserMessage();
  removeButtons();

  setTimeout(function() {appendBotMessage(ffr_array[flirtIndex][0]);}, 1000);
  setTimeout(function() {
    appendBotMessage(ffr_array[flirtIndex][1]);
    document.querySelector(".flirtfrauRom").style.display = "inline";
    flirtIndex++;
    firstMessageIndex++;}, 2000);
}



function flirtfrauDirty(){
    appendUserMessage("i like it dirty 🤭");
    removeButtons();
    setTimeout(function() {appendBotMessage("🍑");}, 500);
    setTimeout(function() {appendBotMessage("heheh");}, 1500);
    setTimeout(function() {
        const div = document.querySelector(".user-input");
        const btnFlirt = document.createElement("button");
        div.appendChild(btnFlirt);
        btnFlirt.innerHTML = "Flirt mit mir!";
        btnFlirt.classList.add("flirtfrauDirty");

        btnFlirt.addEventListener("click", flirtfrauDirtyBot);
    }, 3000);
}


function flirtfrauDirtyBot(){
  appendUserMessage();
  removeButtons();

  setTimeout(function() {appendBotMessage(ffd_array[flirtIndex][0]);}, 1000);
  setTimeout(function() {
    appendBotMessage(ffd_array[flirtIndex][1]);
    document.querySelector(".flirtfrauDirty").style.display = "inline";
    flirtIndex++;
    firstMessageIndex++;}, 2000);
}