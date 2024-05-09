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
      appendUserMessage("ich möchtest von einer Frau geflirtert werden");

      setTimeout(coin, 0);
      setTimeout(removeButtons, 200);
      setTimeout (avatarFrau, 2900);

      setTimeout (function(){showNextMessage("🫦", 1000);}, 3500);
      setTimeout (function(){showNextMessage("hahah so ist viel besser", 1000);}, 5500);
      setTimeout(function() {
          const div = document.querySelector(".user-input");
          const btnFlirt = document.createElement("button");
          div.appendChild(btnFlirt);
          btnFlirt.innerHTML = "Flirt mit mir!";
          btnFlirt.classList.add("ffm");
  
          btnFlirt.addEventListener("click", function() {bot("ffm");});
      }, 7500);
  }