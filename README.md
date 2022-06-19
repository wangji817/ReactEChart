# ReactEChart 

----------

### 项目介绍

1. 以creacte-react-app脚手架为框体，使用React-Hooks，单页面应用展现大数据，以echarts npm包插件实现多种图表数据展示，[Echarts传送门](https://echarts.apache.org/handbook/zh/basics/import)。
2. 技术栈：React、React-Hooks、Echarts、Axios、Nodejs、Express、 
3. 当前支持模块包版本nodejs>=16、npm>=8、yarn>=1.2，推荐使用nvm管理nodejs，方便多个项目切换
4. 推荐yarn安装项目，或使用cnpm install或npm install
5. 项目根目录启动命令：npm start
6. 项目根目录node服务启动命令：node service.js
7. 地址访问：http://localhost:3000/

### 效果预览
![](https://github.com/wangji817/gitImg/blob/master/re.png)

### 文件介绍
```
-- component：子组件目录
	-- EchartPlugin：echarts插件父组件
-- echartData：echarts图表列表
	-- CandlestickOption.js：上证指数
	-- CandlestickShOption.js：上证指数
	-- LegendOption.js：圆饼图
	-- LineOption.js：折线图
	-- index.js：所有组件列表
-- redux：状态管理
-- online：node服务接口地址文件
-- service.js：node服务
```
**可根据需求，新增或修改**


#### 目录

```
|-- LICENSE
|-- README.md
|-- file.md
|-- online
|                   `-- chartsService
|                   `-- mast
|           |       `-- getCandlestick.js
|           |       `-- getCandlestickSh.js
|           |       `-- getLegend.js
|                   `-- getLine.js
|-- package-lock.json
|-- package.json
|-- public
|   |-- favicon.ico
|   |-- index.html
|   |-- logo192.png
|   |-- logo512.png
|   |-- manifest.json
|   `-- robots.txt
|-- service.js
|-- src
|   |-- App.js
|   |-- App.scss
|   |-- App.test.js
|   |-- component
|   |   |-- EchartPlugin
|   |   |   |       `-- index.js
|   |   |           `-- index.scss
|   |   `-- index.js
|   |-- eApi
|   |   |-- getCandlestick.js
|   |   |-- getCandlestickSh.js
|   |   |-- getLegend.js
|   |   |-- getLine.js
|   |   |-- index.js
|   |   `-- util.js
|   |-- echartData
|   |   |-- CandlestickOption.js
|   |   |-- CandlestickShOption.js
|   |   |-- LegendOption.js
|   |   |-- LineOption.js
|   |   `-- index.js
|   |-- index.css
|   |-- index.js
|   |-- logo.svg
|   |-- redux
|   |   `-- index.js
|   |-- reportWebVitals.js
|   `-- setupTests.js
```