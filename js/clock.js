const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");
  const sec = date.getSeconds().toString().padStart(2, "0");
  clock.innerHTML = `${hour}:${min}:${sec}`;
}

getClock();

clock.innerHTML = setInterval(() => {
  getClock();
}, 100);
