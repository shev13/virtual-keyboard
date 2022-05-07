import keyTable from './keyTable.js';

// console.log('Virtual keyboard');

class Key {
  language = 'en';

  constructor(key, shift, code, isSpecialKey, width) {
    this.key = key;
    this.shift = shift;
    this.code = code;
    this.isSpecialKey = isSpecialKey;
    this.width = width;
  }

  switchLanguage() {
    if (this.language === 'en') this.language = 'ru';
    else this.language = 'en';
  }

  createKey() {
    const node = document.createElement('div');
    node.classList.add(this.code);
    node.classList.add('key');
    if (this.key.en) {
      if (this.language === 'en') {
        node.innerHTML = this.key.en;
      } else {
        node.innerHTML = this.key.ru;
      }
    } else {
      node.innerHTML = this.key;
    }
    if (this.isSpecialKey) {
      node.classList.add('special-key');
    }
    switch (this.width) {
      case 'medium':
        node.classList.add('medium-key');
        break;
      case 'long':
        node.classList.add('long-key');
        break;
      case 'long1':
        node.classList.add('long1-key');
        break;
      case 'long2':
        node.classList.add('long2-key');
        break;
      case 'long3':
        node.classList.add('long3-key');
        break;

      default:
        break;
    }
    return node;
  }
}

const title = document.createElement('h1');
title.classList.add('title');
title.innerHTML = 'Virtual keyboard';
document.body.append(title);

const textArea = document.createElement('textarea');
document.body.append(textArea);

const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard');
document.body.append(keyboardContainer);

// console.log(keyboardContainer);

for (let i = 0; i < keyTable.length; i += 1) {
  // console.log(keyDataRow[i]);

  const key = new Key(
    keyTable[i].key,
    keyTable[i].shift,
    keyTable[i].code,
    keyTable[i].specialKey,
    keyTable[i].width
  );
  const newKey = key.createKey();
  keyboardContainer.append(newKey);
}

const footer = document.createElement('div');
footer.classList.add('footer');
document.body.append(footer);

const description1 = document.createElement('div');
description1.innerHTML = 'Клавиатура создана в операционной системе Windows';
footer.classList.add('description');
footer.append(description1);

const description2 = document.createElement('div');
description2.innerHTML = 'Для переключения языка комбинация: левыe alt + shift';
footer.classList.add('description');
footer.append(description2);
