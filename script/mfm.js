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

    setTimeout(coin("man"), 0);
    setTimeout(removeButtons, 200);
    setTimeout (avatarMann, 2900);

    setTimeout (function(){showNextMessage("✨fagot✨ 💅🏼", 1000);}, 3500);
    setTimeout (function(){showNextMessage("Grindr feelings", 1000);}, 5500);
    setTimeout (function(){showNextMessage("heheh", 1000);}, 7500);
    setTimeout(function() {
        const div = document.querySelector(".user-input");
        const btnFlirt = document.createElement("button");
        div.appendChild(btnFlirt);
        btnFlirt.innerHTML = "Flirt mit mir!";
        btnFlirt.classList.add("mfm");

        btnFlirt.addEventListener("click", function() {bot("mfm");});
    }, 9500);
}