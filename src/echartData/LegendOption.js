import React, { createRef, useState, useEffect } from "react";
import * as echarts from 'echarts';
// import { Autil } from '../../eApi';

const LegendOption = (props) => {
    const ref = createRef();
    const [chartJson, getChartJson] = useState({});
    useEffect(() => {
        const size = {
            width: (ref.current.clientWidth / 2) - 8.5,
            height: ((document.documentElement.clientHeight - 60) / 2),
        };
        // const myChart = echarts.init(document.getElementById(chartJson.id), 'dark', size);
        // myChart.setOption(chartJson);
        // window.onresize = () => {
        //     const screenWidth = ref.current.clientWidth / 2;
        //     myChart.resize({ width: screenWidth, height: ((document.documentElement.clientHeight - 60) / 2) });
        // };
        getChartsData();
    }, []);

    let getTimer = null;
    const getChartsData = () => {
        // clearTimeout(getTimer);
        // getTimer = setTimeout(() => {
        //     Autil.get('/f/getLegend').then((data) => {
        //         console.log(data);
        //     }).catch((error) => {
        //         console.warn(error.name + ',' + error.message);
        //     });
        // }, 3000);
    }

    return (
        <div className="LegendOption" ref={ref}>
            <div id={chartJson.id || ""}></div>
        </div>
    );
}

export default LegendOption;