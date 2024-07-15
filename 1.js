let time = 5;

let a = setTimeout(() => {
  document.querySelector('.event').style.display = 'none';
}, 5000);
let b = setInterval(() => {
  time--;
  if (time > 0) {
    document.querySelector('.event>span').textContent = time;
  }
}, 1000);

let innerBox = document.querySelector('.carousel_inner-box');
let img = document.querySelectorAll('.carousel_inner-box>img');
let btnGroup = document.querySelector('.carousel_btn-group');
let 현재위치 = 0;
btnGroup.addEventListener('click', (e) => {
  if (e.target.textContent == '1') {
    현재위치 = -500 * 0;
  } else if (e.target.textContent == '2') {
    현재위치 = -500 * 1;
  } else if (e.target.textContent == '3') {
    현재위치 = -500 * 2;
  } else if (e.target.textContent == '<') {
    현재위치 = 현재위치 + 500;
  } else if (e.target.textContent == '>') {
    현재위치 = 현재위치 - 500;
  } else if (e.target.textContent == '처음') {
    현재위치 = 0;
  } else if (e.target.textContent == '마지막') {
    현재위치 = -500 * (img.length - 1);
  }

  if (현재위치 <= 0 && 현재위치 >= -500 * (img.length - 1)) {
    innerBox.style.transform = `translateX(${현재위치}px)`;
  }
});
let mousedown = false;
let imgAll = document.querySelectorAll('.carousel_inner-box>img');
시작좌표 = 0;
innerBox.addEventListener('mousedown', (e) => {
  mousedown = true;
  시작좌표 = e.clientX;
});
innerBox.addEventListener('mousemove', (e) => {
  if (mousedown == true) {
    imgAll.forEach((a, i) => {
      if (e.target == a) {
        현재위치 = -500 * i + (e.clientX - 시작좌표);

        if (현재위치 <= 0 && 현재위치 >= -500 * (img.length - 1)) {
          innerBox.style.transform = `translateX(${현재위치}px)`;
        }
      }
    });
  }
});
innerBox.addEventListener('mouseup', (e) => {
  mousedown = false;
  imgAll.forEach((a, i) => {
    if (e.target == a) {
      if (e.clientX - 시작좌표 > 100) {
        현재위치 = 500 - 500 * i;
      } else if (e.clientX - 시작좌표 < -100) {
        현재위치 = -500 - 500 * i;
      } else {
        현재위치 = -500 * i;
      }

      if (현재위치 <= 0 && 현재위치 >= -500 * (img.length - 1)) {
        innerBox.style.transform = `translateX(${현재위치}px)`;
      }
    }
  });
});
window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    document.querySelector('.scroll-box>h1').style.fontSize = '10px';
  }
});
