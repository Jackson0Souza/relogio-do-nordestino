function updateClock() {
  const timeElement = document.getElementById("time");
  const messageElement = document.getElementById("message");
  const body = document.body;
  const container = document.querySelector(".container");
  const characterImage = document.getElementById("character-image");
  const speechBubble = document.querySelector(".speech-bubble");
  const title = document.querySelector("h1");

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  timeElement.textContent = `${hours}:${minutes}:${seconds}`;

  let message = "";
  let isDay = true;

  if (hours >= 6 && hours < 11) {
    message = "Opaa! Já mandou aquele cuscuz?";
    // Durante o dia
    body.style.background = "linear-gradient(135deg, #f2c84b, #d58936)";
    body.style.color = "#4a2700";
    container.style.background = "#fdf1e2"; // Fundo da div
    speechBubble.style.background = "#fff3c4"; // Fundo da bolha de fala
    speechBubble.style.color = "#4a2700"; // Cor da fonte da bolha
    title.style.color = "#4a2700"; // Cor do título de dia
    characterImage.src = "assets/img/nordestino-dia.webp"; // Imagem do nordestino de dia
  } else if (hours >= 11 && hours < 14) {
    message = "E aí sô, já pegou aquele almoço arretado?";
  } else if (hours >= 14 && hours < 18) {
    message = "Que tal um cafezinho pra espantar o sono?";
  } else if (hours >= 18 && hours < 22) {
    message = "Tá na hora de um arroz com feijão pra ir descançar o corpo.";
    // Mudança para a noite
    body.style.background = "linear-gradient(135deg, #3b4d61, #2c3e50)";
    body.style.color = "#fff";
    container.style.background = "#2c3e50"; // Fundo da div
    speechBubble.style.background = "#34495e"; // Fundo da bolha de fala na noite
    speechBubble.style.color = "#fff"; // Cor da fonte na noite
    title.style.color = "#fff"; // Cor do título à noite
    characterImage.src = "assets/img/nordestino-noite.webp"; // Imagem do nordestino à noite
  } else {
    message = "Já tá tarde, sô! Simbora dormir. ";
    // Noite avançada
    body.style.background = "linear-gradient(135deg, #2c3e50, #1a242f)";
    body.style.color = "#fff";
    container.style.background = "#34495e"; // Fundo da div
    speechBubble.style.background = "#2c3e50"; // Fundo da bolha de fala
    speechBubble.style.color = "#fff"; // Cor da fonte na noite avançada
    title.style.color = "#fff"; // Cor do título à noite avançada
    characterImage.src = "assets/img/nordestino-noite.webp"; // Imagem do nordestino à noite
  }

  messageElement.textContent = message;
}

setInterval(updateClock, 1000);
updateClock();
