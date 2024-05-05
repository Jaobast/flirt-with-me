const ffm_array_01 = [
    ["frau für mann 01"],
    ["frau für mann 02"],
    ["Glaubst du an Liebe auf den ersten Blick?"],
    ["Wenn Schönheit ein Verbrechen wäre..."],
    ["Kannst du mir deinen Vornamen verraten?"]
  ];
  
  const ffm_array_02 = [
    ["frau für mann 01"],
    ["frau für mann 02"],
    ["oder soll ich nochmal reinkommen?"],
    ["müsstest du lebenslänglich im Gefängnis sein."],
    ["ich würde gerne wissen, wie meine nächste Freundin heißt!"]
  ];
  
  
  function flirtMann(){
      appendUserMessage("ich bin männlich");
      removeButtons();
      setTimeout (function(){showNextMessage("🙈", 1000);}, 500);
      setTimeout (function(){showNextMessage("und welches Geschlecht bevorzugst du für mich?", 1000);}, 2000);
  
      setTimeout(function() {
    
        const div = document.querySelector(".user-input");
        
        const btnBotFrau = document.createElement("button");
        div.appendChild(btnBotFrau);
        btnBotFrau.innerHTML = "weiblich";
    
        const btnBotMann = document.createElement("button");
        div.appendChild(btnBotMann);
        btnBotMann.innerHTML = "männlich";
    
        btnBotFrau.addEventListener("click", flirtffm);
        btnBotMann.addEventListener("click", flirtmfm);
    
    }, 4000);
    }
  
  function flirtffm(){
    setTimeout ( avatarFrau(), 500);
      appendUserMessage("ich möchtest von einer Frau geflirtert werden");
      removeButtons();
      setTimeout (function(){showNextMessageFrau("🫦", 1000);}, 500);
      setTimeout (function(){showNextMessageFrau("hahah so ist viel besser", 1000);}, 2000);
      setTimeout(function() {
          const div = document.querySelector(".user-input");
          const btnFlirt = document.createElement("button");
          div.appendChild(btnFlirt);
          btnFlirt.innerHTML = "Flirt mit mir!";
          btnFlirt.classList.add("ffm");
  
          btnFlirt.addEventListener("click", ffmBot);
      }, 4000);
  }
  
  
  function ffmBot() {
    appendUserMessage();
    removeButtons();
  
    if (flirtIndex < 2) {
      setTimeout(function() {showNextMessageFrau(ffm_array_01[flirtIndex][0], 1500);}, 1000);
      setTimeout(function() {showNextMessageFrau(ffm_array_02[flirtIndex][0], 2500);}, 3000);
      setTimeout(function() {
        document.querySelector(".ffm").style.display = "inline";
        flirtIndex++;
        firstMessageIndex++;
      }, 6500);
    } else {
      setTimeout(function() {showNextMessageFrau("wie magst du den Flirt?", 1000);}, 1000);
      modus();
    }
  }