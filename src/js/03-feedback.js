// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
//  в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы.
// В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.
import throttle from 'lodash.throttle';

function getRefs() {
  return {
    formEl: document.querySelector('.feedback-form'),
    inputEl: document.querySelector(".feedback-form input[name='email']"),
    messageEl: document.querySelector(
      ".feedback-form textarea[name='message']"
    ),
  };
}
const refs = getRefs();
let form = {};
function createForm() {
  form.email = '';
  form.message = '';
}
function testLocalStorage() {
  if (!localStorage.getItem('feedback-form-state')) {
    createForm();
    localStorage.setItem('feedback-form-state', JSON.stringify(form));
  }
  form = JSON.parse(localStorage.getItem('feedback-form-state'));
  refs.inputEl.value = form.email;
  refs.messageEl.value = form.message;
}
testLocalStorage();

refs.formEl.addEventListener('input', throttle(onInputForm, 500));
refs.formEl.addEventListener('submit', onSubmitForm);
function onInputForm(e) {
  form[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(form));
}
function onSubmitForm(e) {
  e.preventDefault();
  if (form.email === '' || form.message === '') {
    alert('Fill in all the fields');
    return;
  }
  e.currentTarget.reset();
  createForm();
  localStorage.setItem('feedback-form-state', JSON.stringify(form));
}
