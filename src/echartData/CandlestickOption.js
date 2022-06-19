import React, { useEffect } from "react";
import { Store } from '../redux';

let myChart;
const CandlestickOption = (props) => {
  const { dispatch, useStore, } = Store;
  const candlestickOption = useStore(S => S.candlestickOption);/**取当前store的state值 */
  const timerNum = useStore(S => S.timerNum);/**取当前store的state值 */
  useEffect(() => {
    const size = {
      width: (document.querySelector(".EchartPlugin").clientWidth / 2) - 8.5,
      height: ((document.documentElement.clientHeight - 60) / 2),
    };
    myChart = props.data.echarts.init(document.getElementById("CandlestickOption"), 'dark', size);
    props.data.resize(myChart);
    getChartsData();
  }, []);

  let getTimer = null;
  const getChartsData = () => {
    dispatch("asyncGetCandlestick", {});
    clearTimeout(getTimer);
    getTimer = setTimeout(() => {
      getChartsData();
    }, timerNum.candlestickNum);
  }
  useEffect(() => {
    myChart.setOption(candlestickOption);
  }, [candlestickOption]);

  return (
    <div className="CandlestickOption" >
      <div id={"CandlestickOption"}></div>
    </div>
  );
}

export default CandlestickOption;