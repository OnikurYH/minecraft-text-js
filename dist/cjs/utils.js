"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.randomRange = randomRange;
function stringToHtmlEntities(str) {
    return str.replace(/[\u00A0-\u9999<>\&]/gim, (c) => {
        return `&#${c.charCodeAt(0)};`;
    });
}
exports.stringToHtmlEntities = stringToHtmlEntities;
//# sourceMappingURL=utils.js.map