const MinecraftText = require('../../dist/minecraft_text');

console.log('Minecraft Text JS Example - NodeJS');

const startTime = Date.now();

const htmlText = MinecraftText.toHTML('&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D');
console.log(`========= Output =========\n${htmlText}\n`);
MinecraftText.refeashObfuscate();

const processSeconds = (Date.now() - startTime) / 1000;
console.log(`Process time: ${processSeconds}s`);
