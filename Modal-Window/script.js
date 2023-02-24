'use strict';

const modal = document.querySelector('.modal');

const overLay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

/*
Note that : 
I'm don't call the function i call it when the click action is happens,
so that i write it without parentheses .
*/

for (let i = 0; i < btnOpenModal.length; i++) {
  // Show text when click to open
  btnOpenModal[i].addEventListener('click', openModal);
}

// close text when click to close
btnCloseModal.addEventListener('click', closeModal);

// Close the popup if user clicked outside the overlay
overLay.addEventListener('click', closeModal);

// closing the popup when the user click on esc
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
