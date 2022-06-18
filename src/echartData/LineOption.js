import React, { useEffect } from "react";
import * as echarts from 'echarts';
import { Autil } from '../eApi';

let myChart;
const timerNum = 1000 * 10;
const LineOption = (props) => {
  useEffect(() => {
    const size = {
      width: (document.querySelector(".EchartPlugin").clientWidth / 2) - 8.5,
      height: ((document.documentElement.clientHeight - 60) / 2),
    };
    myChart = echarts.init(document.getElementById("LineOption"), 'dark', size);
    window.onresize = () => {
      const screenWidth = document.querySelector(".EchartPlugin").clientWidth / 2;
      myChart.resize({ width: screenWidth, height: ((document.documentElement.clientHeight - 60) / 2) });
    };
    getChartsData();
  }, []);

  let getTimer = null;
  const getChartsData = () => {
    clearTimeout(getTimer);
    Autil.post('/getLine').then((data) => {
      myChart.setOption(data.data);
      getTimer = setTimeout(() => {
        getChartsData();
      }, timerNum);
    }).catch((error) => {
      console.warn(error.name + ',' + error.message);
      getTimer = setTimeout(() => {
        getChartsData();
      }, timerNum);
    });
  }

  return (
    <div className="LineOption" >
      <div id={"LineOption"}></div>
    </div>
  );
}

export default LineOption;