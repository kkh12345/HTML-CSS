let inputValue = '';
let taskArr = [];

//할일을적으면
//inputValue에 넣고
//등록버튼누르면
//HTML등록,taskArr에 데이터등록

document
  .querySelector('.register_input')
  .addEventListener('input', function () {
    inputValue = this.value;
  });

document.querySelector('.register_btn').addEventListener('click', function () {
  let id = Math.random();
  id = id.toFixed(3);
  taskArr.push({ id: id, inputValue: inputValue });
  console.log(taskArr);
  let template = `<li class="todo_li" data-id=${id}>
            <span class="todo_li_txt">${inputValue}</span>
            <span class="todo_li_btnWrap">
              <button class="check_btn"data-id=${id}>✓</button>
              <button class="delete_btn"data-id=${id}>x</button>
            </span>
          </li>`;
  document.querySelector('.todo_ul').insertAdjacentHTML('beforeend', template);
  //삭제
  taskArr.forEach((a, i) => {
    document
      .querySelectorAll('.delete_btn')
      [i].addEventListener('click', function () {
        let find = taskArr.findIndex((b) => {
          return b.id == this.dataset.id;
        });
        taskArr.splice(find, 1);
        this.parentElement.parentElement.remove();
        console.log(taskArr);
      });
  });
});
