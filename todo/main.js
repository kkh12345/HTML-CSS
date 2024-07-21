let inputValue;
let taskArr = [];
let checkedArr = [];

document
  .querySelector('.register_input')
  .addEventListener('input', function () {
    inputValue = this.value;
  });
document.querySelector('.register_btn').addEventListener('click', function () {
  if (inputValue != '') {
    let id = Math.random();
    id = id.toFixed(3);
    taskArr.push({ inputValue: inputValue, id: id });
    let template = `<li class="todo_li  ">
            <span class="todo_li_txt">${inputValue}</span>
            <span class="todo_li_btnWrap">
              <button class="check_btn" data-id=${id}>✓</button>
              <button class="delete_btn" data-id=${id}>x</button>
            </span>
          </li>`;

    document
      .querySelector('.todo_ul')
      .insertAdjacentHTML('beforeend', template);
    //삭제
    document.querySelectorAll('.delete_btn').forEach((a, i) => {
      a.addEventListener('click', function () {
        if (a.dataset.id == id) {
          let find = taskArr.findIndex((b) => {
            return b.id == id;
          });
          taskArr.splice(find, 1);
          a.parentElement.parentElement.remove();
          console.log(taskArr);
        }
      });
    });
    //체크
    document.querySelectorAll('.check_btn').forEach((a, i) => {
      a.addEventListener('click', function () {
        if (a.dataset.id == id) {
          let find = taskArr.findIndex((b) => {
            return b.id == id;
          });
          checkedArr.push(taskArr[find]);
          a.parentElement.previousElementSibling.style.textDecoration =
            'line-through';
        }
      });
    });
  }
});
