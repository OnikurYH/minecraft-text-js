/*!
 * minecraft-text.js
 * Turn your minecraft text to other format! =D
 * @author OnikurYH <onikuryh@gmail.com>
 * @license MIT
 */
(function () {
  "use strict";

  const COLOR_CODES = {
    "0": "#000000",
    "1": "#0000AA",
    "2": "#00AA00",
    "3": "#00AAAA",
    "4": "#AA0000",
    "5": "#AA00AA",
    "6": "#FFAA00",
    "7": "#AAAAAA",
    "8": "#555555",
    "9": "#5555FF",
    "a": "#55FF55",
    "b": "#55FFFF",
    "c": "#FF5555",
    "d": "#FF55FF",
    "e": "#FFFF55",
    "f": "#FFFFFF"
  };

  const STYLE_CODES = {
    "l": "font-weight: bold;",
    "m": "text-decoration: line-through;",
    "n": "text-decoration: underline;",
    "o": "font-style: italic;"
  };

  var obfuscates = [];
  var obfuscateAnimationReqeastId = -1;

  function toHTML (text) {
    var output = "";

    var lastColorLevel = 0;
    var lastStyleLevel = 0;

    var obfuscating = false;

    function cleanStyles () {
      for (let i = 0; i < lastColorLevel + lastStyleLevel; i++) {
        output += "</span>";
      }
      lastColorLevel = lastStyleLevel = 0;
    }

    for (var i = 0; i < text.length; i++) {
      var char = text[i];

      if (char === "&" || char === "\u00A7") {
        var nextCode = text[i + 1];

        var lastStyle = COLOR_CODES[nextCode];
        // Is color? --------------------------------------------------------/
        if (lastStyle != null) {
          if (lastColorLevel > 0 || lastStyleLevel > 0)
            cleanStyles();

          if (obfuscating) {
            output += "</span>";
            obfuscating = false;
          }

          output += "<span style=\"color: " + lastStyle + ";\">";
          lastColorLevel++;
          i++;
          continue;
        }

        lastStyle = STYLE_CODES[nextCode];
        // Is style? --------------------------------------------------------/
        if (lastStyle != null) {
          if (obfuscating)
            output += "</span>";

          output += "<span style=\"" + lastStyle + "\">";
          lastStyleLevel++;
          i++;

          if (obfuscating)
            output += "<span class=\"kurcraft-obfuscate\">";
          continue;
        }

        // Is obfuscate -----------------------------------------------------/
        if (nextCode === "k") {
          obfuscating = true;
          output += "<span class=\"kurcraft-obfuscate\">";
          i++;
          continue;
        }

        // Is reset? --------------------------------------------------------/
        if (nextCode === "r") {
          cleanStyles();
          i++;
          continue;
        }
      }

      if (char === " ")
        char = "&nbsp;";

      output += char;
    }

    return output;
  }

  function randomRange (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function obfuscateUpdate () {
    if (obfuscates == null || obfuscates.length === 0)
      return;

    obfuscateAnimationReqeastId = window.requestAnimationFrame(obfuscateUpdate);
  
    for (let i in obfuscates) {
      var obfuscateElement = obfuscates[i];
      var randStr = "";
      for (let j in obfuscateElement.innerHTML.replace(/&(?:.|\n)*?;/gm, " "))
        randStr += String.fromCharCode(randomRange(64, 95));
      obfuscateElement.innerHTML = randStr;
    }
  }

  function refeashObfuscate (rootElement) {
    if (typeof window === 'undefined')
      return console.warn("[MinecraftTextJS] refeashObfuscate(rootElement?) only support on browser");

    window.cancelAnimationFrame(obfuscateAnimationReqeastId);
    obfuscates.length = 0;

    let fromElement = rootElement != null ? rootElement : document;

    obfuscates = Array.prototype.slice.call(fromElement.getElementsByClassName("kurcraft-obfuscate"));
    obfuscateUpdate();
  }

  function initJQuery ($) {
    $.fn.minecraftTextJS = function () {
      this.toHTML = function (text) {
        var mText = externalFn.toHTML(text);
        this.html(mText);
      };

      this.refeashObfuscate = function () {
        externalFn.refeashObfuscate(this[0]);
      };

      return this;
    };
  }
  
  const externalFn = {
    toHTML: toHTML,
    refeashObfuscate: refeashObfuscate
  };

  const hasRequire = (typeof require !== 'undefined');
  if (hasRequire) {
    module.exports = externalFn;
    try {
      // Try init NodeJS jQuery
      initJQuery(require("jquery"));
    } catch (ex) {}
  } else {
    window.MinecraftTextJS = externalFn;
    // Init jQuery in browser
    if (typeof jQuery !== 'undefined')
      initJQuery(jQuery);
  }
}());