import keyTable from './keyTable.js';
import Key from './key.js';

export default class Keyboard {
  static language = 'ru';

  static capslock = false;

  static shift = false;

  static alt = false;

  static generate(language) {
    Keyboard.language = language;

    const keyboardContainer = document.createElement('div');
    keyboardContainer.classList.add('keyboard');
    document.body.append(keyboardContainer);

    for (let i = 0; i < keyTable.length; i += 1) {
      const key = new Key(
        Keyboard.language,
        keyTable[i].key,
        keyTable[i].shift,
        keyTable[i].code,
        keyTable[i].specialKey,
        keyTable[i].width,
      );
      const newKey = key.createKey();
      keyboardContainer.append(newKey);
    }
  }

  static update() {
    const keys = document.querySelectorAll('.key');
    for (let i = 0; i < keys.length; i += 1) {
      const attributes = keys[i].getAttribute('class');
      const isSpecialKey = attributes.includes('special-key');
      if (!isSpecialKey) {
        if (Keyboard.language === 'en') { // en
          if (Keyboard.shift) {
            if (keys[i].dataset.shiftEn) {
              keys[i].innerHTML = keys[i].dataset.shiftEn;
            }
          } else if (keys[i].dataset.en) keys[i].innerHTML = keys[i].dataset.en;
        } else // ru
        if (Keyboard.shift) {
          if (keys[i].dataset.shiftRu) {
            keys[i].innerHTML = keys[i].dataset.shiftRu;
          }
        } else if (keys[i].dataset.ru) keys[i].innerHTML = keys[i].dataset.ru;
        if (Keyboard.capslock && keys[i].dataset.shiftEn) {
          if (Keyboard.shift) keys[i].innerHTML = keys[i].innerHTML.toLowerCase();
          else keys[i].innerHTML = keys[i].innerHTML.toUpperCase();
        }
      }
    }
  }

  static switchLanguage() {
    if (Keyboard.language === 'en') Keyboard.language = 'ru';
    else Keyboard.language = 'en';
    localStorage.setItem('language', Keyboard.language);
  }
}
