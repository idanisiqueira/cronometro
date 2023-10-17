"use strict";

let minute = 0;
let second = 0;
let millisecond = 0;

let cron;


// localizando os botões

const clickStart = document.querySelector("#iniciar")
const clickPause = document.querySelector("#pausar")
const clickStop = document.querySelector("#parar")

// localizando os números

const milliNumber = document.querySelector("#millisecond")
const secNumber = document.querySelector("#second")
const minNumber = document.querySelector("#minute")

// função de clicar de cada botão

clickStart.addEventListener("click", start)
clickPause.addEventListener("click", pause)
clickStop.addEventListener("click", reset)

// função de cada botão

function start() {
  clearInterval(cron)
  cron = setInterval(() => {
    milliseconds()
  }, 10)
}

function pause() {
  clearInterval(cron);
}

function reset() {
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '00';
  clearInterval(cron)
}

// função do decorrer do tempo de cada sessão de números

function milliseconds() {
  millisecond++
  if (millisecond < 10) {
    milliNumber.innerHTML = "0" + millisecond
  }
  else {
    milliNumber.innerHTML = millisecond
  }
  if (millisecond == 99) {
    millisecond = 0
    seconds()
  }
}

function seconds() {
  second++
  if (second < 10) {
    secNumber.innerHTML = "0" + second
  }
  else {
    secNumber.innerHTML = second
  }
  if (second == 59) {
    second = 0
    minutes()
  }
}

function minutes() {
  minute++
  if (minute < 10) {
    minNumber.innerHTML = "0" + minute
  }
  else {
    minNumber.innerHTML = minute
  }
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}