// Elimina el elemento que tenga la clase .fn-remove-me.

// Selecciono el elemento con la clase ".fn-remove-me"
const elementToRemove = document.querySelector('.fn-remove-me');

// Si el elemento existe, lo elimino del DOM
if (elementToRemove) {
  elementToRemove.remove();
}