# MinecraftTextJS

把你的Minecraft文本轉換為其他格式！=D

---

其他語言：
[English](https://github.com/OnikurYH/minecraft-text-js/blob/master/README.md) |
[正體中文](https://github.com/OnikurYH/minecraft-text-js/blob/master/docs/readme/READMS.zh-hk.md)

## 特點
* 轉換為 HTML DOM
* 文本可以使用 ＆ 和 §
* 支持 HTML DOM，jQuery 和 Node.js！
* 用 TypeScript 編寫
* ...在未來會有更多的功能！

## 例子
您可以在 “examples” 文件夾中找到怎样使用這個 Script

## 演示
你可以在 https://onikuryh.github.io/minecraft-text-js/ 試試這個 Script

## Installation
| 套件管理工具 | Command                                                       |
|---------|---------------------------------------------------------------|
| None    | `git clone https://github.com/OnikurYH/minecraft-text-js.git` |
| NPM     | `npm install --save minecraft-text-js`                        |
| Yarn    | `yarn add minecraft-text-js`                                  |

## 用法

有關格式化代碼，請參閱 Minecraft 官方 Wiki：

http://minecraft-zh.gamepedia.com/%E6%A0%B7%E5%BC%8F%E4%BB%A3%E7%A0%81

### Javascript (瀏覽器)
```javascript
var myRawMinecraftString = '&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D';
var myMinecraftHTMLString = MinecraftText.toHTML(myRawMinecraftString);
document.getElementById('my-element').innerHTML = myMinecraftHTMLString;
// 使 obfuscate (模糊)(&k) 生成動畫
MinecraftTextJS.refeashObfuscate();
```

### jQuery
#### 方法 1 (單一元素)
```javascript
var myRawMinecraftString = '&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D';
var myElement = $('my_element').minecraftText();
myElement.toHTML(myRawMinecraftString);
// 使 obfuscate (模糊)(&k) 生成動畫在這個元素
myElement.refeashObfuscate();
```
#### 方法 2 (多元素)
```javascript
var myRawMinecraftString = '&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D';
var myElement = $('my_element');
var myMinecraftHTMLString = MinecraftText.toHTML(myRawMinecraftString);
myElement.html(myMinecraftHTMLString);
// 使 obfuscate (模糊)(&k) 生成動畫在所有元素
MinecraftTextJS.refeashObfuscate();
```

### Node.JS
#### JavaScript
```javascript
const MinecraftTextJS = require('minecraft-text-js');

const myRawMinecraftString = "&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D";
const myMinecraftHTMLString = MinecraftTextJS.toHTML(myRawMinecraftString);
```

#### TypeScript
```typescript
import MinecraftTextJS from 'minecraft-text-js';

const myRawMinecraftString = "&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D";
const myMinecraftHTMLString = MinecraftTextJS.toHTML(myRawMinecraftString);
```

## API

### HTML DOM 字符串

str - 要轉換的字符串
```javascript
MinecraftText.toHTML(str);
```

### 刷新 obfuscate 動畫

在您附加新的 HTML DOM 字符串而且有 obfuscate 之後使用

rootElement (可選的) - 刷新元素
```javascript
MinecraftText.refeashObfuscate(rootElement?);
```

## Build

你可以自己 build 這個 Script =P

### 預構建要求
* git
* Node.js >= 10.16.0
* Yarn >= 1.17.3

打開命令行終端
```sh
cd /where/you/want/to/clone/into
git https://github.com/OnikurYH/minecraft-text-js.git
cd minecraft-text-js
yarn install
yarn build
```
最後將建立在 “dist” 文件夾上

---

由 OnikurYH 開發

License: MIT
