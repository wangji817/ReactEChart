import React, { useEffect } from "react";
import { Store } from '../redux';

let myChart;
const LegendOption = (props) => {
    const { dispatch, useStore, } = Store;
    const legendOption = useStore(S => S.legendOption);/**取当前store的state值 */
    const timerNum = useStore(S => S.timerNum);/**取当前store的state值 */
    useEffect(() => {
        const size = {
            width: (document.querySelector(".EchartPlugin").clientWidth / 2) - 8.5,
            height: ((document.documentElement.clientHeight - 60) / 2),
        };
        myChart = props.data.echarts.init(document.getElementById("LegendOption"), 'dark', size);
        props.data.resize(myChart);
        getChartsData();
    }, []);

    let getTimer = null;
    const getChartsData = () => {
        dispatch("asyncGetLegend", {});
        clearTimeout(getTimer);
        getTimer = setTimeout(() => {
            getChartsData();
        }, timerNum.legendNum);
    }
    useEffect(() => {
        myChart.setOption(legendOption);
    }, [legendOption]);

    return (
        <div className="LegendOption" >
            <div id={"LegendOption"}></div>
        </div>
    );
}

export default LegendOption;