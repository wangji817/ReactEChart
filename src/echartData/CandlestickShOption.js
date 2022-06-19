import React, { useEffect } from "react";
import { Store } from '../redux';

let myChart;
const CandlestickShOption = (props) => {
    const { dispatch, useStore, } = Store;
    const candlestickShOption = useStore(state => state.candlestickShOption);/**取当前store的state值 */
    const timerNum = useStore(state => state.timerNum);/**取当前store的state值 */
    useEffect(() => {
        const size = {
            width: (document.querySelector(".EchartPlugin").clientWidth / 2) - 8.5,
            height: ((document.documentElement.clientHeight - 60) / 2),
        };
        myChart = props.data.echarts.init(document.getElementById("CandlestickShOption"), 'dark', size);
        props.data.resize(myChart);
        getChartsData();
    }, []);

    let getTimer = null;
    const getChartsData = () => {
        dispatch("asyncGetCandlestickSh", {});
        clearTimeout(getTimer);
        getTimer = setTimeout(() => {
            getChartsData();
        }, timerNum.candlestickShNum);
    }
    useEffect(() => {
        myChart.setOption(candlestickShOption);
    }, [candlestickShOption]);

    return (
        <div className="CandlestickShOption">
            <div id={"CandlestickShOption"}></div>
        </div>
    );
}

export default CandlestickShOption;