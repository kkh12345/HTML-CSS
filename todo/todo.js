let inputValue = '';

document.querySelector('.todo_register-btn').addEventListener('input', () => {
  console.log(1);
  let template = `<li class="todo_li">
              <div class="todo_li-txt">${inputValue}</div>
              <div class="todo_li-btnGroup">
                <button class="todo_modify-btn">수정</button>
                <button class="todo_delete-btn">삭제</button>
              </div>
            </li>`;
  if (inputValue != '') {
    console.log(1);
    document
      .querySelector('.todo_ul')
      .insertAdjacentHTML('beforeend', template);
  }
});
document
  .querySelector('.todo_input-wrap>input')
  .addEventListener('change', (e) => {
    inputValue = e.target.value;
  });
