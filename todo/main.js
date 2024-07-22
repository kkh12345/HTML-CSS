//유저가할일을입력한다
//등록버튼을누르면 할일값을받아와 할일이 추가된다
//추가된 할일을 html로 보여준다
//할일의 체크버튼을 클릭하면 글씨에 줄 생김
//할일의 삭제버튼을 클릭하면 할일이 삭제됨
let inputValue = '';
let taskArr = [];
document
  .querySelector('.register_input')
  .addEventListener('input', function () {
    inputValue = this.value;
  });
document.querySelector('.register_btn').addEventListener('click', function () {
  if (inputValue != '') {
    taskArr.push({
      inputValue: inputValue,
      checked: false,
      id: Math.random().toString(36).substr(2, 5),
    });
    renderHTML(taskArr);
  }
});

document.querySelector('.tap_btn_wrap').addEventListener('click', function (e) {
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
  document.querySelectorAll('.delete_btn').forEach((a, i) => {
    a.addEventListener('click', function () {
      let find = taskArr.findIndex((b) => {
        return a.dataset.id == b.id;
      });
      console.log(find);
      taskArr.splice(find, 1);
      renderHTML(taskArr);
    });
  });
}

function checkEvent() {
  document.querySelectorAll('.check_btn').forEach((a, i) => {
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
      resultHTML += `<li class="todo_li">
    <span class="todo_li_txt checked">${a.inputValue}</span>
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
  document.querySelector('.todo_ul').innerHTML = resultHTML;
  checkEvent();
  deleteEvent();
}
