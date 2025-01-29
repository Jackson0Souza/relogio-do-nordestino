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
    message = "Opaa! Já mandou aquele cuscuz com café de rapadura?";
    body.style.background = "linear-gradient(135deg, #f2c84b, #d58936)";
    body.style.color = "#4a2700";
    container.style.background = "#fdf1e2";
    speechBubble.style.background = "#fff3c4";
    speechBubble.style.color = "#4a2700";
    title.style.color = "#4a2700";
    characterImage.src = "assets/img/nordestino-dia.webp";
  } else if (hours >= 11 && hours < 14) {
    message = "E aí sô, já pegou aquele almoço arretado?";
  } else if (hours >= 14 && hours < 18) {
    message = "Que tal um cafezinho pra espantar o sono?";
  } else if (hours >= 18 && hours < 22) {
    message = "Tá na hora de um arroz com feijão pra ir descançar o corpo.";
    body.style.background = "linear-gradient(135deg, #3b4d61, #2c3e50)";
    body.style.color = "#fff";
    container.style.background = "#2c3e50";
    speechBubble.style.background = "#34495e";
    speechBubble.style.color = "#fff";
    title.style.color = "#fff";
    characterImage.src = "assets/img/nordestino-noite.webp";
  } else {
    message = "Já tá tarde, sô! Simbora dormir.";
    body.style.background = "linear-gradient(135deg, #2c3e50, #1a242f)";
    body.style.color = "#fff";
    container.style.background = "#34495e";
    speechBubble.style.background = "#2c3e50";
    speechBubble.style.color = "#fff";
    title.style.color = "#fff";
    characterImage.src = "assets/img/nordestino-noite.webp";
  }

  // Animação suave para a mudança de imagem e mensagem
  messageElement.classList.add("fade-out");
  setTimeout(() => {
    messageElement.textContent = message;
    messageElement.classList.remove("fade-out");
  }, 500);

  characterImage.classList.add("fade-out");
  setTimeout(() => {
    characterImage.classList.remove("fade-out");
  }, 500);
}

setInterval(updateClock, 1000);
updateClock();
