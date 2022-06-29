const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const defaultUrl = '/online/chartsService/mast/';

const GetCandlestickOption = require('./online/chartsService/mast/getCandlestick.js');
const GetCandlestickShOption = require('./online/chartsService/mast/getCandlestickSh.js');
const GetLegendOption = require('./online/chartsService/mast/getLegend.js');
const GetLineOption = require('./online/chartsService/mast/getLine.js');

const ajaxUrl = {
    candlestick: 'getCandlestick',
    candlestickSh: 'getCandlestickSh',
    legend: 'getLegend',
    line: 'getLine',
}

const ajaxMatch = (url) => {
    let data = {};
    switch (url) {
        case '/' + ajaxUrl.candlestick:
            //上证总
            data = GetCandlestickOption();
            break;
        case '/' + ajaxUrl.candlestickSh:
            //上证
            data = GetCandlestickShOption();
            break;
        case '/' + ajaxUrl.legend:
            //圆饼
            data = GetLegendOption();
            break;
        case '/' + ajaxUrl.line:
            //折线
            data = GetLineOption();
            break;
        default:
            break;
    }
    return data;
}
router.get(/\/.*/, (req, res) => {
    const data = ajaxMatch(req.url);
    res.send({ data });
});
router.post(/\/.*/, (req, res) => {
    const data = ajaxMatch(req.url);
    res.send({ data });
});
app.use(defaultUrl, router);

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on http://localhost::${port}, Ctrl+C to stop`)
});