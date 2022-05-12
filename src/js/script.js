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
      keyPress.classList.toggle('active-key');
      if (Keyboard.capslock) { Keyboard.capslock = false; } else { Keyboard.capslock = true; }
      Keyboard.update();
      return;
    }
    if (event.key === 'Shift') {
      keyPress.classList.toggle('active-key');
      if (Keyboard.shift) { Keyboard.shift = false; } else { Keyboard.shift = true; }
      if (Keyboard.alt && Keyboard.shift) { Keyboard.switchLanguage(); }
      Keyboard.update();
      return;
    }
    if (event.key === 'Alt') {
      Keyboard.alt = true;
      if (Keyboard.shift) { Keyboard.switchLanguage(); }
      Keyboard.update();
    }

    keyPress.classList.add('active-key');
    textArea.focus();
    if (isSpecialKey) {
      if (event.key === 'Backspace') { text = text.slice(0, -1); }
      if (event.key === 'Enter') { text += '\n'; }
      if (event.key === 'Tab') { text += '    '; }
      if ((event.key === 'ArrowUp')
       || (event.key === 'ArrowDown')
       || (event.key === 'ArrowLeft')
       || (event.key === 'ArrowRight')) { text += keyPress.textContent; }
      textArea.value = text;
    } else {
      text += keyPress.textContent;
      textArea.value = text;
    }
  }
});

document.addEventListener('keyup', (event) => {
  const keyPress = document.querySelector(`[data-code=${event.code}]`);
  if ((event.key === 'CapsLock') || (event.key === 'Shift')) {
    return;
  }
  const shiftKey = document.querySelector('[data-code="ShiftLeft"]');
  if (shiftKey) {
    Keyboard.shift = false;
    shiftKey.classList.remove('active-key');
  }
  if (keyPress) {
    keyPress.classList.remove('active-key');
    Keyboard.update();
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
