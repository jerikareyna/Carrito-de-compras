document.addEventListener('DOMContentLoaded', (event) => {
    const minusButton = document.querySelector('.quantity__minus');
    const plusButton = document.querySelector('.quantity__plus');
    const inputField = document.querySelector('.quantity__input');
  
    minusButton.addEventListener('click', () => {
      let currentValue = Number(inputField.value);
      if (currentValue > 0) {
        inputField.value = currentValue - 1;
      }
    });
  
    plusButton.addEventListener('click', () => {
      let currentValue = Number(inputField.value);
      inputField.value = currentValue + 1;
    });
  });