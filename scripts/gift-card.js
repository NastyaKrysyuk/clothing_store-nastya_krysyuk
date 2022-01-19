// определяем саму форму и поле ввода email и элемент span, 
// в который поместим сообщение об ошибке
const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {
  //Проверка на валидность при вводе в инпут

  if (email.validity.valid) {
    // Если на момент валидации какое-то сообщение об ошибке уже отображается,
    // если поле валидно, удаляем сообщение
    emailError.textContent = ''; // Сбросить содержимое сообщения
    emailError.className = 'error'; // Сбросить визуальное состояние сообщения
  } else {
    // Если поле не валидно, показываем правильную ошибку
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // Если поле email валдно, позволяем форме отправляться
  if (!email.validity.valid) {
    // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
    showError();
    // Затем предотвращаем стандартное событие отправки формы
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // Если поле пустое
    emailError.textContent = 'Адрес получателя не может быть пустым';
  } else if (email.validity.typeMismatch) {
    // Если поле содержит не email-адрес
    emailError.textContent = 'Неверный e-mail адрес';
  } else if (email.validity.tooShort) {
    // Если содержимое слишком короткое
    emailError.textContent = `Электронная почта должна содержать не менее  ${email.minLength} символов; вы ввели ${email.value.length}.`;
  }
  // Задаём соответствующую стилизацию
  emailError.className = 'error active-error';
}

function Checked(Element) {
  if (Element.innerHTML == '') Element.innerHTML = '&#10004';
  else Element.innerHTML = '';
  return false;
}