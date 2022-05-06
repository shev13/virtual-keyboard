import keyTable from './keyTable.js';

console.log('Virtual keyboard');

class Key {
  language = 'en';
  //   code;
  //   value;
  //   shift;

  constructor(key, shift, code, isSpecialKey, width) {
    this.key = key;
    this.shift = shift;
    this.code = code;
    this.isSpecialKey = isSpecialKey;
    this.width = width;
  }

  switchLanguage() {
    if (this.language === 'en') this.language = 'ru'; else this.language = 'en';
  }

  createKey() {
    const node = document.createElement('div');
    node.classList.add(this.code);
    node.classList.add('key');
    if (this.key.en) {
      if (this.language === 'en') { node.innerHTML = this.key.en; } else { node.innerHTML = this.key.ru; }
    } else { node.innerHTML = this.key; }
    if (this.isSpecialKey) { node.classList.add('special-key'); }
    switch (this.width) {
      case 'medium':
        node.classList.add('medium-key');
        break;
      case 'long':
        node.classList.add('long-key');
        break;

      default:
        break;
    }
    return node;
  }
}

const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard');
document.body.append(keyboardContainer);

console.log(keyboardContainer);

let keyDataRow = keyTable[0];
for (let i = 0; i < keyDataRow.length; i += 1) {
  console.log(keyDataRow[i]);

  const key = new Key(
    keyDataRow[i].key,
    keyDataRow[i].shift,
    keyDataRow[i].code,
    keyDataRow[i].specialKey,
    keyDataRow[i].width,
  );
  const newKey = key.createKey();
  keyboardContainer.append(newKey);
}

keyDataRow = keyTable[1];
for (let i = 0; i < keyDataRow.length; i += 1) {
  console.log(keyDataRow[i]);

  const key = new Key(
    keyDataRow[i].key,
    keyDataRow[i].shift,
    keyDataRow[i].code,
    keyDataRow[i].specialKey,
    keyDataRow[i].width,
  );
  const newKey = key.createKey();
  keyboardContainer.append(newKey);
}
