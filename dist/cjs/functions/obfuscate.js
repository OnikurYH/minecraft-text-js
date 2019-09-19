"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
let obfuscates = [];
let obfuscateAnimationReqeastId = -1;
function obfuscateUpdate() {
    if (obfuscates == null || obfuscates.length === 0)
        return;
    obfuscateAnimationReqeastId = window.requestAnimationFrame(obfuscateUpdate);
    for (let i in obfuscates) {
        const obfuscateElement = obfuscates[i];
        let randStr = '';
        const elementStr = obfuscateElement.innerHTML.replace(/&(?:.|\n)*?;/gm, ' ');
        for (let j = 0; j < elementStr.length; j++) {
            randStr += String.fromCharCode(utils_1.randomRange(64, 95));
        }
        obfuscateElement.innerHTML = randStr;
    }
}
exports.obfuscateUpdate = obfuscateUpdate;
function refeashObfuscate(rootElement) {
    if (typeof window === 'undefined') {
        return console.warn('[MinecraftTextJS] refeashObfuscate(rootElement?) only support on browser');
    }
    window.cancelAnimationFrame(obfuscateAnimationReqeastId);
    obfuscates.length = 0;
    const fromElement = rootElement || document;
    obfuscates = Array.prototype.slice.call(fromElement.getElementsByClassName('kurcraft-obfuscate'));
    obfuscateUpdate();
}
exports.refeashObfuscate = refeashObfuscate;
//# sourceMappingURL=obfuscate.js.map