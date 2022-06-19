import { createStore } from 'stamen';
import { GetLine, GetLegend, GetCandlestick, GetCandlestickSh } from '../eApi/util';

const Store = createStore({
    state: {
        timerNum: {
            lineNum: 3000,
            legendNum: 5000,
            candlestickNum: 8000,
            candlestickShNum: 10000,
        },
        lineOption: {},
        legendOption: {},
        candlestickOption: {},
        candlestickShOption: {},
    },
    reducers: {
        setLineOption(state, data) {
            state.lineOption = data.data;
        },
        setLegendOption(state, data) {
            state.legendOption = data.data;
        },
        setCandlestickOption(state, data) {
            state.candlestickOption = data.data;
        },
        setCandlestickShOption(state, data) {
            state.candlestickShOption = data.data;
        },
    },
    effects: {
        async asyncGetLine(data) {
            let new_data = await GetLine(data);
            Store.dispatch(A => A.setLineOption, new_data);
        },
        async asyncGetLegend(data) {
            let new_data = await GetLegend(data);
            Store.dispatch(A => A.setLegendOption, new_data);
        },
        async asyncGetCandlestick(data) {
            let new_data = await GetCandlestick(data);
            Store.dispatch(A => A.setCandlestickOption, new_data);
        },
        async asyncGetCandlestickSh(data) {
            let new_data = await GetCandlestickSh(data);
            Store.dispatch(A => A.setCandlestickShOption, new_data);
        },
    }
})

export { Store };