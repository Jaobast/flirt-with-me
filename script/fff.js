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
  setTimeout ( avatarFrau(), 500);

  appendUserMessage("ich möchtest von einer anderer Frau geflirtert werden");
  setTimeout(coin, 500);
  setTimeout(function() {
      const coinContainer = document.querySelector(".coin-container");
      if (coinContainer) {
          coinContainer.remove();
      }
  }, 6500);
  setTimeout (function(){

    const coinContainer = document.createElement("div");
    coinContainer.classList.remove("coin-container");
    
    const coinBox = document.createElement("div");
    coinBox.classList.remove("coin-box");
    
    const coin = document.createElement("div");
    coin.classList.remove("coin", "coin2"); // Adicionando classes "coin" e "coin2"
    
    coinBox.appendChild(coin);
    coinContainer.appendChild(coinBox);
    
    const body = document.querySelector(".bigcontainer"); // Corrigindo a classe para ".bigcontainer"
    body.appendChild(coinContainer);
  }, 6500);
  removeButtons();
  setTimeout (function(){showNextMessage("✨lesb✨", 1000);}, 500);
  setTimeout (function(){showNextMessage("🫦", 1000);}, 2500);
  setTimeout (function(){showNextMessage("hahah so ist viel besser", 1000);}, 4500);
  setTimeout(function() {
      const div = document.querySelector(".user-input");
      const btnFlirt = document.createElement("button");
      div.appendChild(btnFlirt);
      btnFlirt.innerHTML = "Flirt mit mir!";
      btnFlirt.classList.add("fff");

      btnFlirt.addEventListener("click", fffBot);
  }, 6500);
}


function coin(){

  const coinContainer = document.createElement("div");
  coinContainer.classList.add("coin-container");
  
  const coinBox = document.createElement("div");
  coinBox.classList.add("coin-box");
  
  const coin = document.createElement("div");
  coin.classList.add("coin", "coin2"); // Adicionando classes "coin" e "coin2"
  
  coinBox.appendChild(coin);
  coinContainer.appendChild(coinBox);
  
  const body = document.querySelector(".bigcontainer"); // Corrigindo a classe para ".bigcontainer"
  body.appendChild(coinContainer);
}


function fffBot() {
  appendUserMessage();
  removeButtons();

  if (flirtIndex < 2) {
    setTimeout(function() {showNextMessage(fff_array_01[flirtIndex][0], 1500);}, 1000);
    setTimeout(function() {showNextMessage(fff_array_02[flirtIndex][0], 2500);}, 3000);
    setTimeout(function() {
      document.querySelector(".fff").style.display = "inline";
      flirtIndex++;
      firstMessageIndex++;
    }, 6500);
  } else {
    setTimeout(function() {showNextMessage("wie magst du den Flirt?", 1000);}, 1000);
    modus();
  }
}