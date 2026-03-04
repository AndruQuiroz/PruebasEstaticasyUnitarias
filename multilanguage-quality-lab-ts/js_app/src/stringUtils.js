/* global module */
/**
 * Devuelve true si s es palíndromo (ignora espacios y mayúsculas/minúsculas).
 */
function isPalindrome(s) {
  // Se eliminó 'var original = s;' porque es una variable sin uso (mala práctica).
  const cleaned = s.toLowerCase().replace(/\s+/g, '');
  
  // Se cambió '==' por '===' para usar igualdad estricta.
  if (cleaned === cleaned.split('').reverse().join('')) { 
    return true;
  } else {
    return false;
  }
  // Se eliminó el console.log('Inalcanzable') porque el código nunca llega aquí.
}

module.exports = { isPalindrome };