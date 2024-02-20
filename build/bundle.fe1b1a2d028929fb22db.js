/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var magicBallResponses = ['Безсумнівно', 'Передбачено', 'Немає сумнівів', 'Однозначно так', 'Можеш бути впевнений в цьому', 'Мені здається — так', 'Ймовірно', 'Гарні перспективи', 'Знаки говорять — так', 'Так', 'Поки не зрозуміло, спробуй ще раз', 'Спитай пізніше', 'Краще не розповідати', 'Зараз неможливо передбачити', 'Сконцентруйся і спитай знову', 'Навіть не думай', 'Моя відповідь — ні', 'За моїми даними — ні', 'Перспективи не дуже хороші', 'Дуже сумнівно'];
var ball = document.querySelector('.ball-container');
var textInput = document.querySelector('.ball-container__text');
textInput.addEventListener('click', function () {
  textInput.classList.remove('fadeIn');
  ball.classList.add('ball-container--shake-animation');
  textInput.classList.add('fadeOut');
  setTimeout(function () {
    var randomIndex = Math.floor(Math.random() * magicBallResponses.length);
    var randomResponse = magicBallResponses[randomIndex];
    textInput.textContent = randomResponse;
    textInput.style = 'color:#07f833;';
    textInput.classList.add('fadeIn');
    textInput.classList.remove('fadeOut');
    ball.classList.remove('ball-container--shake-animation');
  }, 600);
});
/******/ })()
;