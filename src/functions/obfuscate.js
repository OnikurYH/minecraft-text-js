import { randomRange } from '../utils';

let obfuscates = [];
let obfuscateAnimationReqeastId = -1;

export function obfuscateUpdate () {
  if (obfuscates == null || obfuscates.length === 0)
    return;

  obfuscateAnimationReqeastId = window.requestAnimationFrame(obfuscateUpdate);

  for (let i in obfuscates) {
    const obfuscateElement = obfuscates[i];
    const randStr = '';
    for (let j in obfuscateElement.innerHTML.replace(/&(?:.|\n)*?;/gm, ' ')) {
      randStr += String.fromCharCode(randomRange(64, 95));
    }
    obfuscateElement.innerHTML = randStr;
  }
}

export function refeashObfuscate (rootElement) {
  if (typeof window === 'undefined')
    return console.warn("[MinecraftTextJS] refeashObfuscate(rootElement?) only support on browser");

  window.cancelAnimationFrame(obfuscateAnimationReqeastId);
  obfuscates.length = 0;

  const fromElement = rootElement || document;

  obfuscates = Array.prototype.slice.call(fromElement.getElementsByClassName("kurcraft-obfuscate"));
  obfuscateUpdate();
}
