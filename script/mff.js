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

function flirtmff(){
  setTimeout ( avatarMann(), 500);
    appendUserMessage("ich möchtest von einem Mann geflirtert werden");
    removeButtons();
    setTimeout (function(){showNextMessage("🍆💦", 1000);}, 500);
    setTimeout (function(){showNextMessage("send nudes hehe", 1000);}, 2000);
    setTimeout (function(){showNextMessage("spaß 🌿👀🌿", 1000);}, 4000);
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
    setTimeout(function() {showNextMessage(mff_array_01[flirtIndex][0], 1500);}, 1000);
    setTimeout(function() {showNextMessage(mff_array_02[flirtIndex][0], 2500);}, 3000);
    setTimeout(function() {
      document.querySelector(".mff").style.display = "inline";
      flirtIndex++;
      firstMessageIndex++;
    }, 6500);
  } else {
    setTimeout(function() {showNextMessage("wie magst du den Flirt?", 1000);}, 1000);
    modus();
  }
}