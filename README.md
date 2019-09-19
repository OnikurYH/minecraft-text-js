# MinecraftTextJS

Turn your minecraft text to other format! =D

---

Other languages:
[English](https://github.com/OnikurYH/minecraft-text-js/blob/master/README.md) |
[正體中文](https://github.com/OnikurYH/minecraft-text-js/blob/master/docs/readme/READMS.zh-hk.md)

## Features
* Convert to HTML DOM
* Accept & and §
* Support HTML DOM, jQuery and Node.js!
* Written in TypeScript
* ... More feature on the future!

## Examples
You can find examples on the "examples" folder

## Live demo
You can see the demo on https://onikuryh.github.io/minecraft-text-js/

## Installation
| Package | Command                                                       |
|---------|---------------------------------------------------------------|
| None    | `git clone https://github.com/OnikurYH/minecraft-text-js.git` |
| NPM     | `npm install --save minecraft-text-js`                        |
| Yarn    | `yarn add minecraft-text-js`                                  |

## Usage

For formatting code, please see the Minecraft Official Wiki:

http://minecraft.gamepedia.com/Formatting_codes

### Browser Javascript
```javascript
var myRawMinecraftString = '&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D';
var myMinecraftHTMLString = MinecraftText.toHTML(myRawMinecraftString);
document.getElementById('my-element').innerHTML = myMinecraftHTMLString;
// Make obfuscate (&k) animate
MinecraftText.refeashObfuscate();
```

### jQuery
#### Method 1 (For single element)
```javascript
var myRawMinecraftString = '&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D';
var myElement = $('my_element').minecraftText();
myElement.toHTML(myRawMinecraftString);
// Make obfuscate (&k) animate on this element
myElement.refeashObfuscate();
```
#### Method 2 (For multi element)
```javascript
var myRawMinecraftString = '&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D';
var myElement = $('my_element');
var myMinecraftHTMLString = MinecraftText.toHTML(myRawMinecraftString);
myElement.html(myMinecraftHTMLString);
// Make obfuscate (&k) animate on global
MinecraftText.refeashObfuscate();
```

### Node.JS
#### JavaScript
```javascript
const MinecraftText = require('minecraft-text-js');

var myRawMinecraftString = '&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D';
var myMinecraftHTMLString = MinecraftText.toHTML(myRawMinecraftString);
```

#### TypeScript
```typescript
import MinecraftTextJS from 'minecraft-text-js';

const myRawMinecraftString = "&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D";
const myMinecraftHTMLString = MinecraftTextJS.toHTML(myRawMinecraftString);
```

## API

### To HTML DOM String

str - The string you want to convert to HTML DOM String
```javascript
MinecraftText.toHTML(str);
```

### Refresh obfuscate animation

Use for after you have append a new HTML DOM String with obfuscate values

rootElement (optional) - Refresh from element
```javascript
MinecraftText.refeashObfuscate(rootElement?);
```

## Build

You can build this library by yourself =P

### Pre-build requirements
* git
* Node.js >= 10.16.0
* Yarn >= 1.17.3

Open command-line terminal
```sh
cd /where/you/want/to/clone/into
git https://github.com/OnikurYH/minecraft-text-js.git
cd minecraft-text-js
yarn install
yarn build
```
The script will be built on the "dist" folder

---

Develop by: OnikurYH

License: MIT
