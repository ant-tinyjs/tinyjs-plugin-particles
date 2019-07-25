# tinyjs-plugin-particles

> A really fast type of the Container built solely for speed

## 查看demo

http://tinyjs.net/plugins/tinyjs-plugin-particles.html#demo

## 引用方法

- 推荐作为依赖使用

  - `npm install tinyjs-plugin-particles --save`

- 也可以直接引用线上cdn地址，注意要使用最新的版本号，例如：

  - https://gw.alipayobjects.com/os/lib/tinyjs-plugin-particles/0.2.0/index.js
  - https://gw.alipayobjects.com/os/lib/tinyjs-plugin-particles/0.2.0/index.debug.js

## 起步
首先当然是要引入，推荐`NPM`方式，当然你也可以使用`CDN`或下载独立版本，先从几个例子入手吧！

##### 1、最简单的例子

引用 Tiny.js 源码
``` html
<script src="https://gw.alipayobjects.com/os/lib/tinyjs/tiny/1.2.4/tiny.js"></script>
```
``` js
var particles = require('tinyjs-plugin-particles');
var ParticleContainer = particles.ParticleContainer;
// 或者
// import {ParticleContainer} from 'tinyjs-plugin-particles';

var pContainer = new ParticleContainer();
```

## 依赖
- `Tiny.js`: [Link](http://tinyjs.net/api)

## API文档

http://tinyjs.net/plugins/tinyjs-plugin-particles.html#docs
