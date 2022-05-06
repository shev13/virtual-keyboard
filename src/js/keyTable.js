const keyTable = [
  [ // row 1
    { key: { en: '`', ru: 'ё' }, shift: { en: '~', ru: 'Ё' }, code: 'Backquote' },
    { key: { en: '1', ru: '1' }, shift: { en: '!', ru: '!' }, code: 'Digit1' },
    { key: { en: '2', ru: '2' }, shift: { en: '@', ru: '"' }, code: 'Digit2' },
    { key: { en: '3', ru: '3' }, shift: { en: '#', ru: '№' }, code: 'Digit3' },
    { key: { en: '4', ru: '4' }, shift: { en: '$', ru: ';' }, code: 'Digit4' },
    { key: { en: '5', ru: '5' }, shift: { en: '%', ru: '%' }, code: 'Digit5' },
    { key: { en: '6', ru: '6' }, shift: { en: '^', ru: ':' }, code: 'Digit6' },
    { key: { en: '7', ru: '7' }, shift: { en: '&', ru: '?' }, code: 'Digit7' },
    { key: { en: '8', ru: '8' }, shift: { en: '*', ru: '*' }, code: 'Digit8' },
    { key: { en: '9', ru: '9' }, shift: { en: '(', ru: '(' }, code: 'Digit9' },
    { key: { en: '0', ru: '0' }, shift: { en: ')', ru: ')' }, code: 'Digit0' },
    { key: { en: '-', ru: '-' }, shift: { en: '_', ru: '_' }, code: 'Minus' },
    { key: { en: '=', ru: '=' }, shift: { en: '+', ru: '+' }, code: 'Equal' },
    {
      key: 'Backspace', code: 'Backspace', specialKey: true, width: 'long',
    },
  ],
  [ // row 2
    {
      key: 'Tab', code: 'Tab', specialKey: true, width: 'medium',
    },
    { key: { en: 'q', ru: 'й' }, shift: { en: 'Q', ru: 'Й' }, code: 'KeyQ' },
    { key: { en: 'w', ru: 'ц' }, shift: { en: 'W', ru: 'Ц' }, code: 'KeyW' },
    { key: { en: 'e', ru: 'у' }, shift: { en: 'E', ru: 'У' }, code: 'KeyE' },
    { key: { en: 'r', ru: 'к' }, shift: { en: 'R', ru: 'К' }, code: 'KeyR' },
    { key: { en: 't', ru: 'е' }, shift: { en: 'T', ru: 'Е' }, code: 'KeyT' },
    { key: { en: 'y', ru: 'н' }, shift: { en: 'Y', ru: 'Н' }, code: 'KeyY' },
    { key: { en: 'u', ru: 'г' }, shift: { en: 'U', ru: 'Г' }, code: 'KeyU' },
    { key: { en: 'i', ru: 'ш' }, shift: { en: 'I', ru: 'Ш' }, code: 'KeyI' },
    { key: { en: 'o', ru: 'щ' }, shift: { en: 'O', ru: 'Щ' }, code: 'KeyO' },
    { key: { en: 'p', ru: 'з' }, shift: { en: 'P', ru: 'З' }, code: 'KeyP' },
    { key: { en: '[', ru: 'х' }, shift: { en: '{', ru: 'Х' }, code: 'BracketLeft' },
    { key: { en: ']', ru: 'ъ' }, shift: { en: '}', ru: 'Ъ' }, code: 'BracketRight' },
    {
      key: { ru: '\\', en: '\\' }, shift: { ru: '|', en: '|' }, code: 'Backslash', class: 'key_backslash',
    },
    { key: 'Del', code: 'Delete', specialKey: true },
  ],

];

export default keyTable;
