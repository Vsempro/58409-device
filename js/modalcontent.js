var contactsButton = document.querySelector(".button__contacts"),
    modalContentForm = document.querySelector(".modalcontent"),
    modalContentButton = modalContentForm.querySelector(".modalcontent__button"),

    modalUserForm = modalContentForm.querySelector(".userform"),
    userName = modalContentForm.querySelector(".userform__user"),
    userEmail = modalContentForm.querySelector(".userform__email"),
    userText = modalContentForm.querySelector(".userform__text"),

    nameStorage = localStorage.getItem('userName'),
    emailStorage = localStorage.getItem('userEmail');

contactsButton.addEventListener('click', function(event) {
  event.preventDefault();
  modalContentForm.classList.add('modalcontent_show');

  if (nameStorage && emailStorage) {
    userName.value = nameStorage;
    userEmail.value = emailStorage;
    userText.focus();
  } else {
    userName.focus();
  }
});

modalContentButton.addEventListener('click', function(event) {
  event.preventDefault();
  modalContentForm.classList.remove('modalcontent_show');
  modalContentForm.classList.remove('modalcontent_error');
});

modalUserForm.addEventListener('submit', function(event) {
  if (!userName.value || !userEmail.value) {
    event.preventDefault();
    modalContentForm.classList.remove('modalcontent_error');
    modalContentForm.offsetWidth = modalContentForm.offsetWidth;
    modalContentForm.classList.add('modalcontent_error');
    console.log('Нужно ввести имя и e-mail');
  } else {
    localStorage.setItem('userName', userName.value);
    localStorage.setItem('userEmail', userEmail.value)
  }
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (modalContentForm.classList.contains('modalcontent_show')) {
      modalContentForm.classList.remove('modalcontent_show');
      modalContentForm.classList.remove('modalcontent_error');
    }
  }
});
