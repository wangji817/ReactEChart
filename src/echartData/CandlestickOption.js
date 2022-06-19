import React, { useEffect } from "react";
import { Store } from '../redux';

let myChart;
const CandlestickOption = (props) => {
  const { dispatch, useStore, } = Store;
  const candlestickOption = useStore(S => S.candlestickOption);/**取当前store的state值 */
  useEffect(() => {
    const size = {
      width: (document.querySelector(".EchartPlugin").clientWidth / 2) - 8.5,
      height: ((document.documentElement.clientHeight - 60) / 2),
    };
    myChart = props.data.echarts.init(document.getElementById("CandlestickOption"), 'dark', size);
    props.data.resize(myChart);
    getChartsData();
  }, []);
  
  //固定k线，不用计时器循环
  const getChartsData = () => {
    dispatch("asyncGetCandlestick", {});        
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