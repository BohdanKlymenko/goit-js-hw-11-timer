const body = document.querySelector('body');

const colors = ['#FFFFFF', '#2822d4', '#FF9800', '#800000', '#94000c', '#fecda2', '#5c9f01'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalID = null;

const bodyColor = () => {
  body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};

const bodyBackground = () => {
  intervalID = setInterval(bodyColor, 1000);
};
bodyBackground();
