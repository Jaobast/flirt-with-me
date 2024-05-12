setTimeout (function(){showNextMessage("Hey!", 500);}, 0);
setTimeout (function(){showNextMessage("Ich bin der Flirt-Bot und ich bin hier, um dein Herz zu erobern.", 1000);}, 1000);
setTimeout (function(){showNextMessage("Erlaubst du mir, mit dir zu flirten? 😏", 1000);}, 2500);
setTimeout (function(){
  const div = document.querySelector(".user-input");
        
  const btnJa = document.createElement("button");
  div.appendChild(btnJa);
  btnJa.innerHTML = "Yes";

  const btnNein = document.createElement("button");
  div.appendChild(btnNein);
  btnNein.innerHTML = "Nop";

  btnJa.addEventListener("click", geschlecht);
  btnNein.addEventListener("click", noFlirt);
}, 4500);


function noFlirt(){
  removeButtons();
  setTimeout(function(){appendUserMessage("Nope!");}, 0);
  setTimeout(function(){appendUserMessage("ich bin mir nicht sicher");}, 1000);
  setTimeout(function(){appendUserImg("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGx0ZzV2am4xaXJ0eDYzaGY0aTV3N3ByOGk3bWVpMjFmaW1wY3ZsYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L2Ts72zLIcTWujzCxk/giphy.gif");}, 2000);
  setTimeout (function(){showNextImg("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDM4M210NDUwazNyZzlpZ3RhM296dmZ2aG1jN3gzZWkycTBrb2pwMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RiEqMWo9BXzkBAuAhh/giphy.gif", 2000);}, 3000);
  setTimeout (function(){showNextMessage("excuse me?", 500);}, 5500);
  setTimeout (function(){showNextMessage("ich frage nochmal", 1000);}, 7000);
  setTimeout (function(){showNextMessage("und du bekommst wieder zwei Auswahl", 1000);}, 9000);
  setTimeout (function(){showNextEmoji("😇", 500);}, 11000);
  setTimeout (function(){showNextMessage("Erlaubst du mir, mit dir zu flirten? 🙃", 2000);}, 12500);
  setTimeout (function(){
    const div = document.querySelector(".user-input");
        
    const btnJa = document.createElement("button");
    div.appendChild(btnJa);
    btnJa.innerHTML = "Yes!!";
  
    const btnKlar = document.createElement("button");
    div.appendChild(btnKlar);
    btnKlar.innerHTML = "klaro!!";
  
    btnJa.addEventListener("click", geschlecht);
    btnKlar.addEventListener("click", geschlecht);
  }, 15500);
}




function geschlecht(){
  removeButtons();
  setTimeout (function(){appendUserMessage("ja klar!");}, 0);
  setTimeout (function(){appendUserMessage("du darfst mich anmachen");}, 1000);
  

  setTimeout (function(){showNextMessage("Bevor ich mein Verführungsspiel beginne, könntest du mir verraten, mit welchem Geschlecht identifizierst du dich?", 2000);}, 2000);
  setTimeout(function() {
    const div = document.querySelector(".user-input");
        
    const btnfrau = document.createElement("button");
    div.appendChild(btnfrau);
    btnfrau.innerHTML = "weiblich";

    const btnmann = document.createElement("button");
    div.appendChild(btnmann);
    btnmann.innerHTML = "männlich";

    const btndivers = document.createElement("button");
    div.appendChild(btndivers);
    btndivers.innerHTML = "divers";
    btndivers.classList.add("disabled");

    btnfrau.addEventListener("click", flirtFrau);
    btnmann.addEventListener("click", flirtMann);
    btnnon.addEventListener("click", flirtdivers);
    }, 5000);
}
