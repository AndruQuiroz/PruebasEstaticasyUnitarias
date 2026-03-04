
// TODO: Escribe pruebas unitarias para isPalindrome.
// Sugerencias: "radar" -> true; "anita lava la tina" -> true; "python" -> false; "" -> true; "Radar" -> true

const { isPalindrome } = require('../src/stringUtils');

test('test_palindromo_palabra_simple', () => {
  expect(isPalindrome("radar")).toBe(true);
});

test('test_palindromo_con_espacios', () => {
  expect(isPalindrome("anita lava la tina")).toBe(true);
});

test('test_palindromo_falso', () => {
  expect(isPalindrome("python")).toBe(false); // Equivalente a 'assert not'
});

test('test_palindromo_cadena_vacia', () => {
  expect(isPalindrome("")).toBe(true);
});

test('test_palindromo_con_mayusculas', () => {
  expect(isPalindrome("Radar")).toBe(true);
});
