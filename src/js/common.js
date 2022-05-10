export default class Common {
  static createTitle() {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerHTML = 'Virtual keyboard';
    document.body.append(title);
  }

  static createTextArea() {
    const textArea = document.createElement('textarea');
    document.body.append(textArea);
    return textArea;
  }

  static createFooter() {
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
  }
}
