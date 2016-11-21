# MinecraftTextJS

Turn your minecraft text to other format! =D

---

## Features
* Convert to HTML DOM
* Accept & and §
* ... More feature on the future!

## Examples
You can find examples on the "examples" folder

## Live demo
You can see the demo on https://onikuryh.github.io/minecraft-text-js/

## Usage

For formatting code, please see the Minecraft Official Wiki:

http://minecraft.gamepedia.com/Formatting_codes

### Browser Javascript
```javascript
var myRawMinecraftString = "&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D";
var myMinecraftHTMLString = MinecraftTextJS.toHTML(myRawMinecraftString);
document.getElementById("my_element").innerHTML = myMinecraftHTMLString;
// Make obfuscate (&k) animate
MinecraftTextJS.refeashObfuscate();
```

### Node.JS
```javascript
const MinecraftTextJS = require('minecraft-text-js');

var myRawMinecraftString = "&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D";
var myMinecraftHTMLString = MinecraftTextJS.toHTML(myRawMinecraftString);
```

## API

### To HTML DOM String

str - The string you want to convert to HTML DOM String
```javascript
MinecraftTextJS.toHTML(str);
```

### Refeash obfuscate animation

Use for after you have append a new HTML DOM String with obfuscate values

rootElement (optional) - Refeash from element
```javascript
MinecraftTextJS.refeashObfuscate(rootElement?);
```

## Build

You can build this library by yourself =P

### Pre-build requirements
* git
* nodejs >= 4.0
* gulp >= 2

Open cmd (Windows) or Terminal (Mac OS X / Linux)
```sh
cd /where/you/want/to/clone/into
git https://github.com/OnikurYH/minecraft-text-js.git
cd minecraft-text-js
npm install
gulp
```
The script will be built on the "dist" folder

---

Develop by: OnikurYH

Licanse: MIT
