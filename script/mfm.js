const mfm_array_01 = [
    ["mann für mann 01"],
    ["mann für mann 02"],
    ["Ich bin neidisch auf dein Herz"],
    ["Ich bin Möbelpacker von Beruf."],
    ["Hallo, ich habe ein Kätzchen."]
  ];
  
  const mfm_array_02 = [
    ["mann für mann 01"],
    ["mann für mann 02"],
    ["weil es in dir pumpt und ich nicht"],
    ["soll ich dir beim Ausziehen helfen?"],
    ["du kannst meins streicheln, wenn ich deins streicheln kann."]
  ];

function flirtmfm(){
    appendUserMessage("ich möchtest von einem anderen Mann geflirtert werden");
    removeButtons();
    setTimeout (function(){showNextMessageMann("✨fagot✨ 💅🏼", 1000);}, 500);
    setTimeout (function(){showNextMessageMann("Grindr feelings", 1000);}, 2000);
    setTimeout (function(){showNextMessageMann("heheh", 1000);}, 4000);
    setTimeout(function() {
        const div = document.querySelector(".user-input");
        const btnFlirt = document.createElement("button");
        div.appendChild(btnFlirt);
        btnFlirt.innerHTML = "Flirt mit mir!";
        btnFlirt.classList.add("mfm");

        btnFlirt.addEventListener("click", mfmBot);
    }, 6000);
}


function mfmBot(){
  appendUserMessage();
  removeButtons();

  if (flirtIndex < 2) {
    setTimeout(function() {showNextMessageMann(mfm_array_01[flirtIndex][0], 1500);}, 1000);
    setTimeout(function() {showNextMessageMann(mfm_array_02[flirtIndex][0], 2500);}, 3000);
    setTimeout(function() {
      document.querySelector(".mfm").style.display = "inline";
      flirtIndex++;
      firstMessageIndex++;
    }, 6500);
  } else {
    setTimeout(function() {showNextMessageMann("wie magst du den Flirt?", 1000);}, 1000);
    modus();
  }
}