// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.



// Selecciono el botón por su id
const button = document.getElementById('btnToClick');
// Añado el evento click al botón
button.addEventListener('click', (event) => {
  // Muestro por consola la información del evento
  console.log(event);
});


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
// Selecciono el input con la clase focus
const inputFocus = document.querySelector('.focus');

// Añado el evento al input
inputFocus.addEventListener('focus', () => {
  // Muestro el valor actual del input en la consola
  console.log(inputFocus.value);
});


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input

// Selecciono el input con la clase value
const inputValue = document.querySelector('.value');

// Añado el evento input al input

inputValue.addEventListener('input', () => {
  // Muestro el valor actual del input en la consola
  console.log(inputValue.value);
});
