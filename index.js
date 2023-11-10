document.addEventListener('DOMContentLoaded', (event) => {
  const minusButtons = document.querySelectorAll('.quantity__minus');
  const plusButtons = document.querySelectorAll('.quantity__plus');

  minusButtons.forEach((minusButton) => {
      minusButton.addEventListener('click', () => {
          const inputField = minusButton.parentElement.querySelector('.quantity__input');
          let currentValue = Number(inputField.value);
          if (currentValue > 0) {
              inputField.value = currentValue - 1;
          }
      });
  });

  plusButtons.forEach((plusButton) => {
      plusButton.addEventListener('click', () => {
          const inputField = plusButton.parentElement.querySelector('.quantity__input');
          let currentValue = Number(inputField.value);
          inputField.value = currentValue + 1;
      });
  });
});
