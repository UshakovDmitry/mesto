const closeIcon = document.querySelector('.popup__close-icon');
const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__user-name');
const profileInfo = document.querySelector('.profile__user-info');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.form__input[name="name"]');
const infoInput = document.querySelector('.form__input[name="info"]');

function popupClose() {
  popup.classList.remove('popup_opened');
}
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = infoInput.value;
    popupClose();
}

editButton.addEventListener('click', function() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  infoInput.value = profileInfo.textContent;
});

formElement.addEventListener('submit', formSubmitHandler);
closeIcon.addEventListener('click', popupClose);
