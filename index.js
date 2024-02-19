const magicEightBallResponses = [
  'Безсумнівно',
  'Передбачено',
  'Немає сумнівів',
  'Однозначно так',
  'Можеш бути впевнений в цьому',
  'Мені здається — так',
  'Ймовірно',
  'Гарні перспективи',
  'Знаки говорять — так',
  'Так',
  'Поки не зрозуміло, спробуй ще раз',
  'Спитай пізніше',
  'Краще не розповідати',
  'Зараз неможливо передбачити',
  'Сконцентруйся і спитай знову',
  'Навіть не думай',
  'Моя відповідь — ні',
  'За моїми даними — ні',
  'Перспективи не дуже хороші',
  'Дуже сумнівно',
];

const ball = document.querySelector('.ball-container');
const textInput = document.querySelector('.ball-container__text');

textInput.addEventListener('click', () => {
  textInput.classList.remove('fadeOut');
  textInput.classList.remove('fadeIn');
  ball.classList.add('ball-container--shake-animation');
  textInput.classList.add('fadeOut');

  setTimeout(() => {
    const randomIndex = Math.floor(
      Math.random() * magicEightBallResponses.length
    );
    const randomResponse = magicEightBallResponses[randomIndex];
    textInput.classList.add('fadeIn');
    textInput.textContent = randomResponse;

    textInput.classList.remove('fadeOut');
    ball.classList.remove('ball-container--shake-animation');

    // setTimeout(() => {
    //   textInput.classList.remove('fadeOut');
    //   textInput.classList.remove('fadeIn');
    // }, 500);
  }, 600);
});
