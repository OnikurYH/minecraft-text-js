var MinecraftTextJS = require("../../");

var startTime = new Date();

var htmlText = MinecraftTextJS.toHTML("&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D");
console.log("========= Output =========\n%s", htmlText);
console.log("");

let processSeconds = (new Date().getTime() - startTime.getTime()) / 1000
console.log("Process time: %ss", processSeconds);