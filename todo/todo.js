let inputValue = '';
let taskArr = [];
let warn = false;
const registerInput = document.querySelector('.register_input');
const registerBtn = document.querySelector('.register_btn');
const tapBtnWrap = document.querySelector('.tap_btn_wrap');
const deleteBtn = document.querySelectorAll('.delete_btn');
const checkBtn = document.querySelectorAll('.check_btn');
const todoUl = document.querySelector('.todo_ul');

registerInput.addEventListener('input', function () {
  warn = false;
  inputValue = this.value;
  Warn();
});
registerBtn.addEventListener('click', function () {
  if (inputValue != '') {
    taskArr.push({
      inputValue: inputValue,
      checked: false,
      id: Math.random().toString(36).substr(2, 5),
    });
    renderHTML(taskArr);
  } else {
    warn = true;
  }
  inputValue = '';
  registerInput.value = '';
  Warn();
});
tapBtnWrap.addEventListener('click', function (e) {
  if (e.target.textContent === '전체') {
    renderHTML(taskArr);
  } else if (e.target.textContent === '완료됨') {
    let finishedArr = taskArr.filter((a, i) => {
      return a.checked == true;
    });
    renderHTML(finishedArr);
  } else if (e.target.textContent == '완료되지 않음') {
    let unFinishedArr = taskArr.filter((a, i) => {
      return a.checked != true;
    });
    renderHTML(unFinishedArr);
  }
});

function deleteEvent() {
  deleteBtn.forEach((a, i) => {
    a.addEventListener('click', function () {
      let find = taskArr.findIndex((b) => {
        return a.dataset.id == b.id;
      });
      taskArr.splice(find, 1);
      renderHTML(taskArr);
    });
  });
}
function checkEvent() {
  checkBtn.forEach((a, i) => {
    a.addEventListener('click', function () {
      let find = taskArr.findIndex((b) => {
        return a.dataset.id == b.id;
      });
      taskArr[find].checked = !taskArr[find].checked;
      renderHTML(taskArr);
    });
  });
}
function renderHTML(arr) {
  let resultHTML = '';
  arr.forEach((a, i) => {
    if (a.checked == true) {
      resultHTML += `<li class="todo_li checked_background">
    <span class="todo_li_txt line_through ">${a.inputValue}</span>
    <span class="todo_li_btnWrap">
      <button class="check_btn" data-id=${a.id}>✓</button>
      <button class="delete_btn"data-id=${a.id}>x</button>
    </span>
  </li>`;
    } else {
      resultHTML += `<li class="todo_li">
    <span class="todo_li_txt">${a.inputValue}</span>
    <span class="todo_li_btnWrap">
      <button class="check_btn" data-id=${a.id}>✓</button>
      <button class="delete_btn"data-id=${a.id}>x</button>
    </span>
  </li>`;
    }
  });
  todoUl.innerHTML = resultHTML;
  checkEvent();
  deleteEvent();
}
function Warn() {
  if (warn == true) {
    document.querySelector('.warn').innerHTML = '1글자 이상 입력해주세요';
  } else {
    document.querySelector('.warn').innerHTML = '';
  }
}
