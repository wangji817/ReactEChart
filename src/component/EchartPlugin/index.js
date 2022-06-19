import './index.scss';

import { LineOption, LegendOption, CandlestickOption, CandlestickShOption } from '../../echartData/';//这部分还可以优化
import * as echarts from 'echarts';

const EchartPlugin = (props) => {
    const resize = (myChart) => {
        window.addEventListener('resize', () => {
            const screenWidth = document.querySelector(".EchartPlugin").clientWidth / 2;
            myChart.resize({ width: screenWidth, height: ((document.documentElement.clientHeight - 60) / 2) });
        });
    }
    return (
        <div className="EchartPlugin">
            <LineOption data={{ echarts, resize }} />
            <LegendOption data={{ echarts, resize }} />
            <CandlestickOption data={{ echarts, resize }} />
            <CandlestickShOption data={{ echarts, resize }} />
        </div>
    );
}

export default EchartPlugin;