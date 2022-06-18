# ReactEChart 


----------

### 项目介绍

1. 以creacte-react-app脚手架为框体，单页面应用展现大数据，以echarts npm包插件实现多种图表数据展示，[Echarts传送门](https://echarts.apache.org/handbook/zh/basics/import)。
2. 当前支持模块包版本nodejs>=16、npm>=8、yarn>=1.2，推荐使用nvm管理nodejs，方便多个项目切换
3. 推荐yarn安装项目，或使用cnpm install或npm install
4. 启动命令npm start

### 文件介绍
```
-- component：子组件目录
-- EchartPlugin：
```


#### 目录

```
|-- LICENSE
|-- README.md
|-- package.json
|-- public
|   |                               `-- favicon.ico
|   |                               `-- index.html
|   |                               `-- logo192.png
|   |                               `-- logo512.png
|   |                               `-- manifest.json
|                                   `-- robots.txt
|-- src
|   |                               `-- App.css
|   |                               `-- App.js
|   |                               `-- App.test.js
|   |                               `-- component
|   |                               `-- EchartPlugin
|   |       |                       `-- index.js
|   |                               `-- index.scss
|   |-- echartData
|   |   |-- CandlestickOption.js
|   |   |-- CandlestickShOption.js
|   |   |-- LegendOption.js
|   |   |-- LineOption.js
|   |   `-- index.js
|   |-- index.css
|   |-- index.js
|   |-- logo.svg
|   |-- reportWebVitals.js
|   `-- setupTests.js
```