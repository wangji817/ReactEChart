import React, { useEffect } from "react";
import { Store } from '../redux';

let myChart;
const LineOption = (props) => {
  const { dispatch, useStore, } = Store;
  const lineOption = useStore(state => state.lineOption);/**取当前store的state值 */
  const timerNum = useStore(state => state.timerNum);/**取当前store的state值 */
  useEffect(() => {
    const size = {
      width: (document.querySelector(".EchartPlugin").clientWidth / 2) - 8.5,
      height: ((document.documentElement.clientHeight - 60) / 2),
    };
    myChart = props.data.echarts.init(document.getElementById("LineOption"), 'dark', size);
    props.data.resize(myChart);
    getChartsData();
  }, []);

  let getTimer = null;
  const getChartsData = () => {
    dispatch("asyncGetLine", {});
    clearTimeout(getTimer);
    getTimer = setTimeout(() => {
      getChartsData();
    }, timerNum.lineNum);
  }
  useEffect(() => {    
    myChart.setOption(lineOption);
  }, [lineOption]);

  return (
    <div className="LineOption" >
      <div id={"LineOption"}></div>
    </div>
  );
}

export default LineOption;