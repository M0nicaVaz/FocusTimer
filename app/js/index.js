import { soundCards } from './objects.js';

function getSelectedCard(card, element) {
  let selectedCard = soundCards[card];
  selectedCard.displayElement = element;

  return selectedCard;
}

function activateCard() {
  let cardDiv = this.displayElement;
  this.isActive = this.isActive === false ? true : false;

  if (this.isActive === true) {
    cardDiv.classList.add('card-active');
    this.sound.play();
  } else {
    cardDiv.classList.remove('card-active');
    this.sound.pause();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  (function selectCard() {
    const cardBtns = document.querySelectorAll('.card-btn');

    for (let cardBtn of cardBtns) {
      cardBtn.addEventListener('click', () => {
        let divCard = cardBtn.parentElement;
        let card = Number(divCard.id);

        let selectedCard = getSelectedCard(card, divCard);

        selectedCard.activate();
      });
    }
  })();

  (function updateTheme() {
    let themeBtns = document.querySelectorAll('.theme-btn');

    for (let themeBtn of themeBtns) {
      themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        themeBtns[0].classList.toggle('hide');
        themeBtns[1].classList.toggle('hide');
      });
    }
  })();
});

export { activateCard };

// SONG IS NOT PAUSING
