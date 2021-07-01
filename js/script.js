const countdown = document.querySelector(".countdown");

const launchDate = new Date("Jun 30, 2021 22:47:00").getTime();

const interval = setInterval(() => {
  const nowDate = new Date().getTime();

  const restant = launchDate - nowDate;

  const days = Math.floor(restant / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (restant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((restant % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((restant % (1000 * 60)) / 1000);

  countdown.innerHTML = `
  <div>${days}<span>Día</span></div>
  <div>${hours}<span>Horas</span></div>
  <div>${minutes}<span>Minutos</span></div>
  <div>${seconds}<span>Segundos</span></div> `;

  if (restant < 0) {
    clearInterval(interval);
    countdown.style.color = "#040b35";
    countdown.innerHTML = "Comenzando ya";
  }
}, 1000);
