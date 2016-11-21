"use strict";

(function () {
  "use strict";

  var COLOR_CODES = {
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

  var STYLE_CODES = {
    "l": "font-weight: bold;",
    "m": "text-decoration: line-through;",
    "n": "text-decoration: underline;",
    "o": "font-style: italic;"
  };

  var obfuscates = [];
  var obfuscateAnimationReqeastId = -1;

  function toHTML(text) {
    var output = "";

    var lastColorLevel = 0;
    var lastStyleLevel = 0;

    var obfuscating = false;

    function cleanStyles() {
      for (var _i = 0; _i < lastColorLevel + lastStyleLevel; _i++) {
        output += "</span>";
      }
      lastColorLevel = lastStyleLevel = 0;
    }

    for (var i = 0; i < text.length; i++) {
      var char = text[i];

      if (char === "&" || char === "\xA7") {
        var nextCode = text[i + 1];

        var lastStyle = COLOR_CODES[nextCode];
        // Is color? --------------------------------------------------------/
        if (lastStyle != null) {
          if (lastColorLevel > 0 || lastStyleLevel > 0) cleanStyles();

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
          if (obfuscating) output += "</span>";

          output += "<span style=\"" + lastStyle + "\">";
          lastStyleLevel++;
          i++;

          if (obfuscating) output += "<span class=\"kurcraft-obfuscate\">";
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

      if (char === " ") char = "&nbsp;";

      output += char;
    }

    return output;
  }

  function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function obfuscateUpdate() {
    if (obfuscates == null || obfuscates.length === 0) return;

    obfuscateAnimationReqeastId = window.requestAnimationFrame(obfuscateUpdate);

    for (var i in obfuscates) {
      var obfuscateElement = obfuscates[i];
      var randStr = "";
      for (var j in obfuscateElement.innerHTML.replace(/&(?:.|\n)*?;/gm, " ")) {}
      randStr += String.fromCharCode(randomRange(64, 95));
      obfuscateElement.innerHTML = randStr;
    }
  }

  function refeashObfuscate(rootElement) {
    window.cancelAnimationFrame(obfuscateAnimationReqeastId);
    obfuscates.length = 0;

    var fromElement = rootElement != null ? rootElement : document;

    obfuscates = Array.prototype.slice.call(fromElement.getElementsByClassName("kurcraft-obfuscate"));
    obfuscateUpdate();
  }

  var externalFn = {
    toHTML: toHTML,
    refeashObfuscate: refeashObfuscate
  };

  var hasRequire = typeof require !== 'undefined';
  if (hasRequire) module.exports = externalFn;else window.MinecraftTextJS = externalFn;
}).call(undefined);