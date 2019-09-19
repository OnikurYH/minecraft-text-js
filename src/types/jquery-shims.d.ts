interface JQuery {
  minecraftText(): JQuery;
  toHTML(text: string): void;
  refeashObfuscate(): void;
}

interface Window {
  jQuery: JQuery;
}
