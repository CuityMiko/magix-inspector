# Magix Inspector [![Version Number](https://img.shields.io/npm/v/magix-inspector.svg)](https://github.com/thx/magix-inspector/ "Version Number") [![THX Team](https://img.shields.io/badge/team-THX-green.svg)](https://thx.github.io/ "THX Team") [![License](https://img.shields.io/badge/license-MIT-orange.svg)](https://opensource.org/licenses/MIT "License") [![download](https://img.shields.io/npm/dm/magix-inspector.svg)](https://www.npmjs.com/package/magix-inspector)

Magix项目的调试分析工具，直观的展示区块间的层级关系，实时以不同颜色显示渲染情况，渲染不正确的区块飘红

![snapshot](snapshot.png)

# 使用

`npm install magix-inspector`

然后在html页面中通过script引入，如

```html
<script type="text/javascript" src="node_modules/magix-inspector/src/index.js"></script>
```

或通过书签的方式添加一段js代码：

```js
javascript:void((function(d,s){s=d.createElement('script');s.src='//thx.github.io/magix/assets/helper.js';s.charset='utf-8';d.body.appendChild(s)}(document)))
```

在运行Magix的页面上点击添加的书签，既可使用线上的代码来查看区块间关系