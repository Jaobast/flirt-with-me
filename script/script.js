setTimeout (function(){showNextMessage("Hey!", 500);}, 0);
setTimeout (function(){showNextMessage("Ich bin der Flirt-Bot und ich bin hier, um dein Herz zu erobern.", 1000);}, 1000);
setTimeout (function(){showNextMessage("Erlaubst du mir, mit dir zu flirten? 😏", 1000);}, 3000);
setTimeout (function(){
  const div = document.querySelector(".user-input");
        
  const btnJa = document.createElement("button");
  div.appendChild(btnJa);
  btnJa.innerHTML = "Yes";

  const btnNein = document.createElement("button");
  div.appendChild(btnNein);
  btnNein.innerHTML = "Nop";

  btnJa.addEventListener("click", geschlecht);
  btnJa.classList.add("yes");
  btnNein.addEventListener("click", noFlirt);
  btnNein.classList.add("nop");
}, 5000);


function noFlirt(){
  removeButtons();
  setTimeout(function(){appendUserMessage("Nope!");}, 0);
  setTimeout(function(){appendUserMessage("ich bin mir nicht sicher");}, 1000);
  setTimeout(function(){appendUserImg("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGx0ZzV2am4xaXJ0eDYzaGY0aTV3N3ByOGk3bWVpMjFmaW1wY3ZsYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L2Ts72zLIcTWujzCxk/giphy.gif");}, 2000);
  setTimeout (function(){showNextImg("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDM4M210NDUwazNyZzlpZ3RhM296dmZ2aG1jN3gzZWkycTBrb2pwMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RiEqMWo9BXzkBAuAhh/giphy.gif", 2000);}, 4000);
  setTimeout (function(){showNextMessage("Excuse me?", 1000);}, 7000);
  setTimeout (function(){showNextMessage("Ich werde nochnmal fragen", 1500);}, 9000);
  setTimeout (function(){showNextMessage("und jetzt gebe ich dir nur eine Auswahl", 1500);}, 11500);
  setTimeout (function(){showNextMessage("😇", 500);}, 13500);
}




function geschlecht(){
  removeButtons();
  setTimeout (function(){appendUserMessage("ja klar!");}, 0);
  setTimeout (function(){appendUserMessage("du darfst mich anmachen");}, 1000);
  

  setTimeout (function(){showNextMessage("Bevor ich mein Verführungsspiel beginne, könntest du mir verraten, welches Geschlecht du für dich bevorzugst?", 2000);}, 3000);
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

    btnfrau.addEventListener("click", flirtfrau);
    btnmann.addEventListener("click", flirtmann);
    btnnon.addEventListener("click", flirtdivers);
    }, 6000);
}
