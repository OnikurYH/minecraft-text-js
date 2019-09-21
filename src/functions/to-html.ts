import { COLOR_CODES, STYLE_CODES } from '../constants';
import { stringToHtmlEntities } from '../utils';

export function toHTML (text: string) {
  let output = '';

  let lastColorLevel = 0;
  let lastStyleLevel = 0;

  let obfuscating = false;

  function cleanStyles () {
    for (let i = 0; i < lastColorLevel + lastStyleLevel; i++) {
      output += '</span>';
    }
    lastColorLevel = lastStyleLevel = 0;
  }

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const nextCode = text[i + 1];

    if (char === '\\' && nextCode === 'n') {
      cleanStyles();
      output += '<br>';
      i += 1;
      continue;
    }

    if (char === ' ') {
      output += '&nbsp;';
      continue;
    }

    if (char === '&' || char === '\u00A7') {
      let lastStyle = COLOR_CODES[nextCode];
      // Is color?
      if (lastStyle != null) {
        if (lastColorLevel > 0 || lastStyleLevel > 0) {
          cleanStyles();
        }

        if (obfuscating) {
          output += '</span>';
          obfuscating = false;
        }

        output += `<span style="color: ${lastStyle.inline};">`;
        lastColorLevel++;
        i++;
        continue;
      }

      lastStyle = STYLE_CODES[nextCode];
      // Is style?
      if (lastStyle != null) {
        if (obfuscating)
          output += '</span>';

        output += `<span style="${lastStyle.inline};">`;
        lastStyleLevel++;
        i++;

        if (obfuscating)
          output += '<span class="kurcraft-obfuscate">';
        continue;
      }

      // Is obfuscate?
      if (nextCode === 'k') {
        obfuscating = true;
        output += '<span class="kurcraft-obfuscate">';
        i++;
        continue;
      }

      // Is reset?
      if (nextCode === 'r') {
        cleanStyles();
        i++;
        continue;
      }
    }

    output += stringToHtmlEntities(char);
  }

  cleanStyles();
  return output;
}
