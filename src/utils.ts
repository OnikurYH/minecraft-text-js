export function randomRange (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function stringToHtmlEntities (str: string): string {
  return str.replace(/[\u00A0-\u9999<>\&]/gim, (c: string) => {
    return `&#${c.charCodeAt(0)};`;
  });
}
