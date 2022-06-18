import './index.scss';

import { LineOption, LegendOption, CandlestickOption, CandlestickShOption } from '../../echartData/';//这部分还可以优化

const EchartPlugin = (props) => {
    return (
        <div className="EchartPlugin">
            <LineOption />
            <LegendOption />
            <CandlestickOption />
            <CandlestickShOption />
        </div>
    );
}

export default EchartPlugin;