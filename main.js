const timer = document.querySelector("#timer");
timer.innerHTML += `<div id="set"><div id="display">10

</div><div id="mid">:</div><div id="display1">00

</div></div>
<div class="but">
<button class="btn1">START</button>
<button class="btn2">STOP</button>
<button class="btn3">RESET</button>
</div>`;
const set1 = document.getElementById("#set1");
const sec = document.querySelector("#display1");
const min = document.querySelector("#display");
let time = 59;
let finish;
let ten = 9;

const start = document.querySelector(".btn1");
start.onclick = function () {
  finish = setInterval(function () {
    sec.innerText = time;
    min.innerText = `0${ten}`;
   
    if (time < 0) {
      time = 59;
    }
    if (time >= 10) {
      sec.innerText = `${time}`;
    }
    if (time < 10) {
      sec.innerText = `0${time}`;
    }
    if (time === 0) {
      ten--;
    }

    time--;
    if (ten < 0 && time < 0) {
      clearInterval(finish);
    }
  }, 1000);
};

const stop = document.querySelector(".btn2");
stop.onclick = function () {
  clearInterval(finish);
};

const reset = document.querySelector(".btn3");

reset.onclick = function () {
  sec.innerText = "00";
  min.innerText = "10";
  time = 59;
  ten = 9;
};
