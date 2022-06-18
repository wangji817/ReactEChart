import './index.scss';

import React, { useEffect, useState, } from 'react';
import * as echarts from 'echarts';
import { LineOption, LegendOption, CandlestickOption, CandlestickShOption } from '../../echartData/';//这部分还可以优化

const EchartPlugin = (props) => {
    const [myCharts, setMyChart] = useState([]);
    const options = [LineOption, LegendOption, CandlestickOption, CandlestickShOption];
    useEffect(() => {
        const size = {
            width: (document.querySelector(".EchartPlugin").clientWidth / 2) - 8.5,
            height: ((document.documentElement.clientHeight - 60) / 2),
        };
        options.forEach(item => {
            let myChart = echarts.init(document.getElementById(item.id), 'dark', size);
            myChart.setOption(item);
            setMyChart([...myCharts, item]);
        });
    }, []);

    useEffect(() => {
        window.onresize = () => {
            const screenWidth = document.querySelector(".EchartPlugin").clientWidth / 2;
            myCharts.forEach(item => item.resize({ width: screenWidth, height: ((document.documentElement.clientHeight - 60) / 2) }));
        };
    }, [myCharts]);

    return (
        <div className="EchartPlugin">
            {
                options.map((item, index) => {
                    return (
                        <div key={`echart${index}`} id={item.id}></div>
                    )
                })
            }
        </div>
    );
}

export default EchartPlugin;
