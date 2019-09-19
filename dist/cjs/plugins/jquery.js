"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const to_html_1 = require("../functions/to-html");
const obfuscate_1 = require("../functions/obfuscate");
function initJQuery($) {
    $.fn.minecraftText = function () {
        this.toHTML = function (text) {
            this.html(to_html_1.toHTML(text));
        };
        this.refeashObfuscate = function () {
            obfuscate_1.refeashObfuscate(this[0]);
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
}
catch (err) { }
if (jQuery) {
    initJQuery(jQuery);
}
//# sourceMappingURL=jquery.js.map