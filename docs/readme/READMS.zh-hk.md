# MinecraftTextJS

把你的Minecraft文本轉換為其他格式！=D

---

其他語言：
[English](https://github.com/OnikurYH/minecraft-text-js/blob/master/README.md) |
[正體中文](https://github.com/OnikurYH/minecraft-text-js/tree/master/docs/readme/README.zh-hk.md)

## 特點
* 轉換為 HTML DOM
* 文本可以使用 ＆ 和 §
* 支持 HTML DOM，jQuery 和 Node.js！
* ...在未來會有更多的功能！

## 例子
您可以在 “examples” 文件夾中找到怎样使用這個 Script

## 演示
你可以在 https://onikuryh.github.io/minecraft-text-js/ 試試這個 Script

## Installation
| 套件管理工具 | Command                                                       |
|------------|---------------------------------------------------------------|
| 沒有 =P     | `git clone https://github.com/OnikurYH/minecraft-text-js.git` |
| Bower      | `bower install --save minecraft-text-js`                      |
| NPM        | `npm i --save minecraft-text-js`                              |

## 用法

有關格式化代碼，請參閱Minecraft官方Wiki：

http://minecraft-zh.gamepedia.com/%E6%A0%B7%E5%BC%8F%E4%BB%A3%E7%A0%81

### Javascript (瀏覽器)
```javascript
var myRawMinecraftString = "&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D";
var myMinecraftHTMLString = MinecraftTextJS.toHTML(myRawMinecraftString);
document.getElementById("my_element").innerHTML = myMinecraftHTMLString;
// 使 obfuscate (模糊)(&k) 生成動畫
MinecraftTextJS.refeashObfuscate();
```

### jQuery
#### 方法 1 (單一元素)
```javascript
var myRawMinecraftString = "&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D";
var myElement = $("my_element").minecraftTextJS()
myElement.toHTML(myRawMinecraftString);
// 使 obfuscate (模糊)(&k) 生成動畫在這個元素
myElement.refeashObfuscate();
```
#### 方法 2 (多元素)
```javascript
var myRawMinecraftString = "&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D";
var myElement = $("my_element");
var myMinecraftHTMLString = MinecraftTextJS.toHTML(myRawMinecraftString);
myElement.html(myMinecraftHTMLString);
// 使 obfuscate (模糊)(&k) 生成動畫在所有元素
MinecraftTextJS.refeashObfuscate();
```

### Node.JS
```javascript
const MinecraftTextJS = require('minecraft-text-js');

var myRawMinecraftString = "&3This &nis&r &ma&r &5&oMinecraft &lstyle &6&ltext &ka&6, Ya&r&6! &r&0=D";
var myMinecraftHTMLString = MinecraftTextJS.toHTML(myRawMinecraftString);
```

## API

### HTML DOM 字符串

str - 要轉換的字符串
```javascript
MinecraftTextJS.toHTML(str);
```

### 刷新 obfuscate 動畫

在您附加新的 HTML DOM 字符串而且有 obfuscate 之後使用

rootElement (可選的) - 刷新元素
```javascript
MinecraftTextJS.refeashObfuscate(rootElement?);
```

## Build

你可以自己 build 這個 Script =P

### 預構建要求
* git
* nodejs >= 4.0
* gulp >= 2

打開 cmd (Windows) or 終端 (Terminal)(Mac OS X / Linux)
```sh
cd /where/you/want/to/clone/into
git https://github.com/OnikurYH/minecraft-text-js.git
cd minecraft-text-js
npm install
gulp
```
最後將建立在 “dist” 文件夾上

---

由 OnikurYH 開發

License: MIT
