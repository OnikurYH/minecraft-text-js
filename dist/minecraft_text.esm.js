var COLOR_CODES = {
  0: {
    inline: '#000000',
    className: ''
  },
  1: {
    inline: '#0000AA',
    className: ''
  },
  2: {
    inline: '#00AA00',
    className: ''
  },
  3: {
    inline: '#00AAAA',
    className: ''
  },
  4: {
    inline: '#AA0000',
    className: ''
  },
  5: {
    inline: '#AA00AA',
    className: ''
  },
  6: {
    inline: '#FFAA00',
    className: ''
  },
  7: {
    inline: '#AAAAAA',
    className: ''
  },
  8: {
    inline: '#555555',
    className: ''
  },
  9: {
    inline: '#5555FF',
    className: ''
  },
  a: {
    inline: '#55FF55',
    className: ''
  },
  b: {
    inline: '#55FFFF',
    className: ''
  },
  c: {
    inline: '#FF5555',
    className: ''
  },
  d: {
    inline: '#FF55FF',
    className: ''
  },
  e: {
    inline: '#FFFF55',
    className: ''
  },
  f: {
    inline: '#FFFFFF',
    className: ''
  }
};
var STYLE_CODES = {
  l: {
    inline: 'font-weight: bold',
    className: ''
  },
  m: {
    inline: 'text-decoration: line-through',
    className: ''
  },
  n: {
    inline: 'text-decoration: underline',
    className: ''
  },
  o: {
    inline: 'font-style: italic',
    className: ''
  }
};

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function stringToHtmlEntities(str) {
  return str.replace(/[\u00A0-\u9999<>\&]/gim, function (c) {
    return "&#".concat(c.charCodeAt(0), ";");
  });
}

function toHTML(text) {
  var output = '';
  var lastColorLevel = 0;
  var lastStyleLevel = 0;
  var obfuscating = false;

  function cleanStyles() {
    for (var i = 0; i < lastColorLevel + lastStyleLevel; i++) {
      output += '</span>';
    }

    lastColorLevel = lastStyleLevel = 0;
  }

  for (var i = 0; i < text.length; i += 1) {
    var _char = text[i];
    var nextCode = text[i + 1];

    if (_char === '\\' && nextCode === 'n') {
      cleanStyles();
      output += '<br>';
      i += 1;
      continue;
    }

    if (_char === ' ') {
      output += '&nbsp;';
      continue;
    }

    if (_char === '&' || _char === "\xA7") {
      var lastStyle = COLOR_CODES[nextCode]; // Is color?

      if (lastStyle != null) {
        if (lastColorLevel > 0 || lastStyleLevel > 0) {
          cleanStyles();
        }

        if (obfuscating) {
          output += '</span>';
          obfuscating = false;
        }

        output += "<span style=\"color: ".concat(lastStyle.inline, ";\">");
        lastColorLevel++;
        i++;
        continue;
      }

      lastStyle = STYLE_CODES[nextCode]; // Is style?

      if (lastStyle != null) {
        if (obfuscating) output += '</span>';
        output += "<span style=\"".concat(lastStyle.inline, ";\">");
        lastStyleLevel++;
        i++;
        if (obfuscating) output += '<span class="kurcraft-obfuscate">';
        continue;
      } // Is obfuscate?


      if (nextCode === 'k') {
        obfuscating = true;
        output += '<span class="kurcraft-obfuscate">';
        i++;
        continue;
      } // Is reset?


      if (nextCode === 'r') {
        cleanStyles();
        i++;
        continue;
      }
    }

    output += stringToHtmlEntities(_char);
  }

  cleanStyles();
  return output;
}

var obfuscates = [];
var obfuscateAnimationReqeastId = -1;
function obfuscateUpdate() {
  if (obfuscates == null || obfuscates.length === 0) return;
  obfuscateAnimationReqeastId = window.requestAnimationFrame(obfuscateUpdate);

  for (var i in obfuscates) {
    var obfuscateElement = obfuscates[i];
    var randStr = '';
    var elementStr = obfuscateElement.innerHTML.replace(/&(?:.|\n)*?;/gm, ' ');

    for (var j = 0; j < elementStr.length; j++) {
      randStr += String.fromCharCode(randomRange(64, 95));
    }

    obfuscateElement.innerHTML = randStr;
  }
}
function refeashObfuscate(rootElement) {
  if (typeof window === 'undefined') {
    return console.warn('[MinecraftTextJS] refeashObfuscate(rootElement?) only support on browser');
  }

  window.cancelAnimationFrame(obfuscateAnimationReqeastId);
  obfuscates.length = 0;
  var fromElement = rootElement || document;
  obfuscates = Array.prototype.slice.call(fromElement.getElementsByClassName('kurcraft-obfuscate'));
  obfuscateUpdate();
}

function initJQuery($) {
  $.fn.minecraftText = function () {
    this.toHTML = function (text) {
      this.html(toHTML(text));
    };

    this.refeashObfuscate = function () {
      refeashObfuscate(this[0]);
    };

    return this;
  };
}

var jQuery = null;

try {
  if (typeof self !== 'undefined') {
    jQuery = self.jQuery;
  }

  if (typeof require !== 'undefined') {
    jQuery = require('jquery');
  }
} catch (err) {}

if (jQuery) {
  initJQuery(jQuery);
}

var index = {
  toHTML: toHTML,
  refeashObfuscate: refeashObfuscate
};

export default index;
//# sourceMappingURL=minecraft_text.esm.js.map
