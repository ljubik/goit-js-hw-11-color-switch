const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector("button[data-action='start']"),
    stopBtn: document.querySelector("button[data-action='stop']"),
};

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', startBtnChangeColor);
refs.stopBtn.addEventListener('click', stopBtnChangeColor);


function startBtnChangeColor() {
  if (refs.startBtn.classList.contains('run')) {
    return;
  }
  
  refs.startBtn.classList.add('run');
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}

function stopBtnChangeColor() {
  refs.startBtn.classList.remove('run');
  clearInterval(intervalId);
  refs.body.style.backgroundColor = 'transparent';
}