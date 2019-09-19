import { randomRange } from '../utils';

let obfuscates: Element[] = [];
let obfuscateAnimationReqeastId = -1;

export function obfuscateUpdate () {
  if (obfuscates == null || obfuscates.length === 0)
    return;

  obfuscateAnimationReqeastId = window.requestAnimationFrame(obfuscateUpdate);

  for (let i in obfuscates) {
    const obfuscateElement = obfuscates[i];
    let randStr = '';
    const elementStr = obfuscateElement.innerHTML.replace(/&(?:.|\n)*?;/gm, ' ');
    for (let j = 0; j < elementStr.length; j++) {
      randStr += String.fromCharCode(randomRange(64, 95));
    }
    obfuscateElement.innerHTML = randStr;
  }
}

export function refeashObfuscate (rootElement: HTMLElement) {
  if (typeof window === 'undefined') {
    return console.warn('[MinecraftTextJS] refeashObfuscate(rootElement?) only support on browser');
  }

  window.cancelAnimationFrame(obfuscateAnimationReqeastId);
  obfuscates.length = 0;

  const fromElement = rootElement || document;

  obfuscates = Array.prototype.slice.call(fromElement.getElementsByClassName('kurcraft-obfuscate'));
  obfuscateUpdate();
}
