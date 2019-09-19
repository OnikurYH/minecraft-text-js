import { toHTML } from '../functions/to-html';
import { refeashObfuscate } from '../functions/obfuscate';

function initJQuery ($: JQueryStatic) {
  $.fn.minecraftText = function () {
    this.toHTML = function (text: string) {
      this.html(toHTML(text));
    };

    this.refeashObfuscate = function () {
      refeashObfuscate(this[0]);
    };

    return this;
  };
}

let jQuery = null;
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
