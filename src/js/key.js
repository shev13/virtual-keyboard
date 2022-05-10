export default class Key {
  static lang;

  constructor(lang, key, shift, code, isSpecialKey, width) {
    this.lang = lang;
    this.code = code;
    if (key.en) {
      this.en = key.en;
      this.shiftEn = shift.en;
      this.ru = key.ru;
      this.shiftRu = shift.ru;
    } else this.key = key;

    if (isSpecialKey) this.isSpecialKey = isSpecialKey;
    if (width) this.width = width;
  }

  createKey() {
    const node = document.createElement('div');
    node.classList.add('key');
    node.dataset.code = this.code;

    if (this.en) {
      node.dataset.en = this.en;
      node.dataset.shiftEn = this.shiftEn;
      node.dataset.ru = this.ru;
      node.dataset.shiftRu = this.shiftRu;
    }

    if (this.en) {
      if (Key.lang === 'en') {
        node.innerHTML = this.en;
      } else {
        node.innerHTML = this.ru;
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
