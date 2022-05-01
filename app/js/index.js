(function darkMode() {
  let themeBtn = document.querySelectorAll('.theme-btn');

  for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      themeBtn[0].classList.toggle('hide');
      themeBtn[1].classList.toggle('hide');
    });
  }
})();
