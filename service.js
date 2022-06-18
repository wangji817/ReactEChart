const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const defaultUrl = '/online/chartsService/mast';

const GetCandlestickOption = require('./online/chartsService/mast/getCandlestick.js');
const GetCandlestickShOption = require('./online/chartsService/mast/getCandlestickSh.js');
const GetLegendOption = require('./online/chartsService/mast/getLegend.js');
const GetLineOption = require('./online/chartsService/mast/getLine.js');

const ajaxUrl = {
    candlestick: '/getCandlestick',
    candlestickSh: '/getCandlestickSh',
    legend: '/getLegend',
    line: '/getLine',
}

//上证总
app.get(defaultUrl + ajaxUrl.candlestick, (req, res) => {
    // console.log(req.query);
    const data = GetCandlestickOption();
    res.send({ data });
});
app.post(defaultUrl + ajaxUrl.candlestick, (req, res) => {
    // console.log(req.query);
    const data = GetCandlestickOption();
    res.send({ data });
});

//上证
app.get(defaultUrl + ajaxUrl.candlestickSh, (req, res) => {
    // console.log(req.query);
    const data = GetCandlestickShOption();
    res.send({ data });
});
app.post(defaultUrl + ajaxUrl.candlestickSh, (req, res) => {
    // console.log(req.query);
    const data = GetCandlestickShOption();
    res.send({ data });
});

//圆饼
app.get(defaultUrl + ajaxUrl.legend, (req, res) => {
    // console.log(req.query);    
    const data = GetLegendOption();
    res.send({ data });
});
app.post(defaultUrl + ajaxUrl.legend, (req, res) => {
    // console.log(req.query);
    const data = GetLegendOption();
    res.send({ data });
});

//折线
app.get(defaultUrl + ajaxUrl.line, (req, res) => {
    // console.log(req.query);    
    const data = GetLineOption();
    res.send({ data });
});
app.post(defaultUrl + ajaxUrl.line, (req, res) => {
    // console.log(req.query);
    const data = GetLineOption();
    res.send({ data });
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on http://localhost::${port}, Ctrl+C to stop`)
});