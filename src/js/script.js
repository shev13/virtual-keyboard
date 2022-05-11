import Keyboard from './keyboard.js';
import Common from './common.js';

let localStorageLanguage;
if (localStorage.getItem('language')) { localStorageLanguage = localStorage.getItem('language'); }

Common.createTitle();
const textArea = Common.createTextArea();
Keyboard.generate(localStorageLanguage);
Common.createFooter();

// pressing a key on a physical keyboard highlights the key on the virtual keyboard
let text = '';
document.addEventListener('keydown', (event) => {
  const keyPress = document.querySelector(`[data-code=${event.code}]`);

  if (keyPress) {
    const attributes = keyPress.getAttribute('class');
    const isSpecialKey = attributes.includes('special-key');

    event.preventDefault();
    if (event.key === 'CapsLock') {
      if (Keyboard.capslock) {
        Keyboard.capslock = false;
        keyPress.classList.remove('active-key');
      } else {
        Keyboard.capslock = true;
        keyPress.classList.add('active-key');
      }
      Keyboard.update();
      return;
    }
    if (event.key === 'Shift') {
      Keyboard.shift = true;
      Keyboard.update();
    }
    if (event.key === 'Alt') {
      Keyboard.alt = true;
    }
    if (Keyboard.alt && Keyboard.shift) {
      Keyboard.switchLanguage();
      Keyboard.update();
    }

    keyPress.classList.add('active-key');
    textArea.focus();
    if (isSpecialKey === false) {
      text += keyPress.textContent;
      textArea.value = text;
    }
  }
});

document.addEventListener('keyup', (event) => {
  const keyPress = document.querySelector(`[data-code=${event.code}]`);
  if (event.key === 'CapsLock') {
    return;
  }
  if (keyPress) {
    keyPress.classList.remove('active-key');
  }
  if (event.key === 'Shift') {
    Keyboard.shift = false;
  }
  if (event.key === 'Alt') {
    Keyboard.alt = false;
  }
});

// mouse clicks
document.querySelector('.keyboard').addEventListener('click', (event) => {
  if (event.target.closest('.key')) {
    const keyPress = event.target.closest('.key');
    const attributes = keyPress.getAttribute('class');
    const isSpecialKey = attributes.includes('special-key');

    textArea.focus();
    if (isSpecialKey === false) {
      text += keyPress.textContent;
      textArea.value = text;
    }
  }
});
