const getValueInput = () => {
  let inputValue = document.getElementById("fecha").value;
  document.getElementById("valueInput").innerHTML = inputValue;
}; 

//sep 29, 2021


let countDate = new Date("sep 30, 2021").getTime();

function countDown() {
  let now = new Date().getTime();
  gap = countDate - now;

  let seg = 1000;
  let min = seg * 60;
  let hrs = min * 60;
  let days = hrs * 24;

  let d = Math.floor(gap / days);
  let h = Math.floor((gap % days) / hrs);
  let m = Math.floor((gap % hrs) / min);
  let s = Math.floor((gap % min) / seg);

  document.getElementById("d").innerText = d;
  document.getElementById("hrs").innerText = h;
  document.getElementById("min").innerText = m;
  document.getElementById("seg").innerText = s;
}

setInterval(function () {
  countDown();
}, 1000);
